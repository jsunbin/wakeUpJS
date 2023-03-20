// **<김가람>**

// if, else, else if와 prompt 대화 상자를 사용해 사용자로부터 숫자 하나를 입력 받고,

// 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.

// `입력 받은 숫자가 100보다 큰 경우 1을 출력
// 입력 받은 숫자가 100보다 작은 경우 -1을 출력
// 입력 받은 숫자가 100인 경우 0을 출력`

let num = prompt('숫자를 입력하시오.');
if (num > 100) {
  alert(1);
} else if (num < 100) {
  alert(-1);
} else {
  alert(0);
}

// **<노태희>**

// 사용자에게 직접 입력 받은 숫자가 짝수인지 홀수 인지 알려주는 프로그램을 만들어주세요!
// 단, 숫자 외에 것을 입력했을때 ‘오류 입니다’ 를 반환해주세요

let num = prompt('숫자를 입력하시오');

if (num % 2 === 0) {
  console.log('짝수입니다!');
} else if (num % 2 === 1) {
  console.log('홀수입니다!');
} else {
  console.log('오류 입니다.');
}

// **<이윤석>**
// 사용자에게 두 개의 값(num1, num2)을 입력받아서 둘 중 더 작은 값을 ‘더 작은 값은 (num)입니다.’라는 알림창으로 출력하거나, 값이 같다면 ‘입력한 값이 똑같습니다.’ 를 출력하는 프로그램을 만들어 주세요. 이때 입력창에 디폴트값으로 0을 주십시오!

let num1 = Number(prompt('첫 번째 숫자를 입력하시오'));
let num2 = Number(prompt('두 번째 숫자를 입력하시오'));

if (num1 > num2) {
  alert(`더 작은 값은 ${num2} 입니다.`);
} else if (num1 < num2) {
  alert(`더 작은 값은 ${num2} 입니다.`);
} else {
  alert('입력한 값이 똑같습니다.');
}

/* <이선근>
let i = "1";

i += 0;

if(!("" || null)) {
    console.log(i++);
} else {
    console.log(i--);
}

console.log(i**2); */

10..?? 