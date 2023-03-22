function showError() {
  alert("에러가 발생했습니다. 다시 시도해주세요.");
}

showError();

// 함수 작성 매개변수x

function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello("Mike");
sayHello("jisu");
sayHello("joon");

// 함수 작성 매개 변수o

function sayHello(name) {
  let msg = `Hello, `;
  if (name) {
    msg = `Hello, ${name}`;
  }
  console.log(msg);
}

sayHello();

// const->let수정 바뀔 수 있는 값이므로

function sayHello(name) {
  let msg = `Hello`;
  if (name) {
    msg += ", " + name;
  }
  console.log(msg);
}

sayHello("Mike");

// msg는 함수 안에서만 사용가능, 함수 밖에서도 사용가능하려면 함수 밖에서 let=msg로 선언해줘야함

let msg = "welcome";
console.log(msg);
// welcome 출력
function sayHello(name) {
  let msg = "Hello";
  console.log(msg + " " + name);
}

console.log("Mike"); // Hello Mike 출력

console.log(msg); // welcome 출력

//전역변수와 지역변수는 서로 간섭을 받지 않는다.

let name = "Mike";

function sayHello(name) {
  console.log(name);
}

sayHello(); //undefined
sayHello("Jane"); // "jane"

function sayHello(name) {
  let newName = name || "friend";
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello(); //Hello, friend
sayHello("Jane"); // Hello, Jane

function sayHello(name = "friend") {
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello(); //Hello, friend
sayHello("Jane"); // Hello, Jane

// 디폴트 값 설정

function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3);
console.log(result);

// 5출력

// return으로 값 반환

function showError() {
  alert("에러가 발생했습니다.");
  return;

  alert("이 코드는 절대 실행되지 않습니다."); // 접근할 수 없는 코드
}

const result1 = showError();
console.log(result1);



let sayHello2 = function(){
  console.log('Hello');
}

// 함수 표현식


let add = function(num1, num2){
  return num1+num2;
}

let add = (num1,num2)=>num1+num2;

// 화살표 함수로 변경


let add = name => `Hello, ${name}`;

// 인수가 하나라면 괄호 생략 가능

let showError=()=>{
  alert('error!');
}

// 인수가 없다면 괄호 생략 불가능

let add = function(num1, num2){
  const result=num1+num2;
  return result;
}

let add = (num1, num2)=>{
  const result=num1+num2;
  return result;
}

// return문이 있다고 해도 return전에 여러줄의 코드가 있다고 해도 일반괄호로 바꿀 수 없다.



