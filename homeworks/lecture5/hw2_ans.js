/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
    // your code here
    function reverse(start, end){
        while(start < end){
            [str[start], str[end]] = [str[end], str[start]];
            start += 1;
            end -= 1;
        }
    }

    reverse(0, str.length-1);
    let s = 0;
    for(let i = 0; i <= str.length; i++){
        if(str[i] === ' ' || i == str.length){
            reverse(s, i-1);
            s = i + 1;
        }
    }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(""));