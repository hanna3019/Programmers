function solution(numbers) {
    
    let first = Math.max(...numbers),
        firstIndex = numbers.indexOf(first);
    numbers[firstIndex] = 0;
    
    let second = Math.max(...numbers);
    return first * second;
}