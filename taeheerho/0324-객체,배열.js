//객체
//객체는 키(key) 와 값(value)으로 구성된 프로퍼티(property)를 가지고 있으며 각 프로퍼티는 ,(쉼표)로 구분된다(마지막은 생략 가능함)

const superman = {
    name:'Mike',
    age: 30,
}

// 객체 추가
// 추가
superman.gender = 'male';
superman['hairColor'] = 'black'; 

// 접근
console.log(superman.hairColor);
console.log(superman['gender']);
console.log(superman['pet']); // 만약 존재하지 않는 프로퍼티에 접근시 undefined 반환

// 프로퍼티 존재 여부 확인법
'pet' in superman; // flase
'gender' in superman; //true

// 제거
delete superman.gender;
console.log(superman.gender); // gender 의 값이 삭제됨

// 단축 프로퍼티

const aname = 'mike';
const age = 33;

const a = {
  aname,    // name: name 과 같은말
  age,  // age: age 와 같은말
  gender: 'male',
}

console.log(a.aname);

// // for..in 반복문 ( 키만 불러옴 )
const man  = {
    name: 'Mike',
    age: 33,
  }
  
  for(let key in man){ // key 는 다른 명을 입력해도 전혀 상관없음
    console.log(key); // "name", "age" 출력
    console.log(man[key]); // "mike" 33 출력
  }
  
  //key 를 출력하면 문자열 형태로 출력되기 때문에 man[key] 는 man["name"] 과 man["age"] 와 같아서
  //각각 "Mike" 와 33을 출력하는거임


  //이름과 나이를 받아서 객체로 반환하는 함수
  function makeObject(name, age){
    return {
      name,
      age,
      hobby: 'football'
    }
  }
  
  const Mike = makeObject('Mike', 30);
  console.log(Mike);

  //프로퍼티 존재 여부 확인
  
  console.log('age' in Mike); // true
  console.log('birthday' in Mike); // false

// 객체 in
// 나이를 확인하고 성인인지 아닌지 구분하는 함수

function isAdult(user) {
  if(!('age' in user) || // user 에 age가 없거나
 user.age < 20){ // 20살 아래이면
    return false;
  } 
    return true;
}

const Taehee = {
  name: 'Taehee',
  age: 30,
};

const Jane = {
  name: 'Jane',
};

console.log(isAdult(Taehee)); // true 
console.log(isAdult(Jane)); // false

// for..in
const Calk = {
  name: 'Calk',
  age: 30,
}

for(data in Calk){
  console.log(data); // 'name' , 'age'
  console.log(Calk[data]); // 'Calk' , 30
}


// 메소드
// 객체 프로퍼티로 할당된 함수
const Tom = {
  name: 'Tom',
  age: 33,
  fly: function(){ // 단축구문: fly(){console.log('날아갑니다')}
    console.log('날아갑니다')
  }
}

Tom.fly();//'날아갑니다.'


//this
//함수에서 쓰이는 this는  함수를 호출할때 .(점) 앞에있는 함수명을 불러옴
const user = {
  name: 'user',
  age: 30,
  sayHello: function(){
    console.log(`Hello,i'm ${this.name}`)
  },
}

user.sayHello(); // "Hello,i'm user"

// 배열
// 배열은 여러 개의 변수를 한 번에 선언해 다룰 수 있는 자료형으로  쉽게 말하면 순서가 있는 리스트
//배열의 요소들은 앞에서부터 순서대로 고유 번호가 부여되는데 이를 인덱스 라고 부른다. 인덱스는 0 부터 시작하게 되고 배열을 탐색할때 사용하게 된다.  
// 배열의 요소는 문자 뿐만 아니라 문자, 숫자, 불린, 객체, 함수 등도 포함 할 수있음

const student = ['철수', '영희', '민철'] // 이 말은 1번의 철수, 2번의 영희, 3번의 민철이라는 것과 같음
console.log(student[2]);

student[2] = '민수'; // 한 배열을 다른 인덱스로 교체할 수 있음
console.log(student[2]);

//length 는 배열의 길이를 반환
console.log(student.length); // 3을 반환


// 1. push() 배열 끝에 요소를 추가
const days = ['월', '화', '수', '목']
days.push('금')
console.log(days); // ['월','화','수','목','금'] 반환

// 2. 강제로 수를 늘려 배열 추가
days[6] = '일';
console.log(days) // ['월','화','수','목','금',,'일'] 반환 비어있는 인덱스에는 빈공간으로 차지 

// 3. length 속성을 이용하여 추가 할 수 있음
const days2 = ['월', '화', '수', '목'];
days2[days2.length] = '금';
console.log(days2); // ['월','화','수','목','금'] 반환


// 4. splice()
const days3 = ['월', '화', '수', '목','금'];

days3.splice(2,2); // 배열.splish(인덱스, 제거할 요소의 개수)
console.log(days3); // ['월','화','금'] 반환


//splice() 이용해 추가 

const days4 = ['월', '화', '수', '목','금'];

days4.splice(1, 0,'일'); // 배열.splice(인덱스, 0 ,추가할 요소)
console.log(days4); // ["월","일","화","수","목","금"] 반환


// 5. pop() 배열 끝의 요소를 제거
days.pop();
console.log(days); //['월','화','수','목'] 반환


// 6. unshift(추가) 와 shift(제거) 는 배열 제일 앞에서 동작
days.unshift('토', '일');
console.log(days); //['토','일', '월','화','수','목'] 반환

days.shift();
console.log(days); //['일','월','화','수','목'] 반환


// 7. indexOf()를 이용해 요소의 index값을 반환합니다.
const days5 = ['월', '화', '수', '목','금'];
console.log(days5.indexOf('수')); // 2출력 




//배열을 쓰는 가장 큰 이유는 반복을 위해서 입니다.

// for of 와 for in 의 가장 큰 차이점은 '반복변수' 위치에서 of 출력시 요소가 반환 되고 in은 값이 아닌 키의 역할을 하는 인덱스가 반환

let days = ['mon', 'two', 'wed'];

 for(let index = 0;index < days.length;index++){
  console.log(days[index]);  
 } //'mon', 'two', 'wed' 각각 반환 (length 는 1 부터 셈)
 

//for of /for(const 반복변수 of 배열 또는 객체){ 문장 }

for(let x of days) {
  console.log(x);
} //'mon', 'two', 'wed' 각각 반환



//for in /for (const 반복변수 in 배열 또는 객체){ 문장 }
const d = ['세수하기' ,'커피마시기','운동하기', '학습하기'];
for (const i in d) {
  console.log(`${i} 번째 할일: ${d[i]} `);
}
// "0 번째 할일: 세수하기 "
// "1 번째 할일: 커피마시기 "
// "2 번째 할일: 운동하기 "
// "3 번째 할일: 학습하기 "
// 각각 출력