let arr = [-11, 0, 9, 5, 10, -7, 2, 5, 4, 5, 7]

let temp = 0;
let j=0;
let evenArr = [];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  if(arr[i]%2 === 0){
      evenArr.push(arr[i])
  }
}

console.log("------------- Sort")
arr.forEach((ele)=>{
    console.log(ele);
})

console.log("------------- Even")
evenArr.forEach((ele)=>{
    console.log(ele)
})