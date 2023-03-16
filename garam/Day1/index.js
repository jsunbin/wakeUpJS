/* #1 변수

- 자바스크립트에서 변수를 선언할 때는, 변하지 않는 값은 const 변할 수 있는 값은 let을 사용한다.
- 변수는 문자, 숫자, $, *만 사용할 수 있다.
ex) const MY_HOME = "..." // let* = 1; // let$ = 1;
- 첫 글자는 숫자가 될 수 없다 ex) let 1strong = 1;
- 예약어는 사용할 수 없다 ex) let let = 0;
- 가급적 상수는 대문자로 (변하지 않는 값) ex) const MAX = 99;
- 변수명은 읽기 쉽고 이해할 수 있게 선언
ex) let a=1; 보다 let user_number = 1; 

*/

// #2 자료형

// 1. 문자형 (string)
const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

// ++ 지식

const message = `my name is ${name1}` ;
console.log(message) //  => my name is Mike

const message1 = "my name is ${name1}" ;
console.log(message1)   // => "my name is ${name}"

// 1. 숫자형 (number)
const age = 24;
const PI = 3.14;

console.log(100+2) // 더하기
console.log(100-2) // 빼기
console.log(100*2) // 곱하기
console.log(100/2) // 나누기 몫값
console.log(100%2) // 나누기 나머지 값

cosole.log("난" + age + "입니다") //문자형과 숫자형 더하기 가능
//=> "난 24입니다" 하지만 문자형으로 변환됨

/*
1. 참,거짓 ( boolean)
- true/ false
1. null, undefined
- null : 존재하지 않는 값
- undefined : 값이 할당되지 않았다
1. typeof 연산자
- 어떤 타입인지 알려줌
*/ 

const user = "Mike"
console.log(typeof user) // => "string"