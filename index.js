var rolewidth = 200;

var hiddendiv = document.getElementById('hidden');
var userinput = document.getElementById('input-box');
var output = document.getElementById('output-box');
var counter = document.getElementById('counter-value');
counter.value = rolewidth;

const zwsp = '\u200b';
const unicode = [
	[12, '\u2001'],
	[6, '\u2000'],
	[3, '\u2005'],
	[0.9, '\u200a'],
];

userinput.addEventListener('keydown', function (event) {
	if (event.keyCode === 13) {
		document.getElementById('generatebutton').click();
	}
});

function whitespace(length) {
	var output = '';
	unicode.forEach(([charlength, char]) => {
		while (length >= charlength) {
			output += char;
			length -= charlength;
		}
	});
	return output;
}

function updateCounter(value) {
	if (value > 0) {
		rolewidth = value;
		counter.value = value;
	}
}

function generateText() {
	hiddendiv.innerText = userinput.value;
	var textwidth = hiddendiv.clientWidth;
	if (textwidth > rolewidth - 14) {
		output.value = 'The text is too long!';
		return;
	}

	var left = rolewidth / 2 - textwidth / 2 - 9;
	var right = rolewidth / 2 - textwidth / 2 + 8;
	output.value =
		zwsp +
		whitespace(left) +
		userinput.value +
		whitespace(right) +
		'\u200a'.repeat(Math.ceil(right % 1)) +
		zwsp;
	output.focus();
	output.select();
}
