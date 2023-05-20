function solution(my_string) {
    let answer = '';
    for(let str of my_string){
        str===str.toLowerCase()?answer+=str.toUpperCase():answer+=str.toLowerCase();
    }
    return answer;
}