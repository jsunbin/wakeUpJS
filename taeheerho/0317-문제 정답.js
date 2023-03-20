//alert이랑 prompt는 오류가 나서 주석처리 했습니다.


// <가람님 문제>
// const num = prompt('숫자를 입력해주세요');

if(num > 100){
//   alert(1);
// } else if(num < 100){
 alert(-1);
} else if(num == 100){
//   alert(0);
}

// <내 문제>
// const num = prompt('숫자를 입력해주세요')

if(num % 2 == 0){
  console.log('짝수 입니다.');
} else if(num % 2 == 1){
  console.log('홀수 입니다.');
} else {
  console.log('오류입니다');
}

// <윤석님 문제>
// const num1 = prompt('숫자를 입력해주세요', 0)
// const num2 = prompt('숫자를 입력해주세요', 0)

if (num1 > num2){
  console.log(`더 작은 수는 ${num2} 입니다.`);
} else if (num2 > num1) {
  console.log(`더 작은 수는 ${num1} 입니다.`);
} else {
  console.log('입력한 값이 똑같습니다.');
}

// <선근님 문제>
let i = "1";

i += 0;

if(!("" || null)) {
    console.log(i++);
} else {
    console.log(i--);
}

console.log(i**2);

// 문자형 값을 가진 "1" = "1" + 0  결과는 "10"
// (!("" || null))빈문자열 ""은 false, null 도 false 이므로 그것을 부정하는 true 출력
// console.log(10++)은 10 이 먼저 반환이 되버림 만약 증가시키려고 했으면 ++10 이였어야함 그러므로 답은 10
//위에서 10에서 1이 증가시킨 11이 들어와서 답이 121임

// <사라님 문제>
const animal = 'lion';

if (animal === 'dog'){
  console.log('🐶');
} else if (animal ==='lion'){
  console.log('🦁')
} else {
  console.log('👩')
}

// <선빈님 문제>
a = null;
console.log(a);  // 값이 없다는 null 반환

let a;
console.log(a); // 명시되지 않았다는 undefined 반환