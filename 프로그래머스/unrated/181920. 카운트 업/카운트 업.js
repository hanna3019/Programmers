function solution(start_num, end_num) {
    var answer = [start_num];
    for(let i=0; i<50; i++){
        answer[i+1] = answer[i]+1;
        if (i==end_num-start_num-1){
            return answer;
        }
    }
}