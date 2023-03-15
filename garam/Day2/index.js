// 대화상자 실습

//alert은 사용자에게 알려줌, prompt는 사용자에게 값을 입력받음, confirm은 사용자에게 확인받는 역할

const name = prompt("이름을 입력하세요");
alert("환영합니다, " + name + "님");

const user_name = prompt("이름을 입력하세요");
alert(`환영합니다, ${user_name}님 환영합니다`);

const day = prompt("예약일을 입력해주세요", "2023-3-");

console.log(day);

const isAdult = confirm("당신은 성인 입니까?");

console.log(isAdult);

const mathScore = prompt("수학 점수는?");
const engScore = prompt("영어 점수는?");
const result = (mathScore + engScore) / 2;

console.log(result);

// 형변환

console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
);

console.log(Number("1234")); // string을 number로 바꿈

console.log(Number(true), Number(false)); //boolean을 number로

console.log(Boolean(1), Boolean(123), Boolean("javascript")); // number, string을 boolean으로

console.log(    // boolean으로 형변환
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
);


