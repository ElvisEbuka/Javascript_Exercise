//EXERCISE 1
const obj = {
    street: 'AbuleEgba',
    city: 'Lagos',
    zipcode: 1100001,

    draw: function showAddress(){
        console.log('draw')
    }
}
console.log(obj)

//EXERCISE 2
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

const address = addressObj('AbuleEgba', 'Lagos', 1100001)
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
