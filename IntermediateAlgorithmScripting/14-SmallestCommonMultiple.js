function smallestCommons(arr) {
  const nums = [];
  if (arr[0] > arr[1]) {
    [arr[0], arr[1]] = [arr[1], arr[0]]
  }
  for (let i = arr[0]; i <= arr[1]; i++) {
    nums.push(i);
  }
  

  let unique = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  let toBeMultiplied = [];

  let dividerCounter = 0;
  for (let z = unique.length - 1; z >= 0; z--) {
    for (let i = nums.length; i >= 0; i--) {
      if (unique[z] > nums[i]) continue;
      if (nums[i] % unique[z] == 0) dividerCounter++
    }
    if (dividerCounter >= 2) {
      toBeMultiplied.push(unique[z]);
      for (let y = nums.length; y >= 0; y--) {
        if (nums[y] % toBeMultiplied[toBeMultiplied.length - 1] == 0) {
          nums[y] = nums[y] / toBeMultiplied[toBeMultiplied.length - 1];
        }
      }
    }
    dividerCounter = 0;
  }
  for (let z = unique.length - 1; z >= 0; z--) {
    for (let i = nums.length; i >= 0; i--) {
      if (unique[z] > nums[i]) continue;
      if (nums[i] % unique[z] == 0) dividerCounter++
    }
    if (dividerCounter >= 2) {
      toBeMultiplied.push(unique[z]);
      for (let y = nums.length; y >= 0; y--) {
        if (nums[y] % toBeMultiplied[toBeMultiplied.length - 1] == 0) {
          nums[y] = nums[y] / toBeMultiplied[toBeMultiplied.length - 1];
        }
      }
    }
    dividerCounter = 0;
  }
  let multiplier = [...nums, ...toBeMultiplied];
    console.log(nums);
    console.log(toBeMultiplied);
    console.log(multiplier);
    return multiplier.reduce((common, num) => common *=num, 1);
}

console.log(smallestCommons([2, 10]))