const arrayOfObject = [{name: "Elie", isInstructor:true, age: 5},{name: "Tim", isInstructor:true, age: 17},{name: "Matt", isInstructor:true, age: 25}]
function extractKey(array, key) {
    const result = []
    for (obj of array) {
        result.push(obj[key])
    }  
     return result 
}
//const result = extractKey(arrayOfObject, 'name')
//console.log(result)

//Exercise 2
const arrayOfLetter = ["a","a","b","c","A"]

function filterLetters (array, letter){
    const filtered = array.filter(function(element){
        if (element.toUpperCase() === letter.toUpperCase()){
            return element
        }   
    })
    return filtered.length 
}
//  const result = filterLetters(arrayOfLetter, 'C')
//  console.log(result)

//Exercise 3
const arrayOfString = ['awesome','example','of','forEach']
// const string = 'awesome'
// console.log(string[0] + string[string.length -1])

function printFirstAndLast (array ){
    array.map(function (word){
        console.log(word[0] + word[word.length -1])
    })
}
//printFirstAndLast(arrayOfString)
//Exercise 4 
const number = [1,2,3]
const number2 = [2, 3, 4]
// for ( let element in number){
//     number2.push(element * number[element] )
// }
//console.log(number2)
function valTimesIndex(array){
   const result = array.map(function(element, index){
        return element * index
    })
    return result
}

const result = valTimesIndex(number2)
const result2 = valTimesIndex(number)
//console.log(result, result2)

//Exercise 5
const arrayOfObj = [{name:'Joshua'},{name:'Mark'},{name:'Arthur'}];
const nameObj = {name: 'joshua'}

nameObj['age'] = 40
//console.log(nameObj)

function addKeyAndValue (arrayOfObject, key, value){
    const result = arrayOfObject.map(function(object){
        return object['key'] = value
    })
    return result
}
const result3 = addKeyAndValue(arrayOfObject, 'age', 40)
console.log(result3)
