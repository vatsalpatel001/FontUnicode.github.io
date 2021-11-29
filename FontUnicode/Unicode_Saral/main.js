var GetEl = (e) => {return document.querySelector(e)};// GetEl("#master span")
var GetEls=  (e) => {return document.querySelectorAll(e)};
var EvtsBind = (e,n,t) =>{let c=GetEls(e);c.forEach(e=>{e.addEventListener(n,t)})}

EvtsBind("#input_area","input",Conversion);

function Conversion(){

	
	let lan1= [...Master_obj.map(function(item){ return item.lan1 })];
let lan2= [...Master_obj.map(function(item){ return item.lan2 })];

let input_str =GetEl('#input_area').value.trim();

// console.log(GetEl('#input_area').value.trim().replaceAll("\n"," "))


let Output_str="";

let char =(e)=>input_str.charAt(e);
let match=(s)=>lan2[lan1.indexOf(s)];

let sub_str=(j,n)=>{
		let temp_str = "";
		for(let i=0; i<n;i++){
			if(n==1){
				// console.log(char(j+i),match(char(j+i)));
			}
	temp_str+=char(j+i);
	if(char(j+i).length==0){
		return;
	}
		}
		return match(temp_str);
}




for(let i=0; i<input_str.length;i++){
 for(let j=6; j>0;j--){
	// console.log(i,j)
	if(sub_str(i,j)){
		// console.log(sub_str(i,j),j)
		Output_str+=sub_str(i,j);
		i+=j-1;
		break;
	}
}




}
// Output_str.value =Output_str.replace(/\r\n|\n/g,' ');
Output_str= SpacialFunction(Output_str);
Output_str= SpacialFunction1(Output_str);
Output_str= SpacialFunction2(Output_str);
GetEl('#output_area').value = Output_str;
}

function SpacialFunction(str) { //k/ to K etc
	let outStr = "";
	let isLowerCase = (str) => {
		return str == str.toLowerCase() && str != str.toUpperCase();
	}
	let char = (e) => str.charAt(e);
	for (let i = 0; i < str.length; i++) {
		if (isLowerCase(char(i)) && char(i + 1) == "\\") {
			if (char(i + 1) == "\\" && char(i + 2) == "r") {
				console.log(char(i))
				outStr += char(i) + "/";
				i++;
			} else {
				console.log(char(i))
				outStr += char(i).toUpperCase();
			}
			i++;
		} else {
			outStr += char(i);
		}
	}
	return outStr;
}
function SpacialFunction1(str) { //i ne agadi lavano
	let outStr = "";
	
	let char = (e) => str.charAt(e);
	for (let i = 0; i < str.length; i++) {
		if (char(i + 1) == "i") {
			outStr += char(i+1) +char(i);
			i++;
		} else {
			outStr += char(i);
		}
	}
	return outStr;
}
function SpacialFunction2(str) { //R ne Pachad Mukvano
	let outStr = "";
	
	let char = (e) => str.charAt(e);
	for (let i = 0; i < str.length; i++) {
		if (char(i) == "R" ) {
			if(char(i+2)=="a"){
			outStr += char(i+1)+char(i+2) +char(i);
				i++
			}else{
			outStr += char(i+1)+char(i);
			}
			i++;
		} else {
			outStr += char(i);
		}
	}
	return outStr;
}
// AwI8\3