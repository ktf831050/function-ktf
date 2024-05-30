/*Contributor
Co Developer: Khang Truong and Hung Cao and some of them inspired by
Chat GPT
*/
//DARK MODE:
var button = document.querySelector("#theme-mode");
button.onclick = darkMode;

function darkMode(){
	var dark = document.body;
	dark.classList.toggle("dark-mode");
	// button.innerText = "Light Mode";
	if(dark.classList.contains('dark-mode')){
		button.innerText = "Light Mode";
	}else {
		button.innerText = "Dark Mode";
	}
}

