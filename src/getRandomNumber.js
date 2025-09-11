
export const getRandomNumber = (start, end) => {
    if(typeof start !== 'number' || typeof end !== 'number'){
        throw new TypeError(`${start} or ${end} is not a number!! start and end are must be number. Please give valid numbers.`);
    }
    
    start = Math.abs(start);
    end = Math.abs(end);
    if(end < start){
        [start, end] = [end, start];
    }

    const randomNum = Math.floor(Math.random() * (end - start + 1)) + start;

    return randomNum;
};