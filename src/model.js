// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,mean} from "lodash-es"
import {ad} from "./utils"
import * as d3 from "d3"

const L = param.L;
const dt = param.dt;

// typically objects needed for the explorable
// are defined here

var cars = [];

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;
	const N = param.N;
	const v0 = param.mean_speed.widget.value()
	const vvar = param.speed_variability.widget.value()
	// make agents

	cars = map(range(2*N),i=>{
		const vdiff=Math.random();	
		return {
			id:i,
			x:i<N ? i/N % 1: (i/N+0.5/N) % 1 ,
			v:0,
			v0:param.mean_speed.widget.value()+param.speed_variability.widget.value()*vdiff,
			vdiff:vdiff,
			lane: i<N ? "left" : "right",
			passing: false,
			passing_tau:0,
			v_hist:map(range(50),d=>0),
			v_avg:0
		}
	})
	
	each(cars,(a,i)=>{
			if(i<N) {a.next=cars[(i + 1) % N]}
			else {a.next=cars[N+(i + 1) % N]};	
	})
	

};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	
	each(cars,(a,i)=>{
		
		if (Math.random()<0.5 && ad(a.next.x,a.x)< 0.03 && a.passing==false && param.allow_lane_changes.widget.value()){
		    var behind = cars.filter(function(o){return o.lane!=a.lane && ad(o.x,a.x) < 0 });
			var infront = cars.filter(function(o){return o.lane!=a.lane && ad(o.x,a.x) >  0 });
			var d_behind = d3.max(behind,function(o){return ad(o.x,a.x)});
			var d_infront = d3.min(infront,function(o){return ad(o.x,a.x)});

			if(d_behind < -0.015 && d_infront > 0.015 && d_infront > ad(a.next.x,a.x)) {

				var thislane_behind = cars.filter(function(d){return d.next==a})[0];

				thislane_behind.next=a.next;
				var back_car = behind.filter(function(o){return ad(o.x,a.x) == d_behind })[0]
				var front_car = infront.filter(function(o){return ad(o.x,a.x) == d_infront })[0]
				back_car.next = a;
				a.next = front_car;
				if (a.lane=="left") {a.lane="right"} else {a.lane="left"}
				a.passing=true;
				a.passing_tau=1.0;
			}
		}
		
		let me = a.x;
		let you = a.next.x;  
		
		if (ad(you,me) > param.inertia.widget.value()) {
			if(a.v<a.v0) {
				a.dv=param.acceleration.widget.value()*dt;
			} else {
				a.dv=-param.acceleration.widget.value()*dt;
			}
		}

		if (ad(you,me) < param.delta) { a.dv=(0.5*a.next.v-a.v); }
		
		if (ad(you,me) >= param.delta && ad(you,me) < param.inertia.widget.value()) { a.dv = 0; }
		
		if(a.passing==true) {a.passing_tau-=0.025}
		if(a.passing_tau<=0) {a.passing=false ; a.passing_tau=0}
		
		a.dx=a.v*dt;	
		
	})
	
	each(cars,a=>{
		a.x+=a.dx;
		a.v+=a.dv;
		if(a.v<0) {a.v=0};
		a.x = a.x % 1.0;
		a.v_hist.push(a.v);
		a.v_hist.shift();
		a.v_avg=mean(a.v_hist);
	})

		
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	each(cars,a =>{
			a.v0=param.mean_speed.widget.value()+param.speed_variability.widget.value()*a.vdiff
	})
	
	

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {cars,initialize,go,update}
