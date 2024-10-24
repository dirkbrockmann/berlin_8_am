// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:40,
		delta:0.01,
		dt:0.0035,
		path:{
			kr:6,
			ktheta:12,
			rmin:2.0,
			slope:1.0,
			vartheta:0.169,
			vartheta_0:0.169,
			varr:1.0,
			varr_0:1.0
		},	
		mean_speed: {
			range:[0.1,0.3],
			default:0.2,
			label:"Geschwindigkeit"
		},
		speed_variability: {
			range:[0,0.25*0.2],
			default:0.1*0.2,
			label:"Variabilität der Geschwindigkeiten"
		},
		inertia: {
			range:[0.1*1./40,1./40],
			default:0.5*1.0/40,
			label:"Trägheit"
		},
		acceleration:{
			range : [0.15,0.75],
			default : 0.5,
			label:"Beschleunigung"
		},
		highlight_passing: {
			default: false,
			label:"Überholen anzeigen"
		},
		color_speed: {
		default: false,
			label:"Geschwingigkeit bunt"
		},
		allow_lane_changes: {
			default: true,
			label:"Überholen erlaubt"
		}		
}

