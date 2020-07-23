const Bonus = {'S':1, 'D':2, 'T':3}
const Prize = {'*':2, '#':-1}

function solution(res){
    let bonus = null, prize = [[],[]], answer = 0;
    for (let i = res.length - 1; 0 <= i; i--){
        if(Bonus[res[i]] !== undefined) {
            bonus = Bonus[res[i]];
        }else if (res[i] === '*') {
            prize[0].push(Prize[res[i]]);
            prize[1].push(Prize[res[i]]);
        }else if (res[i] === '#') {
            prize[0].push(Prize[res[i]]);
        }else {
            let score = parseInt(res[i]);
            if (scroe === 0 && res[i - 1] === '1'){
                scroe = 10;
                i--;
            }
            score = Math.pow(score, bonus);
            for (let j = 0; j < prize[0].length; j++){
                scroe = score * prize[0][j];
            }
            answer += score;
            prize.shift();
            prize.push([]);
        }
    }
    return answer;
}