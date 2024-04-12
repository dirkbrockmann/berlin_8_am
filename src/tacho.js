import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import {cars} from "./model.js"
//import {maxBy,max,meanBy,minBy} from "lodash-es"
import styles from "./styles.module.css"


const tacho_r = cfg.tacho.size;
const tacho_tick = cfg.tacho.tick;
const fs = cfg.tacho.fontsize;

const tacho_border = d3.line()
		.x(function(d) { return tacho_r*Math.cos(d); })
		.y(function(d) { return -tacho_r*Math.sin(d);})

const initialize = (controls,grid) => {
	
	const v0 = param.mean_speed.range[1]+param.speed_variability.range[1]

	controls.select("."+styles.tacho).remove()	
	
	const pos=grid.position(cfg.tacho.anchor.x,cfg.tacho.anchor.y);		
	const tacho = controls.append("g").attr("class",styles.tacho)
		.attr("transform","translate("+pos.x+","+pos.y+")")
	
	tacho.append("path").data([d3.range(0,0.2*Math.PI,0.01)])
		.attr("d",tacho_border).attr("class",styles.tachoredzone)

	tacho.append("path").data([d3.range(0,Math.PI,0.01)])
		.attr("d",tacho_border).attr("class",styles.tachoborder)

	tacho.selectAll("."+styles.tachotick).data(d3.range(0,Math.PI+Math.PI/10,Math.PI/10)).enter()
		.append("line").attr("class",styles.tachotick)
		.attr("x1",d=>(tacho_r-tacho_tick)*Math.cos(d))
		.attr("x2",d=>(tacho_r)*Math.cos(d))
		.attr("y1",d=> -(tacho_r-tacho_tick)*Math.sin(d))
		.attr("y2",d=> -(tacho_r)*Math.sin(d))
	
	tacho.selectAll("."+styles.ticklabel).data(d3.range(0,Math.PI+Math.PI/10,Math.PI/10)).enter()
		.append("g")
 		.attr("transform",function(d,i){return "translate("+ (tacho_r+2*tacho_tick)*Math.cos(d)+","+(-(tacho_r+2*tacho_tick)*Math.sin(d))+")rotate("+(-d/(2*Math.PI)*360+90)+")"})
		.append("text")
	 	.text(function(d,i){return 150-i*15})
		.attr("class",styles.ticklabel)
	

	
	tacho.selectAll("."+styles.pin).data(cars).enter().append("line").attr("class",styles.pin)
		.attr("x1",function(d){return 0})
		.attr("x2",function(d){return -(tacho_r-2*tacho_tick)*Math.cos(d.v/v0)})
		.attr("y1",function(d){return 0})
		.attr("y2",function(d){return -(tacho_r-2*tacho_tick)*Math.sin(d.v/v0)})

	tacho.datum(d3.mean(cars,function(d){return d.v_avg})).append("line").attr("class",styles.meanspeed)
		.attr("x1",function(d){return 0})
		.attr("x2",function(d){return -(tacho_r-2*tacho_tick)*Math.cos(d/v0)})
		.attr("y1",function(d){return 0})
		.attr("y2",function(d){return -(tacho_r-2*tacho_tick)*Math.sin(d/v0)})
	
		tacho.append("circle").attr("class","pivot").attr("r",5)
}

const update = (controls) => {
	
	const v0 = param.mean_speed.range[1]+param.speed_variability.range[1]
	
	const tacho = controls.select("."+styles.tacho);
	
	tacho.selectAll("."+styles.pin).data(cars)
		.attr("x1",function(d){return 0})
		.attr("x2",function(d){return -(tacho_r-2*tacho_tick)*Math.cos(Math.PI*d.v_avg/(v0))})
		.attr("y1",function(d){return 0})
		.attr("y2",function(d){return -(tacho_r-2*tacho_tick)*Math.sin(Math.PI*d.v_avg/(v0))})
		
	tacho.selectAll("."+styles.meanspeed).datum(d3.mean(cars,function(d){return d.v_avg}))
		.attr("x1",function(d){return 0})
		.attr("x2",function(d){return -(tacho_r-2*tacho_tick)*Math.cos(Math.PI*d/(v0))})
		.attr("y1",function(d){return 0})
		.attr("y2",function(d){return -(tacho_r-2*tacho_tick)*Math.sin(Math.PI*d/(v0))})
	
}

export {initialize,update}