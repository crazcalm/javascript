/*
  problem:
  Given 3x3 grid and 4 colors, how many ways can you color the grid such that each 2x2 space within the grid
  has exactly one of the 4 colors?

  Answer: 72

  The below solution is the brute force method.
  The data representation used is an array of 9 elements. This decision was made because the increment_array
  function was easier to program using a 1D array than a 2D array.

  The mapping from [[_,_,_], [_,_,_], [_,_,_]] to [_,_,_,_,_,_,_,_,_] is a 1-1 mapping where
  row 1 maps to indexes 0-3,
  row 2 maps to indexes 4-6,
  row 3 maps to indexes 6-9,
  */

function increment_array(data) {
  let shift = false;
  let index = 8;
  do {
    if (index < 0) {
      break;
    }

    if (data[index] < 4) {
      data[index]++;
      shift = false;
    } else {
      data[index] = 1;
      shift = true;
      index--;
    }
  } while (shift === true);

  return data;
}

function validate_colors(data) {
  let expected = [1, 2, 3, 4];
  let square_1 = [data[0], data[1], data[3], data[4]];
  let square_2 = [data[1], data[2], data[4], data[5]];
  let square_3 = [data[3], data[4], data[6], data[7]];
  let square_4 = [data[4], data[5], data[7], data[8]];

  let squares = [square_1, square_2, square_3, square_4];
  //console.log(squares);
  let result = true;
  for (let square of squares) {
    square.sort();

    for (let index = 0; index < 4; index++) {
      //console.log(square);
      if (square[index] !== expected[index]) {
        result = false;
        break;
      }
    }
  }
  return result;
}

function main() {
  let data = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  let count = 0;

  let test_true = [1, 2, 1, 3, 4, 3, 2, 1, 2];
  let test_false = [1, 2, 1, 3, 4, 3, 2, 1, 1];
  console.log(validate_colors(test_false));

  console.log(data);
  for (let incr = 0; incr < 262143; incr++) {
    data = increment_array(data);
    if (validate_colors(data) === true) {
      count++;
      console.log(data);
      console.log(`count: ${count}`);
    }
    //console.log(data);
  }
}

main();
