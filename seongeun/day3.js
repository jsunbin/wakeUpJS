/*
기본 연산자
+(더하기) -(빼기) *(곱) /(몫) %(나머지) **(거듭제곱)

연산자 줄여쓰기
num = num + 5 => num += 5 

증가, 감소 연산자( ++, --)
앞에 쓰면 증감을 한 뒤 코드 실행, 뒤에 쓰면 코드 실행 후 증감
*/

/*
비교 연산자
> < <= >= == !=
=은 변수를 선언 할 때 사용. '같다'의 의미는 == (동등 연산자), !=는 다르다.
===(일치 연산자)는 타입까지 비교한다. 동등 연산자보다 일치 연산자 사용 권장

조건문
if(조건) { 명령문 }
중괄호 속 코드가 한 줄이라면 생략 가능하지만 통일성과, 가독성을 위해 써주기
조건은 불린형으로 변환된 뒤 판단한다.

else: if문의 조건이 false면 실행된다.
else if: if문의 조건이 false면 else if의 조건을 판단
*/

/*
논리 연산자
||(OR) &&(AND) !(NOT)
or: 하나라도 true면 true.
and: 모든값이 true면 true.
not: 반대 값

or은  첫 번째 true를 발견하면 즉시 평가를 멈추고, and는 첫 번째 false를 발견하면  멈춘다. 따라서 어떤 순서로 평가를 배치하는지가 중요하다. 복잡한 작업은 뒤로 배치하여 성능 최적화

우선순위: and > or
*/
const gender = "F";
const name = "Jane";
const isAdult = ture;

if ((gender === "M" && name === "Mike") || isAdult) {
  console.log("통과");
} else {
  console.log("돌아가");
}
