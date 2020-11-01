let operator
let firstNumber
let secondNumber
let currentNumber = ''
let hasDecimal
let hasSign

// Target UI elements
// Display
let working = document.querySelector('#top-display')
let answer = document.querySelector('#answer-display')
// Function buttons
let equal = document.querySelector('#equal-sign')
let cancel = document.querySelector('#clear')
let backspace = document.querySelector('#delete')
let decimal = document.querySelector('#decimal')
let sign = document.querySelector('#sign')

// Operators
let add = document.querySelector('#add')
let minus = document.querySelector('#minus')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')

// Display numbers
let numbers = document.querySelectorAll('#calculator .number')
numbers.forEach(function (number) {
	number.addEventListener('click', function () {
		working.textContent += number.innerHTML
		currentNumber += number.innerHTML
	})
})
