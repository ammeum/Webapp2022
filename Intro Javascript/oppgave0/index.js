// Oppgave 1
const textish = document.getElementById("remove");
const remButn = document.getElementById("remove-btn");

const removedText = () => {
  textish.innerHTML = null;
};

remButn.addEventListener("click", removedText);

// Oppgave 2
const changeText = document.getElementById("change");
const changeButn = document.getElementById("change-btn");

const changedText = () => {
  changeText.innerHTML = "Tommy er kuuul";
};

changeButn.addEventListener("click", changedText);

// Oppgave 3
const inputBox = document.getElementById("input");
const inputText = document.getElementById("input-text");

inputBox.addEventListener("click", () => {
  inputText.innerHTML = "";
});

const newText = (event) => {
  const pressedconstter = event.key;
  inputText.innerHTML += pressedconstter;
};

inputBox.addEventListener("keyup", newText);

// Oppgave 4
const myList = ["Aloha", "Tommy", "Major"];

const ul = document.getElementById("ul");
const ulBtn = document.getElementById("write-list");

const makeLi = () => {
  const liElements = myList.map((listElement) => `<li>${listElement}</li>`);
  ul.innerHTML = liElements.join("");
};

ulBtn.addEventListener("click", makeLi);

// Oppgave 5

const text = document.getElementById("text");
const createBtn = document.getElementById("create");
const select = document.getElementById("select");
const htmlPlaceholder = document.getElementById("placeholder");

const createElement = () => {
  const htmlEl = select.value;
  const message = text.value;
  htmlPlaceholder.innerHTML += `<${htmlEl}>${message}</${htmlEl}>`;
};

createBtn.addEventListener("click", createElement);

// Oppgave 6
let list = document.getElementById("list");
const removeElementButton = document.getElementById("remove-li");

removeElementButton.addEventListener("click", () => {
  list.removeChild(list.firstElementChild);
});

// Oppgave 7
const inputName = document.getElementById("name");
const orderBtn = document.getElementById("order");

const handleKeyUp = () => {
  const name = inputName.value;
  if (name && name.length >= 4) {
    orderBtn.disabled = true;
    orderBtn.style = "border: 1px solid red";
  } else {
    orderBtn.disabled = false;
    orderBtn.style = "border: 1px solid black";
  }
};

inputName.addEventListener("keyup", handleKeyUp);

// Oppgave 8

const parent = document.querySelector(".children");
const parentChildren = parent.querySelectorAll("li");
const colorBtn = document.getElementById("color");

const addBorder = () => {
  Array.from(parentChildren).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = "border: 1px solid pink; margin-bottom: 10px; padding: 5px;";
    } else {
      li.style = "border: 1px solid green; margin-bottom: 10px; padding: 5px;";
    }
  });
};

colorBtn.addEventListener("click", addBorder);
