class Solution {
    public int solution(int hp) {
        int fir = (int)(hp/5);
		int sec = (int)((hp-fir*5)/3);
        int thr = (int)(hp-(fir*5+sec*3));
        return fir+sec+thr;
    }
}