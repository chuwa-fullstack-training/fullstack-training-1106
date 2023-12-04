/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
{/////////  not in-place  ///////////////////////////
  function reverseWords(str) {
    return str = str.join('').split(' ').reverse().join(' ').split('');
  }
  
  const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
  let input1 = reverseWords(input);
  console.log(input1);
}

{/////////  in-place  ///////////////////////////
  function reverseWords(str) {
    reverseArray(str, 0, str.length -1);
    let startIndexOfWord = 0;
    for(let endIndexOfWord = 0; endIndexOfWord <= str.length; endIndexOfWord++){
      if(endIndexOfWord === str.length){
        reverseArray(str, startIndexOfWord, endIndexOfWord -1);
      }
      if( (str[endIndexOfWord] === " " && startIndexOfWord !== endIndexOfWord)){
        reverseArray(str, startIndexOfWord, endIndexOfWord -1);
        startIndexOfWord = endIndexOfWord + 1;
      }
    }
  }

  function reverseArray(arr, startIndex, endIndex){
    let leftIndex = startIndex;
    let rightIndex = endIndex;
    while(leftIndex < rightIndex){
      let temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;
      rightIndex--;
      leftIndex++;
    }
  }
  
  const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
  reverseWords(input);
  console.log(input);
}
