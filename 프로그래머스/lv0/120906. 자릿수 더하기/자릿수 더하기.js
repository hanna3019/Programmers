function solution(n) {
    let answer = 0;
    const arr = Array.from(String(n));
    for(let i in arr){
        answer += parseInt(arr[i]);
    }
    return answer;
}