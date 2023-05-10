function solution(hp) {
    let fir = Math.floor(hp/5);
    let sec = Math.floor((hp-fir*5)/3);
    let thd = Math.floor(hp-fir*5-sec*3);
    return fir + sec + thd;
}