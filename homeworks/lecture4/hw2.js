// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
{
    let arr = [1,3,3,4,5,6];
    let newArr = arr.map(num=>num*2);

    console.log('newArr: ',newArr);
}

// 2. Given an array of numbers, return an array of numbers that are even.
{
    let arr = [1,2,3,3,4,5,6];
    let newArr = arr.filter(num => {
        return num % 2 === 0;
    } );

    console.log('newArr: ',newArr);
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
{   
    let str = "Hello World";
    let arr = Array.from(str);
    // console.log(arr);
    let newArr = arr.map((char, index, arr) => {
        return arr[arr.length - 1 - index];
    } );
    let newStr = newArr.join('');
    
    console.log('newStr: ',newStr);
}

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
{  
    let arr = [[0, 1], [2, 3], [4, 5]];

    let newArr = arr.reduce((output, cur) => {
        return [...output, ...cur];
    },[]);

console.log('newArr: ',newArr);
}