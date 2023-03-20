// 8. 반복문
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// 일단 코드를 실행하고, 조건을 체크함*(적어도 한번은 실행한다는게 while과 다른점이다.)
i = 11;
do {
  console.log(i);
  i++;
} while (i < 10);

// break, continue
// break: 멈추고 빠져나옴
// continue: 멈추고 다음 반복으로 진행
while (true) {
  let answer = confirm('게속 할까요?');
  if (!answer) {
    break;
  }
}

// continue, 짝수만
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

// 9. switch
let fruit = prompt('무슨 과일을 사고 싶나요?');
switch (fruit) {
  case '사과':
    console.log('100원 입니다.');
    break;
  case '바나나':
    console.log('200원 입니다.');
    break;
  case '키위':
    console.log('300원 입니다');
    break;
  case '멜론':
  case '수박':
    console.log('500원 입니다.');
    break;
  default:
    console.log('그런 과일은 없습니다.');
}
