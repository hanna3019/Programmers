function solution(s1, s2) {
    const same = s1.filter((x)=>s2.includes(x));
    return same.length;
}