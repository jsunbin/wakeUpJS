// prompt ===============
const name = prompt("이름을 입력하세요.");
// alert("환영합니다, " + name + "님");
alert(`안녕하세요, ${name}님`);

// confirm() ===============
const isAdult = confirm("당신은 성인 입니까?");

console.log(isAdult)

// 형변환 ==============================
// prompt에서 받은 값은 문자형이므로 숫자를 받을 때는 형변환이 필요!
const mathScore = prompt("수학 몇점?")
const engScore = prompt("영어 몇점?")
const result = (mathScore + engScore) / 2;

// console.log(result)

// String ===============
console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
)

// Number ===============
console.log(Number("1234"))
console.log(Number("1234aaaaadfd")) // -> NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN

// Boolean ===============
// true
console.log(
  Boolean(1),
  Boolean(123),
  Boolean("javascript")
)

// false
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN),
)