class Solution {
    public int solution(int n) {
        int i;
        int sum = 0;
        
        for(i = 1; i <= n; i++){
            if(i%2==1){
                continue;
            }
            else {
                sum += i;
            }
        }
        return sum;
    }
}