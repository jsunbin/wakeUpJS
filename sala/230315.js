대화상자
1. alert()
- 메시지를 보여준다.
2. prompt()
- 메시지를 보여주고, 입력값을 넣을 수 있다. 
- 취소 누르면 null 값이 뜬다. 
- default 값도 입력할 수 있다. ex) const name = prompt("예약일을 입력해주세요.”, “2020-10”)

3. confirm()
- 확인받기 위한 용도로 사용한다. 
- 확인(true), 취소(false)
→ alert, prompt, confirm 은 스크립트를 일시정지, 스타일링 못한다는 단점이 있으나 빠른 적용이 가능하다는 장점이 있다.

형변환
- prompt에 숫자 입력하여도 문자형으로 변환된다.
- “6” / “2” = 3 → 자동 형변환
- 명시적 형변환을 할 수 있는 방법
- String() : 문자형으로 바꿔준다.
- Number() : 숫자형으로 바꿔준다. // Number(null) ⇒ 0, Number(undefined) ⇒ NaN
- Boolean() : 불린형으로 변환한다. // false - 0, 빈 문자열(’’), null, undefined, NaN