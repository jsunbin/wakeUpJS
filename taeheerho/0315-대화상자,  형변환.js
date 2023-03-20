// 대화상자

alter() // 알림 역할
alert("삭제되었습니다");

prompt // 입력 받음
const name = prompt("이름을 입력하세요", "당신의 이름");
console.log(`환영합니다, ${name}님 `);
// 입력하지 않고 그냥 취소 버튼 누르면 null 값이 들어감 두번째 인수는 미리 들어가져 있는 값

confirm // 확인받음
const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult);
// 확인을 누르면 true 가 취소를 누르면 flase 가 반환

//대화상자의 단점
// 1. 스크립트 일시 정지 (불편한 사용성)
// 2. 스타일링이 불가 (브라우저 마다 다르지만 빠르고 간편하다는 장점이 있음)



//형변환

String() // 문자형으로 변환
Number() // 숫자형으로 변환
Boolean() // 불린형으로 변환


const mathScore = prompt("수학 몇좀?");
const engScore = prompt("영어 몇점?");
const result = (mathScore + engScore);
console.log(result);

//각각 90,80 으로 입력했더니 문자형 9080으로 반환 (prompt로 입력 받는 값은 자동으로 문지형으로 변환) 단, 더하기 연산만 그러뿐 나누기 같은 연산자는 문자형을 자동으로 숫자형으로 변환

// 자동 형변환 : 자동으로 형이 변환되는것
// 명시적 형변환 : String(), Number(), Boolean()

console.log(
    Number(true), // 1로 반환
    Number(false), // 0으로 반환
  );


  //불린형은
 // 숫자 0, 빈문자열 "", null, undefined, NaN 은 모두 false
 Boolean(0) // false
 Boolean('0') // true
 Boolean('') // false
 Boolean(' ') // true