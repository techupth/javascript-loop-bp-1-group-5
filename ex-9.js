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
let averageScore = 0;
let sumScore = 0;
let sumStudent = 0;
for (let student in studentsScore) {
  sumScore = sumScore + studentsScore[student];
  sumStudent = sumStudent + 1 //Object.keys(studentScore).length
  averageScore = sumScore / sumStudent
}
console.log(`"Average score is ${averageScore}"`)

let maxScore = -Infinity;
let studentmaxScore = 0;
for (let student in studentsScore) {
  if (studentsScore[student] > maxScore) {
    maxScore = studentsScore[student]
    studentmaxScore = student
  }
}
console.log(`"${maxScore} has the highest score"`, `"which is ${studentmaxScore} points."`);

let minScore = Infinity;
let studentminScore = 0;
for (let student in studentsScore) {
  if (studentsScore[student] < minScore) {
    minScore = studentsScore[student]
    studentminScore = student
  }
}
console.log(`"${minScore} has lowest score"`, `"which is ${studentminScore} points."`);