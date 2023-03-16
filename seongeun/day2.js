// 2일
// 대화상자

alert()    //일방적으로 알리는 용도로 사용.
prompt()   //사용자에게 값을 입력 받을 때 사용. 두 번째 인수로 기본값을 넣을 수 있다.
confirm()  //확인 받을 때 사용. alert과 다르게 취소 버튼이 있다. 확인 = true, 취소 = false 반환

// 단점:
// 1창을 닫기 전까지 동작에 제한을 받음.
// 2스타일링에 제한을 받음.

// 형변환
String() //  문자형으로 변환.
Number() //  숫자형으로 변환. true = 1, false = 0으로 변환 되지만 다른 문자열은 NaN을 반환한다.
Boolean() // 불린형으로 변환. 
//           0 , "", undefined, null, NaN은 false를 나머지는 true를 반환한다.

// 자료형이 다를 때 의도치 않은 동작을 막기 위해 사용한다.
// 실제 수학 계산처럼 곱셈, 나눗셈이 덧셈, 뺄셈보다 먼저 계산된다.
// prompt입력 값은 문자형이다.

// 자동 형변환은 원인을 찾기 힘든 에러를 발생시킬 수 있으므로 명시적 형변환을 해주는 것이 좋다.

// Number()사용 시 주의사항:
Number(null)        //0
Number(undefined)   //NaN
Number(0)           //false
Number("0")         //true
Number("")          //false
Number(" ")         //true
