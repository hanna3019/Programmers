function solution(money) {
    let cup = Math.floor(money / 5500);
    let rest = money - 5500 * cup;
    var answer = [cup, rest];
    return answer;
}