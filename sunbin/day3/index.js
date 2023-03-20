/*
  멋쟁이사차러첨 프론트엔드스쿨 5기
  회고 15조 - 일어나
  
  [2023/03/16] JavaScript 기초 공부 Day + 3!
    - 연산자, 비교 연산자, 논리 연산자

  Author
  --------
  Jeong Sunbin <jsnb6n@gmail.com>
*/

// 연산자(Operators) ===============
// **: 거듭제곱
console.log(2 ** 3);

// 연산자 줄여 쓰기
let num = 10;
// num = num + 5;
num += 5;

console.log(num);

// 증가 연산자, 감소 연산자
let num2 = 10;
// let result = num2++; -> 결과: 10
let result = ++num2;

console.log(result) // 11

// 비교 연산자, 조건문(if, else) ===============
console.log(10 > 5);
console.log(10 == 5); //동등 연산자
console.log(10 != 5);

// 동등 연산자: 예외 경우
const a = 1;
const b = "1";

console.log(a == b); // true: a와 b의 값만 비교
console.log(a === b); // false: === 사용하면, type까지 비교함 -> 일치 연산자

// 조건문
const age = 19;
if(age > 19) {
  console.log('환영합니다!');
} else if (age === 19) {
  console.log('수능 화이팅!');
} else {
  console.log('안녕히 가세요.');
}

console.log('-----------------------')

// 논리 연산자 ===============
// OR: 이름이 선빈이거나, 성인이면 통과
const name = "Pooh";
const age2 = 25;

if (name === "선빈" || age > 19) {
  console.log('통과')
} else {
  console.log("잘 가")
}

// NOT: 나이를 입력받아 성인이 아니면 돌아가라고

const age3 = prompt('나이가?...');
const isAge = age > 19;

if (!isAge) {
  console.log('돌아가...')
}

// 우선순위: AND > OR