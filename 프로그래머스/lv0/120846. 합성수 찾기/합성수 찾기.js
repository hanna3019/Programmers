function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++){
        let cnt = 0;
        for(let j=1; j<=i; j++){
            (i%j === 0)?cnt++:null;
        }
        cnt>=3?answer++:null;
    }
    return answer;
}