function solution(my_string, letter) {
    let array = [...my_string];
    let answer = "";
    for(let i in array){
        if(array[i] != letter){
            answer += array[i];
        }
    }
    return answer;
}