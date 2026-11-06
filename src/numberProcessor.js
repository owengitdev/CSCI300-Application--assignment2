const sum = (a, b) => {
    return a + b;  
}

const highandlow = (numbers) => {
    const numArray = numbers.split(' ').map(Number);
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);
    return '' + highest + ' ' + lowest;
}

const average = (numbers) => {
    const numArray = numbers.split(' ').map(Number);
    const total = numArray.reduce((acc, curr) => acc + curr, 0);
    const ave = total / numArray.length;
    return ave;
}