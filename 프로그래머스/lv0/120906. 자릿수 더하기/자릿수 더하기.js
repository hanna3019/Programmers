function solution(n) {
    let answer = 0;
    const arr = Array.from(String(n));
    for(let i in arr){
        answer += parseInt(arr[i]);
    }
    return answer;
}

/*
parseInt 대신 Number 가능
n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0)
*/
