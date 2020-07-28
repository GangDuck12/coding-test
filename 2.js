function solution(array,commands){
    
    let answer = [];

    for(let i = 0; i < commands.length; i++){
        arr = array.slice(commands[i][0]-1,commands[i][1]);
        
        arr.sort(function(a,b){
            return a - b;
        });
    
        answer.push(arr[commands[i][2]-1]);
    }

    return answer;
}

console.log(solution([1,5,2,6,3,7,4],[[2,5,3],[4,4,1],[1,7,3],[1,7,3]]));

// let arr = [1,5,2,6,3,7,4];
// let com = [1,7,3];

// arr = arr.slice(com[0]-1,com[1]);
// arr.sort(function(a,b){
//     return a - b;
// });

// let answer = arr[com[2]-1];

// console.log(answer);

