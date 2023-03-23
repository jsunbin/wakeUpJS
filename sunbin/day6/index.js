// 함수(functions) ===============

function showError() {
  console.log('에러가 발생했습니다. 다시 시도하세요')
}

function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg)
}

sayHello('선빈');


function sayHello(name) {
  let msg = `Hello`;
  if (name) {
    msg = `Hello, ${name}`;
  }
  console.log(msg);
}

sayHello('선빈');


// 전역 변수와 지역변수
// 가급적이면 함수에 특화된 지역 변수를 사용하는 것을 권장
let name = "kiki";

function sayHello(name) {
  console.log(name)
}

sayHello();  // undefined
sayHello('지지')  // "지지"

// OR
function sayHello(name) {
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`;
  console.log(msg)
}

sayHello();  // 매개변수를 입력하지 않으면 name은 undefined로 "Hello, friend"
sayHello('지지')  // "Hello, 지지"

// default value -> OR 대신 간단하게 활용 가능
function sayHello(name = 'friend') {
  let msg = `Hello, ${name}`;
  console.log(msg)
}

sayHello();  // 매개변수를 입력하지 않으면 name은 undefined로 "Hello, friend"
sayHello('지지')  // "Hello, 지지"

// return
function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3);
console.log(result)

function showError() {
  console.log('에러가 발생했습니다')
  return;
  console.log('이 코드는 절대 실행되지 않음!')
}

const result2 = showError();
console.log(result2);

// 화살표 함수(arrow function) ===============
// 함수 선언문
showError();

function showError(){
  console.log('error')
}

// 화살표 함수
let showError2 = () => {
  console.log("error")
};

const sayHello2 = (name) => {
  const msg = `Hello, ${name}`;
  console.log(msg)
}

const add2 = (num1, num2) => num1 + num2;
