
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  return matrix && matrix.length ?
    matrix.reduce((arr, item, index) => index % 2 === 0 ?
    arr.concat(item) :
    arr.concat(item.reverse()), []) :
    [];
}
