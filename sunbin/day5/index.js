// /*
//   멋쟁이사차러첨 프론트엔드스쿨 5기
//   회고 15조 - 일어나
  
//   [2023/03/21] JavaScript 기초 공부 5th!
//     - 복습: 문제 내기

//   Author
//   --------
//   Jeong Sunbin <jsnb6n@gmail.com>
// */


// let answer = 0;

// for (let i = 1; i <= 3; i++) {
//   if (i % 2) {
//     console.log('aa', i)
//     continue;
//   }

//   for (let j = i; j <= 3; j++) {
//     answer += j;
//     console.log(i, j,answer)
//   }
// }

// const num1 = Number(prompt("첫번째 숫자"));
// const num2 = Number(prompt("두번째 숫자"));
// const cal = prompt("연산자");


// switch(cal){
//   case '+':
//   alert(num1 + num2);
//   break

//   case '-':
//   alert(num1 - num2);
//   break

//   case '*':
//   alert(num1 * num2);
//   break

//   case '/':
//   alert(num1 / num2);
//   break

//   case '%':
//   alert(num1 % num2);
// }

// console.log(answer)

// // let setMenu = prompt('무슨 메뉴 사고 싶니?');

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
