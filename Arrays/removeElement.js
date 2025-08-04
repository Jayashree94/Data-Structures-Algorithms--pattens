const removeElement = (arr, k) => {
    let x = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== k){
            arr[x] = arr[i];
            x++;
        }

        return x;
    }




}

console.log(removeElement([2,3,4,5,6,7,3,3,3,2]), 3)