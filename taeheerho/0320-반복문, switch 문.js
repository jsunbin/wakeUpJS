// 반복문 loop: 동일한 작업을 여러번 반복할 떄 사용


//for 반복문: 세미클론 으로 구분하며 세부분으로 나눠짐

// 첫번쨰 인수: 초기값을 설정, 반복문에 진입할 떄 처음 한번만 실행
// 두번째 인수: 조건, 반복문이 조건이 만족할때 계속 반복되고 조건이 false가 되면 멈춤
// 세번째 인수: 반복문이 한번 돌면 실행되는 작업
for (i = 1; i <= 10; i++){
    console.log(i); // 1 부터 10 까지 반복
  }

for (i = 0; i < 10; i++){
    console.log(i + 1); // 1 부터 10 까지 반복
  }
console

//while 반복문: 괄호에 조건을 입력

// let i = 0;
while(i < 10){
    console.log(i); //0이 무한으로 출력됨
}
//white은 무한반복되는 특징이 있음 위와 같이 적으면 i는 10 보다 영원히 작으므로 무한 반복됨
// 이 문제를 해결하려면 i가 반복될떄마다 증진되면 됨

// let i = 0;
while(i < 10){
    console.log(i);
    i++; //반복될떄 마다 i가 1씩 늘어나고 결국에 조건이 false가 되면 반복문응ㄹ 빠져나옴
}

// do.. while 문: while문 과의 차이는 일단 '코드를 한번 실행한다는 점'

// let i = 0;
do {
    //코드
    i++;
} while(i < 10)

// 반복문을 빠져나오는 기능
//break: 만나는 순간 즉시 코드 실행을 멈추고 반복문을 빠져나옴
//continue: 만나는 순간 즉시 코드 실행을 멈추지만 반복문을 빠져나오진 않고 다음 반복을 진행

while(true){ //while(true) 무한 반복 되므로 사용에 주의해야함
    let answer = confirm('계속 할까요?'); 
    if(!answer){ //취소 버튼을 누르면 false가 들어가고 결과적으로 true가 되면서
      break; // break를 만나고 반복이 멈춤
    }
  }

for(let i = 0; i < 10; i++){
    if(i%2){ // 0이 들어가면 false 가 되면서 밑에 있는 console에 반환되고 1이 찍히면 true가 되면서 넘어감
        continue;
    }
    console.log(i);
}


// switch 문

if(num == 10) {
    //코드
} else if (num == 20) {
    //코드
}

switch(num){
    case 10:
        //코드
    case 20:
        //코드
}