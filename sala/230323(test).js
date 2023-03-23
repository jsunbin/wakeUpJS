/* 1. <김가람>

다음 코드의 실행 결과를 예측해주세요.

function test(a, b, c) {
console.log(a);
console.log(a * b);
console.log(a * b * c);
}

test(5, 20); */
답: 50, 100, NaN

/* 2. <노태희>

num1 부터 num2 까지 모두 더하는 프로그램을 만들어주세요

- 함수 와 조건문을 활용해주세요
- 매개변수는 num1 < num2 인 정수로 받는다고 생각하고 짜주세요
- 이 전에 제출했던 1부터 100까지 사이의 모든 수 더하기를 응용한 버전입니다 
1과 100 숫자가 정해진 대신 함수를 통해서 숫자를 받는겁니다. */

function add(num1,num2){
  let output = 0;
  for(let i = num1; i <= num2; i++ ){
    output+=i;
  }
  return output;
}


/*3.  <이윤석>
아래 함수를 화살표 함수로 바꾼 뒤 매개변수를 전달하지 않고 호출했을 때 “Hello, lion"이 출력될 수 있도록 코드를 수정해주세요.

function sayHello(name) {

  let msg = `Hello, ${name}`;

  console.log(msg);

} */

let sayHello = (name = 'lion') => {
  let msg = `Hello, ${name}`;
  console.log(msg);
}

// 4. <최사라> 
// 다음 화살표 함수 중 표기가 틀린 것을 고르시오. 
// 화살표 함수(arrow function)

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

ⓖ 인수가 없는 함수는 괄호를 생략할 수 없다. 
let showError = () => {
  alert('error!');
}

/*5. <이선근>
매개변수 a, b를 입력받아 a의 b 제곱을 반환하는 화살표 함수를 작성해주세요. 초기값을 사용하여 매개변수를 1개만 입력하면 2를 제곱해주세요 */
let arrow = (a, b = 2) => {return a ** b};

// 6. <정선빈>
// 각자의 이름으로 아래 코드를 실행하였을 때, 변수 userRole에 어떤 값이 담기는 지 확인해보세요 ^^
// let userName = prompt('멋쟁이사자처럼 프론트엔드 스쿨 5기 회고15조 조원이면 이름을 입력하시고, \n아니면 확인 버튼을 눌러주세요');

// function wakeUp(newName = '태희') {

//   if (newName == '태희' || newName == '') {
//     newName = '태희'
//     console.log(`15조 조장은 ${newName} 입니다.`)
//     return '조장'
//   } else {
//     console.log(`${newName}는 15조 조원입니다.`)
//     return '조원'
//   }
// }

// const userRole = wakeUp(userName);
사라는 15조 조원입니다. (태희님일 경우는 15조 조장은 태희 입니다.)