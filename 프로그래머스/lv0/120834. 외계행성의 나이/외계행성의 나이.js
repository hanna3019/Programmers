function solution(age) {
    age = age.toString();
    let alphs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]; 
    let answer = '';
    for(let el of age){
        answer += alphs[el];
    }
    return answer;
}