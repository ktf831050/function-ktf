var button = document.querySelector("#theme-mode");

button.onclick = darkMode;

prompt("PLEASE HIRE MEEEEEEEE, I am begging youuuuuuuuu");

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

//Word Counter:
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const wordCount = document.getElementById('word-count');
    const charCount = document.getElementById('character-count');

    textInput.addEventListener('input', () => {
        const text = textInput.value.trim();
        const words = text ? text.split(/\s+/) : [];
        wordCount.textContent = `Word Count: ${words.length}`;
        
        textInput.addEventListener('input', () => {
        const textLength = textInput.value.length;
        charCount.textContent = `Character Count: ${textLength}`;
    });
    });
});
