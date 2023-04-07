let myDom = document;
// Creo la clase Button:
class Button {
    constructor(parentID, id, text, onClick) {
        this.parentID = parentID;        
        this.id = id;
        this.text = text;
        this.onClick = onClick;
    }

    render(){
        let myApp = document.getElementById(this.parentID);
        const myButtonHTML = myApp.innerHTML + `<button id=${this.id} onClick=${this.onClick}>${this.text} </button>`;
        myApp.innerHTML = myButtonHTML; 
    }
}

// Creo la clase Input:
class Input {
    constructor(parentID, id, type, value) {
        this.parentID = parentID;   
        this.id = id;
        this.type = type;
        this.value = value;

    }

    render() {
        let myApp = document.getElementById(this.parentID);        
        const myInputHTML = myApp.innerHTML + `<input id=${this.id} type=${this.type} value=${this.value}>`;
        myApp.innerHTML = myInputHTML;

    }
}

// Creo la clase h1:
class H1 {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }

    render(){
        let myApp = document.getElementById(this.parentID);
        const myButtonHTML = myApp.innerHTML + "<h1>"+ this.text + "</h1>";
        myApp.innerHTML = myButtonHTML; 
    }
}

// inicializo Array de inputs y lo muestro en una etiqueta h1
let inputArray = ["Username", "Password", "E-mail"];

let myH1 = new H1("app", "Array inicial:<br>"+inputArray)
myH1.render();

// renderizo los inputs a partir del array de elementos existente:
let myH1_1 = new H1("app", "inputs sin filter:<br>")
myH1_1.render();

inputArray.forEach((element) => {
    let myInput = new Input("app", element, element, element);    
    myInput.render();
});

// renderizo los inputs a partir de aplicar filter sobre el array de elementos:
let myH1_2 = new H1("app", "inputs con filter by Username:<br>")
myH1_2.render();

let inputArrayFiltered = inputArray.filter( element => element=="Username");

inputArrayFiltered.forEach(function (element){
    let myInput = new Input("app", element, element, element);    
    myInput.render();
});