// <가람님>
5
100
c는 undefined이므로 5 * 20 * undefined = NaN


// <태희님>
function add(num1, num2) {
  let result = 0;
  for (let i = num1; i <= num2; i++) {
    result += i;
  }
  return result;
}


// <윤석님>
const sayHello = (name = lion) => console.log(`Hello, ${name}`);


// <사라님>
c, 함수의 코드가 한 줄일 때는 return을 쓰지 않음.


// <내 문제>
// 매개변수 a, b를 입력받아 a의 b 제곱을 반환하는 화살표 함수를 작성해주세요.
// 초기값을 사용하여 매개변수를 1개만 입력하면 2를 제곱해주세요.

// 정답
const pow = (a, b = 2) => {
  return a ** b;
};


// <선빈님>
'조원'