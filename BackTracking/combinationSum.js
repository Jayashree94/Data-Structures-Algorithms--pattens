var combinationSum = function(candidates, target) {
    let result =[];

    const backtracking = (remSum, path, start) =>{
        if (remSum === 0){
            result.push([...path]);
        }
        if (remSum <=0) return;
        for(let i=start ; i<candidates.length;i++){
            path.push(candidates[i]);
            backtracking(remSum - candidates[i], path, i);
            path.pop();

        }
    }

    backtracking(target,[],0);
    return result;
};