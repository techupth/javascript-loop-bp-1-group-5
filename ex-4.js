// Exercise #4: Reverse Strings
let companyName = "TechUp Thailand";
let reversedCompanyName = "";



// Start coding here


// for (let letter of companyName){
//     console.log(letter)

// }



// Iterate through the characters of 'companyName' in reverse order
for (let i = companyName.length - 1; i >= 0; i--) {
    // Concatenate characters to 'reversedCompanyName'
    reversedCompanyName += companyName[i];
}

console.log(reversedCompanyName);


