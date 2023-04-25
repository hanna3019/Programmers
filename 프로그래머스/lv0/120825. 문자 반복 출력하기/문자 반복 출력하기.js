function solution(my_string, n) {
    var answer = [...my_string].map(str => str.repeat(n)).join("");
    return answer;
}