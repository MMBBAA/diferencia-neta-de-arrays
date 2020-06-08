function diffArray(arr1, arr2) {
  var newArr = [];

  function primero(primer,segundo){
    for(var i=0;i<primer.length;i++){
      if(segundo.indexOf(primer[i])===-1){
        newArr.push(primer[i]);
      }
    }
  }
  primero(arr1,arr2);
  primero(arr2,arr1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);