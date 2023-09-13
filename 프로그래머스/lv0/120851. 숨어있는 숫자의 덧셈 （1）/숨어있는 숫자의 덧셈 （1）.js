function solution(my_string) {
    const filter = my_string.match(/\d/g);
    return filter.reduce((acc, cur)=>acc+Number(cur),0);
}