function solution(numer1, denom1, numer2, denom2) {
    
    let num = numer1 * denom2 + denom1 * numer2;
    let den = denom1 * denom2;
    let common;
    
    for(let c = 1; c <= den; c++){
        if(num % c === 0 && den % c === 0){
            common = c;
        }
    };
    
    var answer = [num/common, den/common];
    
    return answer;
}