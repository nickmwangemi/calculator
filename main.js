let operator
let firstNumber
let secondNumber
let currentNumber = ''
let hasDecimal
let hasSign

// Target UI elements
// Display
let working = document.getElementById('#top-display')
let answer = document.getElementById('#answer-display')
// Function buttons
let equal = document.getElementById('#equal-sign')
let cancel = document.getElementById('#clear')
let backspace = document.getElementById('#delete')
let decimal = document.getElementById('#decimal')
let sign = document.getElementById('#sign')

// Operators
let add = document.getElementById('#add')
let minus = document.getElementById('#minus')
let multiply = document.getElementById('#multiply')
let divide = document.getElementById('#divide')

// Display numbers
let numbers = document.querySelectorAll('#calculator .number')
numbers.forEach(function (number) {
	number.addEventListener('click', function () {
		working.textContent += number.innerHTML
		currentNumber += number.innerHTML
	})
})
