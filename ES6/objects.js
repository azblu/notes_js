var student = {
    name: 'A',
    age: 15,
    course: '5-B',
    lessons: ['Math', 'Spain', 'Language'],
    featuresPersonal:{
        featureA: 'A',
        featureB: 'B'
    },
    detailStudent: function(){
        console.log(`The student is ${this.name}, and is ${this.age} years old`)
    }
}

console.log(student.featuresPersonal)
student.detailStudent()

let user = {
    name: 'Steve',
    lastname: 'Altarius',
    age: 25,
    country: 'Colombia'
  }
  
  let {age,name,lastname} = user
  
  console.log(`Hello ${name} ${lastname}
  , is you ${age} years old?`)


//-----------------------------------------
let name = 'Max'
let lastName = 'Li'
let ref1 = {name: name, lastname: lastName}
let ref2 = {name, lastName}
console.log(ref1)
console.log(ref2)


