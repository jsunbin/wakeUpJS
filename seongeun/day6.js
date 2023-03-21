// 2023.03.21 6일차 문제풀이 선근

//가람님
const num1 = +prompt();
const num2 = +prompt();
const operator = prompt();

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
}

//윤석님
for (let i = 1; i <= 100; i++) {
  if (!(i % 2 || i % 3)) {
    console.log(i);
  }
}

//사라님
for (let i = 2; i <= 3; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//태희님
let output = 0;
for (let i = 1; i <= 100; i++) {
  output += i;
}
console.log(output);

// 내 문제
// 코드 실행 후 answer의 값은?
let answer = 0;

for (let i = 1; i <= 3; i++) {
  if (i % 2) {
    continue;
  }

  for (let j = i; j <= 3; j++) {
    answer += j;
  }
}

// if문은 i가 홀수일때 continue;
// i === 1 => continue
// i === 2 => +2 +3
// i === 3 => continue

// 선빈님
// switch문은 case '몬스터와퍼 세트'
// leftMoney === -2200
// if문에서 0보다 작기 때문에 '돈이 부족해! 돌아가!' 출력
