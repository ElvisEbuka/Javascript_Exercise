//EXERCISE 1
const address = {
    street: 'Abule-Egba',
    city: 'Lagos',
    zipCode: 1100001,
}
function showAddress(address){
    for (keys in address){
        console.log(keys + ': ' + address[keys])
    }
}
//showAddress(address)


//EXERCISE 2
// initializing using Factory Function
function addressObj(address){
    return address
}
const addressFactoryFunction = addressObj(address)
//console.log(addressFactoryFunction)


//initializing using Constructor Function
function AddressConstructObj(address){
    this.address = address
    return this.address
}
//const addressConstructionFunction = new AddressConstructObj(address);
//console.log(addressConstructionFunction)

const address1 = new AddressConstructObj(address)
const address2 = new AddressConstructObj(address)

function areEqual( object1, object2){
    return object1 === object2 ? true : false
}    
//console.log(areEqual(address1, address2))
//address1.country = 'US'
//console.log(areEqual(address1, address2))
function areSame( object1, object2, object3){
    if (object1 === object3 && object2 === object3){
        return true
    }
    return false
}
//console.log(areSame(address1, address2, address))
//exercise 4

const blogPost = {
    tittle: 'elvis blogPost',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corrupti.',
    author: ' bill musk',
    view: 50,
    comment0: {
        author: ' marvellous ebube',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corrupti.',
        isLive: true,
    },
    comment1: {
        author: ' ',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corrupti.',
        isLive: true,
    },
    comment2: {
        author: ' marvellous ebube',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corrupti.',
        isLive: true,
    },
    comment3: {
        author: ' marvellous ebube',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corrupti.',
        isLive: true,
    }
}


/*//EXERCISE 5
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
}*/
