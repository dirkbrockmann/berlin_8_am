// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {cars} from "./model.js"
import styles from "./styles.module.css"
import {each,range,map,maxBy,minBy} from "lodash-es"
import {drawstreet,drawcar} from "./drawings.js"

const L = param.L;

const x = t => (param.path.rmin+param.path.varr*Math.cos(param.path.kr*2*Math.PI*t))
				* Math.cos( param.path.slope*2*Math.PI*t+
					param.path.vartheta*Math.sin(param.path.ktheta*2*Math.PI*t)
				);

const y = t => (param.path.rmin+param.path.varr*Math.cos(param.path.kr*2*Math.PI*t))
				* Math.sin( param.path.slope*2*Math.PI*t+
					param.path.vartheta*Math.sin(param.path.ktheta*2*Math.PI*t)
				);

const makeS = () => {
	let N = 2000;
	let t=range(0,1,1/N);
	var S = [0];
	for(let i=0;i<N-1;i++){
		S.push(S[i]+Math.sqrt( (x(t[i+1])-x(t[i]))*(x(t[i+1])-x(t[i])) + (y(t[i+1])-y(t[i]))*(y(t[i+1])-y(t[i])) ))
	}
	S = map(S, x => x/S[S.length-1]);
	return S;
}

const X = d3.scaleLinear().domain([-3.4,3.4])
const Y = d3.scaleLinear().domain([-3.4,3.4])
var C = d3.scaleLinear().range(["red","white"])
				
const street = d3.line().x( t=> X( x(t) )).y( t=> Y( y(t) ))
				
var rumps = makeS();

const S_to_T = s => {

	let Tl = rumps.filter(d=> d <= s % 1)
	let dd = (s-Tl[Tl.length-1])/(rumps[Tl.length]-rumps[Tl.length-1]);
	if (s > 1) {dd=0}
	return (Tl.length+dd)/(rumps.length-1);
}			

const xc = t => x(S_to_T(t));
const yc = t => y(S_to_T(t));

	

const initialize = (display,config) => {
	
	
	C.domain([0,maxBy(cars,c=>c.v0).v0])

	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
		
	display.selectAll("#origin").remove();
	
	const origin = display.append("g").attr("id","origin")

	drawstreet(origin,street)
	
	const car = origin.selectAll("."+styles.car).data(cars).enter().append("g")
		.attr("class",styles.car)
		.attr("transform",d=>{
			let dx = xc(d.x+0.001)-xc(d.x);
			let dy = yc(d.x+0.001)-yc(d.x);
			let dh = d.lane == "left" ? 8 : -8;
			let rotz = Math.atan2(dy,dx);

			if(d.passing==true){
				dh = d.lane == "left" ? (d.passing_tau * (-8) 
				+ (1-d.passing_tau)*8) : (d.passing_tau * (8) + (1-d.passing_tau)*(-8))
			} 
			return "translate("+X(xc(d.x))+","+Y(yc(d.x))+")rotate("+(90+rotz/Math.PI*180)+")translate("+dh+",0)scale(0.8)"
		
		})
		.style("fill",d => param.color_speed.widget.value() ? C(d.v) : "white")
		
	drawcar(car)
		
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,config) => {
		
	display.selectAll("#origin").selectAll("."+styles.car).attr("transform",d=>{
		let dx = xc(d.x+0.001)-xc(d.x);
		let dy = yc(d.x+0.001)-yc(d.x);
		let dh = d.lane == "left" ? 8 : -8;
		let rotz = Math.atan2(dy,dx);

		if(d.passing==true){
			dh = d.lane == "left" ? (d.passing_tau * (-8) 
			+ (1-d.passing_tau)*8) : (d.passing_tau * (8) + (1-d.passing_tau)*(-8))
		} 
		return "translate("+X(xc(d.x))+","+Y(yc(d.x))+")rotate("+(90+rotz/Math.PI*180)+")translate("+dh+",0)scale(0.8)"
		})
		.style("fill",d => d.passing && param.highlight_passing.widget.value() ? "blue" : param.color_speed.widget.value() ? C(d.v) : "white")
		
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	
	
	
}


export {initialize,go,update}
