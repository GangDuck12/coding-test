function solution(a,b){
    let answer = ['sun','mon','tue','wed','thu','fri','sat'];
    const date = new Date(`2016-${a}-${b}`).getDay();
    return answer[date];
}
console.log(solution(5,24));