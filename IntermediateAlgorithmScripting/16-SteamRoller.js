function steamrollArray(arr) {
  const flatten = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' || arr[i].length == undefined || arr[i].length == 0) {
      if (arr[i].length == 0) continue;
      flatten.push(arr[i]);
      continue;
    } else {
      for (let z = 0; z < arr[i].length; z++) {
        if (typeof arr[i][z] == 'string' || arr[i][z].length == undefined) {
          flatten.push(arr[i][z]);
          continue;
        } else {
          for (let y = 0; y < arr[i][z].length; y++) {
            if (typeof arr[i][z][y] == 'string' || arr[i][z][y].length == undefined) {
              flatten.push(arr[i][z][y]);
              continue;
            } else {
              for (let t = 0; t < arr[i][z][y].length; t++) {
                if (typeof arr[i][z][y][t] == 'string' || arr[i][z][y][t].length == undefined) {
                  flatten.push(arr[i][z][y][t]);
                  continue;
                } else {
                  for (let a = 0; t < arr[i][z][y][t].length; a++) {
                    if (typeof arr[i][z][y][t][a] == 'string' || arr[i][z][y][t][a].length == undefined) {
                      flatten.push(arr[i][z][y][t][a]);
                      continue;
                    } else { console.log('more') }
                  }
                }
              }
            }

          }
        }
      }
    }
  }
  console.log(flatten);
  return arr;
}
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
steamrollArray([1, [2], [3, [[4]]]]);