/*
  멋쟁이사차러첨 프론트엔드스쿨 5기
  회고 15조 - 일어나
  
  [2023/03/20] JavaScript 기초 공부 4th!
    - 반복문, switch

  Author
  --------
  Jeong Sunbin <jsnb6n@gmail.com>
*/

// 반복문 ===============
// for
for (let i = 0; i < 10; i ++) {
  console.log(i+1)
}

// while
let i = 0;

while(i<10) {
  console.log(i);
  i++;
}

// do.. while
let j = 0;
do {
  console.log(j)
  j++;
} while(i < 10)

// break
// while(true) {
//   let answer = confirm('계속할까?');
//   if(!answer){
//     break
//   }
// }

// continue
// 짝수만 출력
for(let i=0;i<10;i++) {
  if(i%2){
    continue
  }
  console.log(i)
}

// switch ===============
// 사과: 100원
// 바나나: 200원
// 키위: 300원
// 멜론: 500원
// 수박: 500원
// 사고 싶은 과일을 물어보고 가격 알려주기

let fruit = prompt('무슨 과일 사고 싶니?');

switch(fruit){
  case '사과' :
    console.log('100원');
    break
  case '바나나' :
    console.log('200원');
    break
  case '키위' :
    console.log('300원');
    break
  case '멜론' :
  case '수박' :
    console.log('500원');
    break
  default :
  console.log('그 과일은 없어')
}