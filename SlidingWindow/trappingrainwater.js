var trap = function(arr) {
    let n = arr.length;
    let maxL = [];
    let maxR = [];
    let ans = 0;
    maxL[0] = arr[0];

    for (let i=1; i<n-1; i++){
        maxL[i] = Math.max(maxL[i-1] ,arr[i] )
    }

    maxR[n-1] = arr[n-1];
    for (let i=n-2; i>=0; i--){
        maxR[i] = Math.max(arr[i], maxR[i+1])
    }

    for(let i =0; i<n-1; i++){
        let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i]
        ans = ans + (waterTrapped < 0 ?  0 : waterTrapped)
        console.log(ans)
    }
    return ans;
    
    
};