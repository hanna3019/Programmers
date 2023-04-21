function solution(my_string) {
    let reverse = [...my_string].reverse();
    let answer ='';
    for(let str of reverse){
       answer = answer.concat(str);
    }
    return answer;
}