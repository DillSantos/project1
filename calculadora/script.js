const numbersBtn = document.querySelectorAll("[data-number]");
const operatorsBtn = document.querySelectorAll("[data-operator]");
const equalsBtn = document.querySelector("[data-equals]");
const deletBtn = document.querySelector("[data-delet]");
const allClearBtn = document.querySelector("[data-all-clear]");
const posOperandTextElement = document.querySelector("[data-pos-operand]");
const preOperandTextElement = document.querySelector("[data-pre-operand]");

class Calculator {
    constructor(posOperandTextElement, preOperandTextElement) {
        this.posOperandTextElement = posOperandTextElement;
        this.preOperandTextElement = preOperandTextElement;
        this.clear();
    }
    //função de delete para o botao DEL
    delete() {
        this.preOperand = this.preOperand.toString().slice(0, -1);
    }

    //função para adicionar o calculo no visor da calculadora
    calculo() {
        let resultado;

        const _posOperand = parseFloat(this.posOperand);
        const _operand = parseFloat(this.preOperand);

        if (isNaN(_operand) || isNaN(_posOperand)) return;

        switch (this.operation) {
            case "+":
                resultado = _posOperand + _operand;
                break;
            case "÷":
                resultado = _posOperand / _operand;
                break;
            case "*":
                resultado = _posOperand * _operand;
                break;
            case "-":
                resultado = _posOperand - _operand;
                break;
            default:
                return;
        }
        this.preOperand = resultado;
        this.operation = undefined;
        this.posOperand = '';
    }

    // função para escolha dos operandos
    choiceOperation(operation) {
        if (this.preOperando == '') return;

        if (this.posOperand !== "") {
            this.calculo();
        }

        this.operation = operation;

        this.posOperand = this.preOperand;
        this.preOperand = '';
    }

    //adiciona um valor numerico na tela da calculadora
    appendNumber(number) {
        if (this.preOperand.includes('.') && number === '.') return;
        this.preOperand = `${this.preOperand}${number.toString()}`;
    }

    //limpa o display
    clear() {
        this.posOperand = ' ';
        this.preOperand = ' ';
        this.operation = undefined;
    }
    //atualiza o display
    updateDisplay() {
        this.posOperandTextElement.innerText = `${this.posOperand} ${this.operation || ""}`;
        this.preOperandTextElement.innerText = this.preOperand;
    }
}
//evento para os numeros da nossa calculadora
for (const numberBtn of numbersBtn) {

    numberBtn.addEventListener('click', () => {
        calculator.appendNumber(numberBtn.innerText);
        calculator.updateDisplay();
    })
}

//evento para escolha de operador
for (const operatorBtn of operatorsBtn) {

    operatorBtn.addEventListener('click', () => {
        calculator.choiceOperation(operatorBtn.innerText);
        calculator.updateDisplay();
    })

}


const calculator = new Calculator(posOperandTextElement, preOperandTextElement);

//fevento para limpar todos os numeros do resultado 
allClearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})
//evenmto para o btn DEL = (equal)
equalsBtn.addEventListener('click', () => {
    calculator.calculo();
    calculator.updateDisplay();
})
//evento para deletar o ultimo caracter do preOperand
deletBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})