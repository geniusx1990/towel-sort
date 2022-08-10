
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (typeof matrix === 'undefined') {
    result = [];
  } else {

    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          result.push(matrix[i][j]);
        }
      }
      else {
        for (m = matrix[i].length - 1; m >= 0; m--) {
          result.push(matrix[i][m]);
        }
      }
    }
  }

  return result;
}
