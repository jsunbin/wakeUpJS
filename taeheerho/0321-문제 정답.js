// <가람님 문제>
// prompt를 이용하여 차례대로 정수 2개와 연산자 기호(+, -, *, /, %)를 입력 받아  연산자에 맞는 계산 결과를 출력하는 프로그램을 만들어보세요. 단, switch를 사용하고 alert창에 출력해주세요!

let num1 = Number(prompt('정수를 입력해주세요'));
let num2 = Number(prompt('정수를 입력해주세요'));
let a = prompt('연산자 기호를 입력해주세요');


switch(a) {
  case '+' :
  console.log(num1 + num2);
  break  
    
  case '-' :
  console.log(num1 - num2);
  break  
    
  case '*' :
  console.log(num1 * num2);
  break 
    
  case '/' :
  console.log(num1 / num2);
  break
    
  case '%' :
  console.log(num1 / num2);
  break 
    
}


//<윤석님 문제>
// 1부터 100까지의 숫자 중 2와 3의 공배수를 찾는 프로그램을 만들어주세요. 이때 for문을 사용해주시고 최대한 간결하게 만들어주세요.

for (let i = 1; i < 101; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i);
  }
}


//<사라님 문제>
//구구단 2단부터 3단까지 반복문을 사용하여 만들어보시오.

for(i = 2; i < 4; i++){
    for(k = 1; k < 10; k++){
      console.log(`${i} X ${k} = ${k * i}`)
    }
  }


//<선근님 문제>
// 다음 코드에서 answer의 값을 구해주세요

let answer = 0;

for (let i = 1; i <= 3; i++) {
  if (i % 2) {
    continue;
  }

  for (let j = i; j <= 3; j++) {
    answer += j;
  }
}

console.log(answer); // 5 반환



//<선빈님 문제>
//오늘 저녁은 버거킹!🍔 가진 돈💰은 10,000원 몬스터와퍼 세트를 골랐을 때 console에 찍히는 결과는?
// console에 찍히는 결과는 '돈이 부족해! 돌아가!'

// let setMenu = prompt('무슨 메뉴 사고 싶니?');
let setMenu = '몬스터와퍼 세트';

switch (setMenu) {
  case '통새우와퍼주니어 세트' :
    var leftMoney = 10000 - 8700;
    if (leftMoney < 0){
      console.log('돈이 부족해! 돌아가!')
      break
    } else if (leftMoney == 0) {
      console.log('거스름돈은 없어요^^')
      break
    } else {
      console.log(`거스름돈은 ${leftMoney}원`)
      break
    }

  case '콰트로치즈와퍼주니어 세트' :
    var leftMoney = 10000 - 8700;
    if (leftMoney < 0){
      console.log('돈이 부족해! 돌아가!')
      break
    } else if (leftMoney == 0) {
      console.log('거스름돈은 없어요^^')
      break
    } else {
      console.log(`거스름돈은 ${leftMoney}원`)
      break
    }

  case '치즈와퍼주니어 세트' :
    var leftMoney = 10000 - 8400;
    if (leftMoney < 0){
      console.log('돈이 부족해! 돌아가!')
      break
    } else if (leftMoney == 0) {
      console.log('거스름돈은 없어요^^')
      break
    } else {
      console.log(`거스름돈은 ${leftMoney}원`)
      break
    }

  case '와퍼주니어 세트' :
    var leftMoney = 10000 - 8100;
    if (leftMoney < 0){
      console.log('돈이 부족해! 돌아가!')
      break
    } else if (leftMoney == 0) {
      console.log('거스름돈은 없어요^^')
      break
    } else {
      console.log(`거스름돈은 ${leftMoney}원`)
      break
    }

  case '불고기와퍼주니어 세트' :
    var leftMoney = 10000 - 8100;
    if (leftMoney < 0){
      console.log('돈이 부족해! 돌아가!')
      break
    } else if (leftMoney == 0) {
      console.log('거스름돈은 없어요^^')
      break
    } else {
      console.log(`거스름돈은 ${leftMoney}원`)
      break
    }
    
    case '몬스터와퍼 세트' :
      var leftMoney = 10000 - 12200;
      if (leftMoney < 0){
        console.log('돈이 부족해! 돌아가!')
        break
      } else if (leftMoney == 0) {
        console.log('거스름돈은 없어요^^')
        break
      } else {
        console.log(`거스름돈은 ${leftMoney}원`)
        break
      }

  default :
  console.log('보기 중에 고르렴^^')
}
