function solution(s){
    if(s.length >= 1 && s.length <=100){
        const str = new String(s);
        const arr = str.split('');
        
        const array = [];
        
        if(arr.length%2 === 0){
            let num1 = arr[arr.length/2-1];
            let num2 = arr[arr.length/2];
            array.push(num1,num2);
        }else{
            let num3 =arr[arr.length/2 - 0.5];
            array.push(num3);
        }
        
        const answer = array.join("");
        return answer;
    }
    
    return answer;
}

console.log(solution('ab'));
