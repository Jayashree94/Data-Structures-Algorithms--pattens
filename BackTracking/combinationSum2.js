var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a,b) => (a-b));
    
    const backtracking = (remSum, path, start) => {
        if(remSum == 0) {
            result.push([...path]);
        }
         if(remSum <= 0) return;
        for(let i=start;i< candidates.length; i++){
            if(i>start && candidates[i-1] === candidates[i])
                continue;
            path.push(candidates[i])
            backtracking(remSum - candidates[i], path, i+1 )
            path.pop();
            }     

        }

        
    backtracking(target,[], 0);

    return result;


    
};