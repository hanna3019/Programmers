function solution(my_string) {
    var answer = my_string.replace(/a|e|i|o|u/g,'');
    return answer;
}

/*
정규식 사용
/[aeiou]/g 로도 가능!
-----------------------
g	모든 패턴 체크(global)
i	대소문자 구별 없이 체크
m	여러줄 체크
^	처음
$	끝
.	한문자
*/
