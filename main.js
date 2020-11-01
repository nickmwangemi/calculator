let operator
let firstNumber
let secondNumber
let currentNumber = ''
let hasDecimal
let hasSign

// Target UI elements
// Display
let topDisplay = document.getElementById('top-display')
let answerDisplay = document.getElementById('answer-display')
// Function buttons
let equal = document.getElementById('equal-sign')
let clearButton = document.getElementById('clear')
let deleteButton = document.getElementById('delete')
let decimalButton = document.getElementById('decimal')

// Operators
let add = document.getElementById('add')
let minus = document.getElementById('minus')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')

// Display numbers
let numbers = document.querySelectorAll('#calculator .number')
numbers.forEach(function (number) {
	number.addEventListener('click', function () {
		topDisplay.textContent += number.innerHTML
		currentNumber += number.innerHTML
	})
})

// Clear
clearButton.addEventListener('click', function () {
	topDisplay.textContent = ''
	answerDisplay.textContent = ''
	currentNumber = ''
	firstNumber = undefined
	secondNumber = undefined
	operator = undefined
})

// Delete
deleteButton.addEventListener('click', function () {
	if (topDisplay.textContent !== '') {
		currentNumber = currentNumber.slice(0, -1)
		topDisplay.textContent = topDisplay.textContent.slice(0, -1)
	}
})

// Decimal
decimalButton.addEventListener('click', function () {
	if (topDisplay.textContent !== '' && !hasDecimal) {
		topDisplay.textContent += '.'
		currentNumber += '.'
		hasDecimal = true
	}
})

// Operator functionality
let operators = document.querySelectorAll('#calculator .operator')
