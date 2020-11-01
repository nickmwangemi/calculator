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
operators.forEach(function (operator) {
	let initialOperator = ''
	operator.addEventListener('click', function () {
		if (operator.id == 'add') {
			initialOperator = '+'
		} else if (operator.id == 'minus') {
			initialOperator = '-'
		} else if (operator.id == 'multiply') {
			initialOperator = '*'
		} else if (operator.id == 'divide') {
			initialOperator = '/'
		}

		if (topDisplay.textContent === '' && operator.id === 'minus') {
			currentNumber = '-'
			topDisplay.textContent = '-'
		} else if (topDisplay.textContent !== '') {
			if (!isNaN(parseFloat(topDisplay.textContent.slice(-1)))) {
				topDisplay.textContent += initialOperator

				if (!firstNumber) {
					firstNumber = parseFloat(currentNumber)
					currentNumber = ''
					operator = initialOperator
				} else {
					secondNumber = parseFloat(currentNumber)
					ans = operate(firstNumber, secondNumber, operator)

					if (ans > 99999999 || ans < -99999999) {
						answer.textContent = ans.toExponential(5).toString()
					} else if (ans.toString().length > 10) {
						ans = parseFloat(ans).toFixed(10)
						answer.textContent = ans.toString()
					} else {
						answer.textContent = ans.toString()
					}
					firstNumber = ans
					operator = initialOperator
				}
				hasDecimal = false
				hasSign = false
				currentNumber = ''
			} else {
				if (operator.id === 'minus' && !hasSign) {
					currentNumber += '-'
					topDisplay.textContent += '-'
					hasSign = true
				} else {
					topDisplay.textContent =
						topDisplay.textContent.slice(0, -1) + initialOperator
					operator = initialOperator
				}
			}
		} else if (topDisplay.textContent === '' && answer.textContent !== '') {
			firstNumber = parseFloat(answer.textContent)
			topDisplay.textContent = answer.textContent + initialOperator
			operator = initialOperator
		}
	})
})
