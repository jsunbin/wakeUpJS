/****************정리***************
함수
function 함수명(매개변수) { 실행 코드 }
매개변수 여러 개 일시 쉼표로 구분

함수를 사용하는 이유: 재사용할 수 있다. 유지보수가 쉽다.

함수 내에서 선언된 지역변수는 함수 내에서만 사용 가능하다.
함수 밖에서도 사용하려면 밖에서 선언. 이런 변수를 전역 변수라고 한다.

전역변수와 지역변수는 서로 간섭하지 않는다.
매개변수로 받은 값은 복사된 후 함수의 지역변수가 된다.
전체 서비스에서 공통으로 사용하는 변수 말고는 지역변수로 선언해야 관리에 용이하다.

매개변수에 기본값 설정 가능

return: 함수에서 값을 반환하고 함수를 종료한다. return이 없거나 반환하는 값이 없으면 undefined를 반환한다.

하나의 함수는 한 작업에만 집중하는게 좋다. 여러 작업이 들어간다면 함수 쪼개기
읽기 쉽고 어떤 동작인지 알 수 있는 함수명 짓기


함서 선언문, 함수 표현식
let 함수명 = function(매개변수) { 실행 코드 }

함수 선언문과 표현식의 차이:
함수 선언문은 함수를 선언하기 전에 호출 가능하지만 표현식은 선언 뒤에서만 호출 가능.
자바스크립트는 실행 전 코드의 모든 함수 선언문을 찾아서 생성해 둔다. (호이스팅)

화살표 함수
let 함수명 = (매개변수) => { 실행 코드 }

************************************/

function showError() {
  console.log("에러 발생");
}
showError();

function sayHello(name) {
  const msg = "hello" + name;
  console.log(msg);
}
sayHello("선근");

let message = "welcome";
function sayHi(name) {
  let message = "Hi";
  console.log(message + " " + name);
}
sayHi("Mike");

function add(num1, num2) {
  return num1 + num2;
}
const result = add(2, 3);
console.log(result);

let add = (num1, num2) => {
  return num1 + num2;
}