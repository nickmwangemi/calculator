let currentNumber
// Target UI
let topDisplay = document.getElementById('top-display')
let answerDisplay = document.getElementById('answer-display')

// Operators and numbers
let clearButton = document.getElementById('clear')
let deleteButton = document.getElementById('delete')
let decimalButton = document.getElementById('decimal')
let percentageButton = document.getElementById('percentage')
let addButton = document.getElementById('add')
let subtractButton = document.getElementById('subtract')
let multiplyButton = document.getElementById('multiply')
let divideButton = document.getElementById('divide')
let equalButton = document.getElementById('equal')

// Display numbers

// Clear
function clearOutput() {
	const clearOutput = (document.getElementById('top-display').textContent = '0')
}

clearButton.addEventListener('click', () => clearOutput())

// Delete
function deleteOutput(equation) {
	if (equation.textContent !== '') {
		currentNumber = currentNumber.slice(0, -1)
		equation.textContent = equation.textContent.slice(0, -1)
	}
}

deleteButton.addEventListener('click', () => deleteOutput())
