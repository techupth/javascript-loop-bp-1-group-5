// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here

let sumOfStudentScores = 0; //keep track of the total score
let totalStudent = 0; // keep track of the number of students.

let highScore = -Infinity ;
let lowScore = Infinity  ;
let studentWithHighestScore = "";
let studentWithlowestScore = "";

for ( let total in studentsScore ){
    sumOfStudentScores += studentsScore[total]
    totalStudent++
}
    
for ( let total in studentsScore ){
    if (studentsScore[total] > highScore ){
        highScore = studentsScore[total]
        studentWithHighestScore = total;
        
    }

    if (studentsScore[total] < lowScore) {
        lowScore = studentsScore[total];
        studentWithlowestScore = total;
  }
}
    

let averageScore = sumOfStudentScores / totalStudent
console.log(`Average score is ${averageScore}`)
console.log( `${highScore} ${studentWithHighestScore}` )
console.log(`${lowScore} ${studentWithlowestScore}`)
