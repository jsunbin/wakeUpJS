// 4일 문제 풀이

// 가람님
const input = prompt();

if (input == 100) {
  console.log(0);
} else if (input < 100) {
  console.log(-1);
} else if (input > 100) {
  console.log(1);
}

// 태희님
const input2 = prompt();

if (input % 2 === 1) {
  console.log("홀수입니다.");
} else if (input % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("오류입니다.");
}

//윤석님
const input3 = prompt("", 0);
const input4 = prompt("", 0);

if (input3 === input4) {
  console.log("입력한 값이 똑같습니다.");
} else if (input3 > input4) {
  console.log(`더 작은 값은${input4}입니다`);
} else {
  console.log(`더 작은 값은${input3}입니다`);
}

//사라님
const animal = "lion";

if (animal === "dog") {
  console.log("🐶");
} else if (animal === "lion") {
  console.log("🦁");
} else {
  console.log("👩");
}

//선빈님
null
undefined
