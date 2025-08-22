var maxSlidingWindow = function(arr, k) {
    let ans = [];
    let q = [];
    let i=j=0;
    while(j<arr.length){
        while(q.length && arr[j] > q[q.length-1]) 
        {q.pop()}
        q.push(arr[j])

        if(j>=k-1){
            ans.push(q[0]);
            arr[i] == q[0] &&   q.shift();
            ++i;
        }
        ++j;
    }
    return ans;

    
};