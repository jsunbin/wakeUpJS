// 함수 (function)
// 중복되는 코드를 줄이고 유지보수를 편하게 하기 위해 사용

// 브라우저 내장 함수로는 : console, alert, confirm 등이 있다

function sayHello(name) {
    console.log(`Hello,${name}`);
}

// function : 함수
// sayHello : 함수명
// name : 매개변수, 매개변수는 없어도 되고 2개 이상인 경우엔 구별을 위해서 (,)쉼표를 찍는다.
// 중괄호 내부 : 함수 실행 코드

// 함수 호출식 
// : 함수명 뒤에 괄호를 넣어서 호출 가능, 매개변수가 필요하다면 괄호 안에 넣기
sayHello('Mike')


// 함수 사용 예 (매개변수가 없는 함수) : 어떤 오류가 있을때마다 'showError()' 함수 표현식만 입력해주면됨
function showError(){
    alert('에러가 발생했습니다. 다시 시도해주세요.')
    }

showError();

// 함수 사용 예 (매개변수가 있는 함수 + 조건문)
// 사용자가 로그인을 하지 않아서 사용자의 이름을 모르는 경우

function sayHello(name){
    let msg = 'Hello';
    if(name){
        msg += `, ${name}`;
    } 
    console.log(msg);
    }

   sayHello('Mike'); // "Hello, Mike" 반환
   sayHello(); // "Hello, Mike" 반환

   // 위 코드에서 msg 자체를 호출하고 싶다면 let msg="Hello" 가 홈수 밖에서 있었어야함
    // 그래도 함수를 나중에 거치게 되면 함수를 거친 msg 값을 반환함
    // 함수 밖에서 접근 가능한 변수 : 전역변수
    // 함수 내에서 접근 가능한 변수 : 지역변수
    // 전역 변수와 지역 변수는 서로 간섭을 받지 않기 때문에 같은 변수명을 써도 에러가 나지 않음

function sayHello(name){
    let newName = name || 'friend'; 
    let msg = `Hello, ${newName}`;
    console.log(msg)
    }
    
    // name 에 값이 들어가면 true 가 되어 name 반환되고
    // name 에 값이 안들어가면 false 가 되어 뒤에 것을 반환
    
    sayHello('Mike'); // "Hello, Mike" 반환
    sayHello(); // "Hello, friend" 반환

    // 위에 코드를 더 간단하게 쓸 수 있음, 매개변수에 디폴트 값 지정 (디폴트값은 name 이 없을때만 실행)

    function sayHello(name = 'friend'){
        let msg = `Hello, ${name}`;
        console.log(msg)
      }
      
      sayHello('Mike'); // "Hello, Mike" 반환
      sayHello(); // "Hello, friend" 반환

    // return 으로 값 반환
    // return 은 그 즉시 return 오른쪽 코드를 실행한 후 함수를 종료시킨다.

function add (num1, num2) {
    return num1 + num2;
    }

  const result = add(2,3); // return 된 값은 변수 result 에 들어가 있음
  console.log(result) // 5반환 


 // 함수 선언문 vs 함수 표현식 
// 변수를 선언해서 함수를 할당, 함수 호출 방식은 동일
// 왜 다르게 사용하냐면 함수를 호출하는 타이밍이 다름 함수 선언문은 어디서든 호출 할 수 있음
// 아래처럼 함수 위에서도 호출 가능 함수 선언문은 자바스크립트가 실행 전 모든 함수를 모두 찾고 나서 실행됨 이를 호이스팅이라고 함 

 // 함수 선언문
sayHello();

function sayHello() {
    console.log('Hello');
}

// 함수 표현식

let sayHello = function(){
    console.log('Hello');
}

// 화살표 함수
// 함수를 보다 간결하게 바꾸는것

let add = function(num1, num2){
    return num1 + num2;
}

// 1. function 대신 => 화살표로 변경
let add = (num1, num2) => {
    return num1 + num2;
}

// 2. 위 예젠는 return 문이 이기 때문에 return 대신 () 괄호로 변경 가능
// let add = (num1, num2) => (
//     num1 + num2;
// ) 이거 코드팬에서도 에러 뜨는디..

// 3. return 문이 한 줄 이기 때문에 괄호도 생략가능
let add = (num1, num2) => num1 + num2;

// 4. 만약 인수가 하나라면 괄호도 생략이 가능하다.
let add = name => `Hello, ${name}`;

// 예외
// 인수가 없는 함수라면 괄호 생략 불갸
let add = () => {
    alert('error!');
}

// return 문이 있더라도 return 전에 여러 줄의 코드가 있다면 생략 불갸
let add = (num1, num2) => {
    const result = num1 + num2;
    return result;
}