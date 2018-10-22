function addToArray(){
  let array = [];
  for(counter = 1; counter <= 255; counter++){
    array.push(counter);
    console.log(array);
    return array;
  }
}

function getEvens(){
  sum = 0;
  for(var i = 2; i <= 1000; i+=2){
    sum += i;
  }
  console.log(sum);
  return sum;
}

function getOdds() {
  sum = 0;
  for (var i = 1; i <= 1000; i += 2) {
    sum += i;
  }
  console.log(sum);
  return sum;
}

function sumOfArray(arr){
  sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function findMax(arr){
  max = arr[0];
  for(var i=1; i<arr.length; i++ ){
    if(arr[i] > max){
      max = arr[i];
    } 
  }
  return max;
}

var array = [1,-2,3,4,5];

function findAverage(arr) {
  sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let average = sum /arr.length;
  return average;
}

function oddArray(){
  
  var array = [];
  for (var counter = 1; counter <= 50; counter+=2){
    array.push(counter);
  }
  console.log(array);
  return array;
}

function greaterThanY(arr, y){
  counter = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > y){
      counter ++;
    }
    console.log(counter);
    return counter;
  }
}

function squares(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] = (arr[i] * arr[i])
  }
  console.log(arr);
  return arr;
}

function negatives(arr){
  for(var i=0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 0
    }
  }
  console.log(arr);
  return arr;
}

function maxMinAvg(arr){
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
    if(arr[i] < min){
      min = arr[i]
    }
    if(arr[i] > max){
      max = arr[i];
    }
  
  }
  var average = sum / arr.length;
  console.log(average, max, min);
}

function swapValues(arr){
  let temp = 0;
  if(arr.length < 2){
    console.log("please provide an array with at least 3 values")
  }
  for(var i = 0; i < arr.length /2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length -1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
  return arr;
}

function numberToString(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo'
    }
  }
  console.log(arr);
  return arr;
}

