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
let totalStudentsScore = 0;
let studentCount = 0;

for (let students in studentsScore) {
  totalStudentsScore += studentsScore[students];
  studentCount++;
}

let averageScore = totalStudentsScore / studentCount
console.log("Average score is " + averageScore);

let highestScore = -1;
let highestScoreName = "";

for (let students in studentsScore){
  if (studentsScore[students] > highestScore) {
    highestScore = studentsScore[students];
    highestScoreName = students;
  }
}
console.log(highestScoreName + " has the highest score, which is " + highestScore + " points.");

let lowestScore = Infinity;
let lowestScoreName = "";

for (let students in studentsScore){
  if (studentsScore[students] < lowestScore) {
    lowestScore = studentsScore[students];
    lowestScoreName = students;
  }
}
console.log(lowestScoreName + " has lowest score, which is " + lowestScore + " points.");