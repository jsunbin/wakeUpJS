// 문제 ===============
// 각자 이름으로 아래 코드를 실행하였을 때, 변수 userRole에 어떤 값이 담기는 지 확인해보세요
//
let userName = prompt('멋쟁이사자처럼 프론트엔드 스쿨 5기 회고15조 조원이면 이름을 입력하시고, \n아니면 확인 버튼을 눌러주세요');

function wakeUp(newName = '태희') {

  if (newName == '태희' || newName == '') {
    newName = '태희'
    console.log(`15조 조장은 ${newName} 입니다.`)
    return '조장'
  } else {
    console.log(`${newName}는 15조 조원입니다.`)
    return '조원'
  }
}

const userRole = wakeUp(userName);
// console.log(userRole)


// 문제 풀이 ===============
// 김가람 =====
function test(a, b, c) {
  console.log(a);
  console.log(a * b);
  console.log(a * b * c);
}

test(5, 20);

// 정답: 5, 100, NaN

// 노태희 =====
let num1 = 1;
let num2 = 5;

function addAll(num1, num2) {

}

// 이윤석 =====
const sayHello = (name = 'lion') => `Hello, ${name}`;

// 최사라 =====
// 화살표 함수(arrow function) 중 표기가 옳지 않은 것을 고르세요.
// ⓐ let add = function(num1, num2) {
//   return num1 + num2;
// }

// ⓑ let add = (num1, num2) => {
//   return num1 + num2;
// }

// ⓒ let add = (num1, num2) => (return num1 + num2);

// ⓓ let add=(num1, num2) => num1 + num2;

// ⓔ let sayHello = (name) => `Hello, ${name}`;

// ⓕ let sayHello = name => `Hello, ${name}`;

// ⓖ let showError = () => (alert('error!'));


/* <이선근> =====

매개변수 a, b를 입력받아 a의 b 제곱을 반환하는 화살표 함수를 작성해주세요.
기본값을 사용하여 매개변수를 1개만 입력하면 2를 제곱해주세요. */

function sg (a, b = 2) {
  return a ** b;
}

const sg = (a, b = 2) => {
  return a ** b;
}