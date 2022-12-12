var GetEl = (e) => { return document.querySelector(e) };// GetEl("#master span")
var GetEls = (e) => { return document.querySelectorAll(e) };
var EvtsBind = (e, n, t) => { let c = GetEls(e); c.forEach(e => { e.addEventListener(n, t) }) }

EvtsBind("#input_area", "input", Conversion);

function Conversion() {
	let input_str = GetEl('#input_area').value.trim();
	GetEl('#output_area').value = GujUnicodeToSaral(input_str);
}



function GujUnicodeToSaral(str) {
    if(!str){return ""};
    let Out_Str = "";


    for (let i = 0; i < str.length; i++) {
  
        if (Saral_Arr[Unicode_Arr.indexOf(str.charAt(i))]) {
            Out_Str += Saral_Arr[Unicode_Arr.indexOf(str.charAt(i))];
        }
    }

    Out_Str = unescapeHTML(Out_Str);
    Out_Str = ToSaral0(Out_Str);
    Out_Str = ToSaral(Out_Str);
    Out_Str = ToSaral1(Out_Str);
    Out_Str = ToSaral2(Out_Str);
    Out_Str = ToSaral3(Out_Str);
    return Out_Str;
}

function unescapeHTML(escapedHTML) {
	return escapedHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function ToSaral0(str) { //speacial
	let outStr = "";
	let char = (e) => str.charAt(e);
	// document.getElementById("console").innerHTML = ""
	for (let i = 0; i < str.length; i++) {
		// document.getElementById("console").innerHTML += char(i), char(i + 1), char(i + 2), char(i + 3) + "\n"
		// console.log(char(i), char(i + 1), char(i + 2), char(i + 3))

		if (char(i) == "k" && char(i + 1) == "\\" && char(i + 2) == "8") {
			// ક્ષ
			outStr += "9";
			i++;
			i++;
		} else if (char(i) == "d" && char(i + 1) == "\\" && char(i + 2) == "V" && char(i + 3) == "a") {
			// દ્વ
			outStr += "¹";
			i++;
			i++;
			i++;
		} else if (char(i) == "8" && char(i + 1) == "\\") {
			// 
			outStr += "*";
			i++;
		}
		else if (char(i) == "V" && char(i + 1) == "a" && char(i + 2) == "i") {
			// 
			// alert("aas")
			outStr += "vi";
			i++;
			i++;
		}
		else if (char(i) == "r" && char(i + 1) == "\\" && char(i + 2) == "t" && char(i + 3) == "I") {
			// 
			outStr += "tIR";
			i++;
			i++;
			i++;
		}

		else {
			outStr += char(i);
		}
	}
	return outStr;
}

function ToSaral3(str) {
	let isLowerCase = (str) => {
		return str == str.toLowerCase() && str != str.toUpperCase();
	}
	let tempCHECK = ["A", "E", "I", "O", "U"];

	let outStr = "";
	let char = (e) => str.charAt(e);
	for (let i = 0; i < str.length; i++) {
		// console.log(char(i), "hyuittti")
		if (char(i) == "i" && char(i + 1) == "A") {
			outStr += "Ai";
			i++;
		} else if (char(i) == "J" && char(i + 1) == "‹") {
			outStr += ")";
			i++;
		}
		else if (char(i) == "d" && char(i + 1) == "/") {
			outStr += "¸";
			i++;
		}
		else if (char(i) == "V" && char(i + 1) == "A") {
			outStr += "V";
			i++;
		}
		else if (char(i) == "T" && char(i + 1) == "t") {
			outStr += "|";
			i++;
		}
		else if (char(i) == "\\" && char(i + 1) == "r") {
			outStr += "/";
			i++;
		}
		else if (char(i) == "D" && char(i + 1) == "y") {
			outStr += "·";
			i++;
		}
		else if (char(i) == "3" && char(i + 1) == "\\" && char(i + 2) == "3") {
			outStr += "¤";
			i = i + 2;
		}
		else if (char(i) == "k" && char(i + 1) == "i" && char(i + 2) == "/") {
			outStr += "ik/";
			i = i + 2;
		}
		else if (char(i) == "3" && char(i + 1) == "\\" && char(i + 2) == "r") {
			outStr += "§";
			i = i + 2;
		}
		else if (char(i) == "D" && char(i + 1) == "y" && char(i + 2) == "u") {
			outStr += "·u";
			i++;
			i++;
		}
		else if (!isLowerCase(char(i)) && str.charCodeAt(i) != 32 && char(i + 1) == "i" && tempCHECK.indexOf(char(i)) < 0) {
			// alert("ii")
			outStr += char(i + 1) + char(i);
			i++;
		}
		else {
			outStr += char(i);
		}
	}
	return outStr;
}

function ToSaral(str) { //k/ to K etc
	let outStr = "";
	let isLowerCase = (str) => {
		return str == str.toLowerCase() && str != str.toUpperCase();
	}
	let char = (e) => str.charAt(e);
	for (let i = 0; i < str.length; i++) {
		if (isLowerCase(char(i)) && char(i + 1) == "\\") {
			if (char(i + 1) == "\\" && char(i + 2) == "r") {
				// console.log(char(i))
				outStr += char(i) + "/";
				i++;
			}
			// else if (char(i + 1) == "\\" && char(i + 2) == "8") {
			//     outStr += "9";
			//     i++;
			// } 
			// else if (char(i + 1) == "\\" && char(i + 3) == "i") {
			//     outStr += char(i + 3) + char(i).toUpperCase() + char(i + 2);
			//     i++;
			//     i++;
			// } 
			else {
				// console.log(char(i))
				outStr += char(i).toUpperCase();
			}
			i++;
		} else {
			outStr += char(i);
		}
	}
	return outStr;
}

function ToSaral1(str) { //i ne agadi lavano
	let isLowerCase = (str) => {
		return str == str.toLowerCase() && str != str.toUpperCase();
	}
	let outStr = "";
	let tempCHECK = ["a", "e", "E", "I", "i", "o", "O", "u", "U", "ૉ", "ૅ", "]"];
	let char = (e) => str.charAt(e);
	for (let i = 0; i < str.length; i++) {
		// console.log(char(i - 1), str.charCodeAt(i - 1), "thisssssss")
		// if (char(i + 1) == "i" && tempCHECK.indexOf(char(i))<0 && str.charCodeAt(i-1)!=32) {
		if (str.charCodeAt(i) == 32 && char(i + 2) == "i" && tempCHECK.indexOf(char(i + 1)) < 0) {
			// console.log(char(i), char(i + 1), char(i + 2), 1)
			outStr += " " + char(i + 2) + char(i + 1);
			i++;
			i++;
		} else if (char(i + 1) == "i" && tempCHECK.indexOf(char(i)) < 0) {
			// console.log(char(i), char(i + 1), char(i + 2), 2)
			outStr += char(i + 1) + char(i);
			i++;
		} else {
			outStr += char(i);
		}
	}
	return outStr;
}

function ToSaral2(str) { //R ne Pachad Mukvano
	let outStr = "";

	let char = (e) => str.charAt(e);
	for (let i = 0; i < str.length; i++) {
		if (char(i) == "R") {
			if (char(i + 2) == "a") {
				outStr += char(i + 1) + char(i + 2) + char(i);
				i++
			} else if (char(i + 1) == "I") {
				outStr += char(i + 1) + char(i);
				i++
			} else {
				outStr += char(i + 1) + char(i);
			}
			i++;
		} else {
			outStr += char(i);
			// outStr += char('"');
		}
	}
	return outStr;
}
