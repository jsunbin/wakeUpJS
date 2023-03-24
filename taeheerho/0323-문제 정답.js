//<가람님 문제>
// 아래 코드의 에측 결과
function test(a, b, c) {
    console.log(a);  // 5반환
    console.log(a * b); // 5*20 , 100 반환
    console.log(a * b * c); // 5 * 20 * null , NaN 반환
    }
    
    test(5, 20);

// 답: 5, 100, NaN (null 이라고 생각했었음 ..ㅠ)


//<윤석님 문제>
// 아래 함수를 화살표 함수로 바꾼 뒤 매개변수를 전달하지 않고 호출했을 때 “Hello, lion"이 출력될 수 있도록 코드를 수정해주세요.

function sayHello(name) {
    let msg = `Hello, ${name}`;
    console.log(msg);
  }

//답:
let sayHello = name => {
    let msg = `Hello, ${name}`;
    console.log(msg);
  }
  
  sayHello('Lion')


//<사라님 문제>
//다음 화살표 함수 중 표기가 틀린 것을 고르시오. 

// 화살표 함수(arrow function)
// ⓐ let add = function(num1, num2) {
//   return num1 + num2;
// }

// ⓑ let add = (num1, num2) => {
//   return num1 + num2;
// }

// ⓒ let add = (num1, num2) => (return num1 + num2);

// ⓓ let add=(num1, num2) => num1 + num2;

// ⓔ let sayHello = (name) => `Hello, ${name}`;

// ⓕ let sayHello = name => `Hello, ${name}`;

// ⓖ let showError = () => (alert('error!'));

//답 ⓒ return의 생략과 함께 괄호를 쓸 수 있음


//<선근님 문제>
// 매개변수 a, b를 입력받아 a의 b 제곱을 반환하는 화살표 함수를 작성해주세요. 기본값을 사용하여 매개변수를 1개만 입력하면 2를 제곱해주세요.

let num = (a,b) => {
    return a**b;
  }


//<선빈님 문제>
// 각자의 이름으로 아래 코드를 실행하였을 때, 변수 userRole에 어떤 값이 담기는 지 확인해보세요 ^^

function wakeUp(newName = '태희') {

    if (newName == '태희' || newName == '') {
      newName = '태희'
      console.log(`15조 조장은 ${newName} 입니다.`)
      return '조장'
    } else {
      console.log(`${newName}는 15조 조원입니다.`)
      return '조원'
    }
  }
  
  const userRole = wakeUp(userName);

// "15조 조장은 태희 입니다."