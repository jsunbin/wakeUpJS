// 객체 (함수)
function makeObject(name, age) {
  return {
    name:name, // 축약 name, age
    age:age,
    hobby: "football"
  };
}

const Mike = makeObject("Mike, 30");
console.log(Mike);

// 존재 확인 
console.log("age" in Mike); //true
console.log("birthday" in Mike); //false


// 객체 in

function isAdult(user) {
  if(('age'in user) || user.age < 20) { // user에 age가 없거나  20살 미만이면 false
    return false;
  } // else 필요 x
  return true;
}

const Mike2 = {
  name:"Mike2",
  age:30
}

const Jane = {
  name:"Jane" 
}

console.log(isAdult(Mike2)) //true
console.log(isAdult(Jane)) // age가 없으므로 false


// 객체 for ...in 
const Mike3 = {
  name: "Mike",
  age:30
};

for(x in Mike3){
  console.log(Mike3[x])
}


//method 

let boy = {
  name:"Mike",
  showname: function(){
    console.log(this.name)
  }
};

let man =boy;
boy=null;

man.showname(); // Mike

// 객체 메소드 화살표 함수 xx

// 배열

let days =["mon", "tue","wed"];

days.push("thu"); // 배열 젤 뒤에 추가
days.unshift("sun") // 배열 젤 앞에 추가

//for of

for(let x of days) {
  console.log(x);
}