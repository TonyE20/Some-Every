// Some Every Exercise

// 1 hasOddNumber
hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false

function hasOddNumber(arr){
    return arr.some(function(number){
        return number % 2 !== 0;
    })
}

// 2 hasAZero
hasAZero(33321232131012) // true
hasAZero(1212121) // false

function hasAZero(number){
   let arr = String(number).split('').map(Number)
    return arr.some(function(n){
        return n === 0;
    })
}

// 3 hasOnlyOddNumbers
hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false
function hasOnlyOddNumbers(arr){
    return arr.every(function(n){
        return n % 2 !== 0;
    })
}

// 4 hasNoDuplicates
hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true
hasNoDuplicates([1,2,3,4,4,5]) // true
function hasNoDuplicates(arr){
    return arr.every(function(val){
        return(arr.indexOf(val) === arr.lastIndexOf(val))
    });
}

// 5 hasCertainKey
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

// 6 hasCertainKey(arr) // true
hasCertainKey(arr,'first') // true
hasCertainKey(arr,'isCatOwner') // false
function hasCertainKey(arr, key){
    return arr.every(function(obj){
            return obj[key]
    })
}

// 7 hasCertainValue
let arr1 = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]
  hasCertainValue(arr1,'title','Instructor') // true
  hasCertainValue(arr1,'first','Elie') // false
  function hasCertainValue(arr1, key, value){
    return arr1.every(function(obj){
        return obj[key] === value
    })
  }