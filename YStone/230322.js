function showError() {
  alert("에러가 발생했습니다. 다시 시도해주세요.");
}

showError();

function sayHello(name) {
  let msg = `Hello`;
  if (name) {
    msg += ", " + name;
  }
  console.log(msg);
}

sayHello("Mike");
console.log(msg);

function sayHello(newname = "friend") {
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello();
sayHello("Jane");

function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3);
console.log(result);

function showError() {
  alert("에러가 발생했습니다.");
  return;
  alert("이 코드는 실행되지 않습니다.");
}
const result = showError();
console.log(result);

let sayHello = function () {
  console.log("hello");
};

let add = function (num1, num2) {
  return num1 + num2;
};

let add = (num1, num2) => {
  return num1 + num2;
};

let add = (num1, num2) => num1 + num2;

let sayHello = (name) => `Hello, ${name}`;

const add = (num1, num2) => num1 + num2;
