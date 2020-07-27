function solution(arr){
    const answer = [];
    answer[0] = arr[0];
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] !== arr[i + 1]){
            answer.push(arr[i+1]);
        }
    }
    return answer;
}
console.log(solution([0,1,2,0,0]));