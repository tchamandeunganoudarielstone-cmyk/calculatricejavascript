// evenemnts;
let operation, preval;
document.querySelector('[data-value="clr"]').addEventListener('click', ()=>{
    clear();
});
document.querySelector('[data-value="del"]').addEventListener('click', () => {
    suprimer();
});
document.querySelector('[data-value="1"]').addEventListener('click', () => {displaynumber("1");});
document.querySelector('[data-value="2"]').addEventListener('click', () => {displaynumber("2");});
document.querySelector('[data-value="3"]').addEventListener('click', () => {displaynumber("3");});
document.querySelector('[data-value="4"]').addEventListener('click', () => {displaynumber("4");});
document.querySelector('[data-value="5"]').addEventListener('click', () => {displaynumber("5");});
document.querySelector('[data-value="6"]').addEventListener('click', () => {displaynumber("6");});
document.querySelector('[data-value="7"]').addEventListener('click', () => {displaynumber("7");});
document.querySelector('[data-value="8"]').addEventListener('click', () => {displaynumber("8");});
document.querySelector('[data-value="9"]').addEventListener('click', () => {displaynumber("9");});
document.querySelector('[data-value="0"]').addEventListener('click', () => { displaynumber("0"); });

document.querySelector('[data-value="*"]').addEventListener('click', () => {
    operator("*");
});
document.querySelector('[data-value="-"]').addEventListener('click', () => {
    operator("-");
});
document.querySelector('[data-value="/"]').addEventListener('click', () => {
    operator("/");
});
document.querySelector('[data-value="+"]').addEventListener('click', () => {
    operator("+");
});
document.querySelector('[data-value="%"]').addEventListener('click',()=>{
    pourcentage();
});
document.querySelector('[data-value="."]').addEventListener('click', () => {
    virgule(".");
});
document.querySelector('[data-value="="]').addEventListener('click', () => {
    result(preval, operation);
});

// fonction de reaction;
function displaynumber(value) {
    if (document.querySelector("#screen").textContent === '0') {
        document.querySelector("#screen").textContent = value;
    } else {
        document.querySelector("#screen").textContent = document.querySelector("#screen").textContent + value;
    }
    }


function clear() {
    document.querySelector("#screen").textContent = '0';
}

function operator(op) {
    if (document.querySelector("#screen").textContent != '0') {
        operation = op;
        preval = document.querySelector("#screen").textContent;
        document.querySelector("#screen").textContent = '0';
    }
}

function virgule(value) {
    // si l'ecran ne contient pas deja un . faire ce qui suit le probleme etant de savoir comment verifiere que l'ecran contient un caractere;
    if (!document.querySelector('#screen').textContent.includes(value)) {
        document.querySelector('#screen').textContent = document.querySelector("#screen").textContent + value;
    }
}

function result(preval, operation) {
    switch (operation) {
        case '+':
            document.querySelector("#screen").textContent = (parseFloat(preval) + parseFloat(document.querySelector("#screen").textContent));
            break;
        case '-':
            document.querySelector("#screen").textContent = (parseFloat(preval) - parseFloat(document.querySelector("#screen").textContent));
            break;
        case '*':
            document.querySelector("#screen").textContent = (parseFloat(preval) * parseFloat(document.querySelector("#screen").textContent));
            break;
        case '/':
            document.querySelector("#screen").textContent = (parseFloat(preval) / parseFloat(document.querySelector("#screen").textContent));
            break;
    }
}

function suprimer() {
    document.querySelector("#screen").textContent = document.querySelector("#screen").textContent.slice(0, -1);
    if (document.querySelector("#screen").textContent === '') {
        document.querySelector("#screen").textContent = '0';
    }
}

function pourcentage() {
    
}
