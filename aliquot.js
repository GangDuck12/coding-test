// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

function solution(n) {
    const arr = [];
    n = parseInt(n);
    if(n > 0 && n <= 3000){
        for(let i = 1; i < n+1; i++){
        if(n%i === 0){
            arr.push(i);
            }
        }
        let answer = arr.reduce((a,b) => a + b);
        return answer;
    }else if(n === 0){
        let answer = 0;
        return answer;
    }
}
console.log(solution(0));