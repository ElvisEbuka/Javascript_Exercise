let grade = 10

if(grade >= 90){
    console.log('AA')
} else if ( grade >= 80 && grade < 90){
    console.log('AB')
}else if (grade >= 70 && grade < 80){
    console.log('BB')
}else if (grade >= 60 && grade < 70){
    console.log('BC')
}else if (grade >= 50 && grade < 60){
    console.log('CC')
}else if (grade >= 40 && grade < 50){
    console.log('CD')
}else if (grade >= 30 && grade < 40){
    console.log(DD)
}else {
    console.log('FF')
}


//EXERCISE ON PRIME NUMBER
function showPrime(limit){
    for (let i = 0; i <= limit; i++){
        if( i % 2 !== 0){
            console.log(i)
        }
    }
}
showPrime(20)

/*EXERCISE 2
// initializing using Factory Function
function addressObj(street, city, zipcode){
    return{
        street,
        city,
        zipcode,
        draw: function showAddress(){
            console.log('draw');
        }
    }
}

//const address = addressObj('AbuleEgba', 'Lagos', 1100001)
console.log(address)


//initializing using Constructor Function
function AddressObj(street, city, zipcode){
    this.street,
    this.city,
    this.zipcode,

    this.draw = function (){
        console.log('draw')
    }
    return this;
}
const Address = new AddressObj('AbuleEgba', 'Lagos', 1100001);
console.log(address)


//EXERCISE 5
let programming = {
    languages: ['JavaScript', 'Python', 'Ruby'],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:"http://stackoverflow.com/question/234075/what-is-your-best-programmer-joke",
}

programming.languages.push ('go');
programming.difficulty = 7,
delete programming.jokes
programming.isFun = true
console.log(programming)

for (let key in programming.languages){
    console.log(programming.languages[key])
}

for (let key in programming){
    console.log(key)
}
for ( let key of Object.values(programming)){
    console.log(key)
}
 */