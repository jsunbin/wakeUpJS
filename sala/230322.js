//#10. 함수(function의 기초)
function showError() {
  alert('에러가 발생했습니다. 새로고침 해주세요.');
  // 유지보수가 쉽다.
}

showError();


// 매개변수가 있는 함수
function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello('Mike');
sayHello('Tom');

let msg = 'Hello'; // 전역 변수 (global variable)
console.log('함수 호출 전');
console.log(msg);

function sayHello(name) {
  if(name) {
    msg += `, ${name}`;
  }
  console.log('함수 내부');
  // 지역 변수(local variable)
  console.log(msg);
}

console.log('함수 호출 후');
sayHello('Mike');
console.log(msg);

// 전역 변수와 지역 변수
let msg = "welcome";
console.log(msg);

function sayHello(name) {
  let msg = 'Hello';
  console.log(msg + '' + name);
}

sayHello('Mike');
console.log(msg);

// default value
function sayHello(name = 'friend') {
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello();
sayHello('Jane');

// return 으로 값 반환
function add(num1, num2) {
  return num1 + num2;
}

const result = add(2,3);
console.log(result);

// 함수(function)
// 1> 한번에 한작업에 집중
// 2> 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍

// #11. 함수 표현식, 화살표 함수(arrow function)
// 함수 선언문 : 어디서든 호출 가능 → 호이스팅(hoisting)
// function sayHello() {
//  console.log('Hello');
//}
// 함수 표현식 : 코드에 도달하면 생성
// letsayHello = function() {
//  console.log('Hello')}

//화살표 함수(arrow function)
let add = function(num1, num2) {
  return num1 + num2;
}
let add = (num1, num2) => {
  return num1 + num2;
}
let add = (num1, num2) => (return num1 + num2);
//return문 한줄이면 괄호도 생략할 수 있다.
let add=(num1, num2) => num1 + num2;

//인수가 하나면 괄호도 생략할 수 있다.
let sayHello = (name) => `Hello, ${name}`;
let sayHello = name => `Hello, ${name}`;
// 인수가 없는 함수 = 괄호를 생략할 수 없다. 
let showError = () => {
  alert('error!');
}

