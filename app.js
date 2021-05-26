const palindrome = (string) =>{
    //create regex for any pattern other than a string or letter  
    const regex = /\W|_/g
    //implement your regex removing all none strings and characters
    const newString = string.replace(regex , "").toLowerCase()
    //reverse your new string 
    const reversedString = newString.split('').reverse().join('')
    //check if reversed string is same as new string
    if(newString === reversedString){
        return true
    }
    return false
    
}

console.log(palindrome('__%$#@bAggab__'))
console.log(palindrome('eye'))