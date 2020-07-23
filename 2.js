let arr = [ 1,2,3];
if(arr.length<= 100 && arr.length>=1){
    let num = 0;
    let i = 0;
    for( i < arr.length; i++;){
        let arrNum = parseInt(arr[i]);
        if(arrNum<=10000 && arrNum>=-10000){
            num += arrNum;
        }
    };
    let aver = num/arr.length;
}
console.log(aver);
// ///////////////////////////////////////////////////////
function solution(arr){
    let result = 0;
    for(let i =0; i < arr.length; i++){
        result += arr[i];
    }    
    return result /arr.length
}