/*
객체
객체:
const name = { key: value };
각 프로퍼티는 쉼표로 구분

접근
name.key - 점 표기법
name[key] - 대괄호 표기법

추가
name.key = value
name[key] = value

삭제
delete name.key

단축 프로퍼티: key와 value가 같을 경우 사용
const name = { key }

객체의 프로퍼티 존재 여부 확인: 어떤값이 넘어올지 확신할 수 없을 때 사용
key in name => true, false 반환

for ... in 반복문: 객체를 순회
for(let key in name) { 실행 코드 }

객체 method / this
method: 객체 프로퍼티로 할당 된 함수

this는 런타임에 결정된다. 

화살표 함수는 자신만의 this를 가지지 않아 전역 객체를 가져온다.
전역객체: 브라우저에서는 window, Node.js에서는 global
객체의 method를 작성할 때는 화살표 함수로 쓰지 않는 것이 좋다.

배열: 순서가 있는 리스트
const array = [value1, value2]
배열을 탐색할 때는 고유 번호를 사용한다. (index)
length: 배열의 길이를 구함

push(): 배열 끝에 요소 추가
pop(): 배열 끝 요소 제거
shift(), unshift(): 배열 앞에 제거, 추가. 여러 요소 한번에 가능

for, for...of 를 사용해 배열 순회할 수 있다. for...in을 사용할 수 있지만 단점이 많다.

*/

const superman = {
  name: "clark",
  age: 30,
};

superman.hairColor = "black";
delete superman.age;

console.log(superman.name);
console.log(superman["age"]);

function mkObj(name, age) {
  return {
    name: age,
    age,
    hobby: "football",
  };
}

const Mike = mkObj("Mike", 30);
console.log(Mike);

function isAdult(user) {
  if ("age" in user && user.age >= 20) {
    return true;
  }
  return false;
}

const Jane = {
  name: "Jane",
  age: 30,
};

console.log(isAdult(Jane));

for (let x in Jane) {
  console.log(Jane[x]);
}

let boy = {
  name: "Mike",
  showName: function () {
    console.log(boy.name);
  },
};

let man = boy;

// console.log(boy.name);

console.log(boy);
console.log(man);

let days = ["mon", "tue", "wed"];

days.push("thu");
days.unshift("sun");

days[1] = "화요일";

console.log(days[1]);
console.log(days.length);

for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}

for (const i of days) {
  console.log(i);
}
