function solution(hp) {
    let answer = 0;
    let fir = Math.floor(hp/5);
    let sec = Math.floor((hp-fir*5)/3);
    let thd = Math.floor(hp-fir*5-sec*3);
    return answer = fir + sec + thd;
}