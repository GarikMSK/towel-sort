
// You should implement your task here.
/*
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let towelsArray = []
let matrix2 = []
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
  
  if (i%2) {matrix2 = matrix2.concat(matrix[i].reverse())}
  else {matrix2 = matrix2.concat(matrix[i])}
  


  
}
console.log(matrix2);
*/
module.exports = function towelSort (matrix) {
  let matrix2 = []
  if(!matrix) return matrix2;
  else {
         for (let i = 0; i < matrix.length; i++) 
          {
            if (i%2) {matrix2 = matrix2.concat(matrix[i].reverse())}
            else {matrix2 = matrix2.concat(matrix[i])}
          }
          return matrix2;
        }
}

