import styles from "./styles.module.css"
import {range,map} from "lodash-es"

const drawstreet = (origin,street) => {
	
	const n = 1000;
	const s = range(0,1+1/n,1/n);

	origin.append("path").datum(s).attr("d",street).attr("class",styles.street_background)
	origin.append("path").datum(s).attr("d",street).attr("class",styles.asphalt)
	origin.append("path").datum(s).attr("d",street).attr("class",styles.street_marks)		

}

const drawcar = (car) => {
	const tires = [{x:4,y:4},{x:4,y:-4},{x:-4,y:-4},{x:-4,y:4}]
	car.selectAll("."+styles.tire).data(tires).enter().append("circle").attr("class",styles.tire)
		.attr("r","2").attr("cy",d=>d.y).attr("cx",d=>d.x)
	
	car.append("rect").attr("width",8).attr("height",16).attr("rx",1).attr("ry",3)
		.attr("x","-4").attr("y","-8")
		//.style("fill",function(d){return colorcode.value ? C(d.v0) : "white"}).style("stroke","black").style("stroke-width",1)
	car.append("rect").attr("width",6).attr("height",6).attr("rx",1).attr("ry",1)
		.attr("x","-3").attr("y","-2")
		//.style("fill",function(d){return colorcode.value ? C(d.v0) : "white"}).style("stroke","black").style("stroke-width",1)

}

export {drawstreet,drawcar}