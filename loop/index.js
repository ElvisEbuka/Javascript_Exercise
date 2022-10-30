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