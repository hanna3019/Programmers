function solution(num, k) {
    return (num+'').includes(k)?(num+'').split('').indexOf(k+'')+1:-1;
}