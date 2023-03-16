// // 기본 연산자, 비교 연산자, 논리 연산자

// const num = 2 ** 3;
// console.log(num);

// let num = 10;
// // num = num + 5;
// num += 5;
// console.log(num);

// let num = 10;
// let result = ++num;
// console.log(result);

// console.log(10 > 5);
// console.log(5 === 5);
// console.log(10 != 5);

// const age = 30;

// if (age > 19) {
//   console.log("환영합니다.");
// } else {
//   console.log("안녕히 가세요.");
// }
// console.log("-----");

// const age = 30;

// if (age > 19) {
//   console.log("환영합니다.");
// } else if (age === 19) {
//   console.log("수능 잘 치세요.");
// } else {
//   console.log("안녕히 가세요.");
// }
// console.log("-----");

// const name = "Mike";
// const age = 30;

// if (name === "Tom" && age > 19) {
//   console.log("통과");
// } else {
//   console.log("돌아가.");
// }

// const age = prompt("나이?");
// const isAdult = age > 19;

// if (!isAdult) {
//   console.log("돌아가");
// }

const gender = "F";
const name = "Jane";
const isAdult = true;

if (gender === "M" && (name === "Mike" || isAdult)) {
  console.log("통과");
} else {
  console.log("돌아가");
}
