// 1. <김가람>
// prompt를 이용하여 차례대로 정수 2개와 연산자 기호(+, -, *, /, %)를 입력 받아  연산자에 맞는 계산 결과를 출력하는 프로그램을 만들어보세요. 단, switch를 사용하고 alert창에 출력해주세요

const num1 = Number(prompt('첫 번째 숫자를 입력해주세요.'));
const num2 = Number(prompt('두 번째 숫자를 입력해주세요.'));
const operator = prompt('연산자를 입력해주세요.');

switch (operator) {
  case '+':
    alert(num1 + num2);
    break;
  case '-':
    alert(num1 - num2);
    break;
  case '*':
    alert(num1 * num2);
    break;
  case '/':
    alert(num1 / num2);
    break;
  case '%':
    alert(num1 % num2);
}

// 2. <이윤석>
// 1부터 100까지의 숫자 중 2와 3의 공배수를 찾는 프로그램을 만들어주세요. 이때 for문을 사용해주시고 최대한 간결하게 만들어주세요.
for (i = 1; i <= 100; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
// 3. <최사라>
// 문제: 구구단 만들기
// 구구단 2단부터 3단까지 반복문을 사용하여 만들어보시오.
// 출력값: 2 x 0 = 0
//        2 x 1 = 2
//        2 x 2 = 4
//         ....
//        3 x 9 = 27

for (let i = 2; i < 4; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//4. <노태희>
// 반복문을 활용해서 1부터 100까지 모두 합한 값을 구해주세요
let num = 0;
for (let i = 1; i <= 100; i++) {
  num = num + i;
}
console.log(num);

// 5. <이선근>
// 다음 코드에서 answer의 값을 구해주세요.
// let answer = 0;

// for(let i = 1; i <=3; i++) {
//   if(i %2) {
//     continue;
//   }

//   for(let j = i; j <=3; j++) {
//     answer += j;
//   }
// }
// 정답: j = 2 + 3 = 5

// 6. <정선빈>
// 오늘 저녁은 버거킹세트메뉴와 사이드까지 주문하려고 한다. 가진 돈은 10,000원 거스름돈은?

// > 통새우와퍼주니어 세트 8,700원
// 콰트로치즈와퍼주니어 세트 8,700원
// 치즈와퍼주니어 세트 8,400원
// 와퍼주니어 세트 8,100원
// 불고기와퍼주니어 세트 8,100원
// 몬스터와퍼 세트 12,200원
// >

let menu = '몬스터와퍼세트';
switch (menu) {
  case '통새우와퍼주니어 세트':
    let money = 10000 - 8700;
    if (money < 0) {
      console.log('해당돈으로는 구입할 수 없습니다.');
      break;
    } else if ((money = 0)) {
      console.log('딱맞추어 계산됩니다.');
      break;
    } else {
      console.log(`거스름돈은 ${money}원 입니다`);
      break;
    }
  case '콰트로치즈와퍼주니어 세트':
    money = 10000 - 8700;
    if (money < 0) {
      console.log('해당돈으로는 구입할 수 없습니다.');
      break;
    } else if ((money = 0)) {
      console.log('딱맞추어 계산됩니다.');
      break;
    } else {
      console.log(`거스름돈은 ${money}원 입니다`);
      break;
    }
  case '치즈와퍼주니어 세트':
    money = 10000 - 8400;
    if (money < 0) {
      console.log('해당돈으로는 구입할 수 없습니다.');
      break;
    } else if ((money = 0)) {
      console.log('딱맞추어 계산됩니다.');
      break;
    } else {
      console.log(`거스름돈은 ${money}원 입니다`);
      break;
    }
    break;
  case '와퍼주이너 세트':
    money = 10000 - 8100;
    if (money < 0) {
      console.log('해당돈으로는 구입할 수 없습니다.');
      break;
    } else if ((money = 0)) {
      console.log('딱맞추어 계산됩니다.');
      break;
    } else {
      console.log(`거스름돈은 ${money}원 입니다`);
      break;
    }

  case '불고기와퍼주니어 세트':
    money = 10000 - 8100;
    if (money < 0) {
      console.log('해당돈으로는 구입할 수 없습니다.');
      break;
    } else if ((money = 0)) {
      console.log('딱맞추어 계산됩니다.');
      break;
    } else {
      console.log(`거스름돈은 ${money}원 입니다`);
      break;
    }

  case '몬스터와퍼 세트':
    money = 10000 - 12200;
    if (money < 0) {
      console.log('해당돈으로는 구입할 수 없습니다.');
      break;
    } else if ((money = 0)) {
      console.log('딱맞추어 계산됩니다.');
      break;
    } else {
      console.log(`거스름돈은 ${money}원 입니다`);
      break;
    }

  default:
    console.log('해당메뉴는 없습니다');
}
