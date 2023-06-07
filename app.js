// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
//...
const maxOfThree = function(x, y, z) {
    if (x >= y) {
        return x;
    } else if (y >= z) {
        return y;
    } else if (z >= x) {
        return z;
    }
    }

    console.log(maxOfThree(7, 3, 9))

    // 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
    var x = ['a','e','i','o','u','y'];
    if (x.includes(char)) return true;
    return false;
}
    
     console.log(isCharAVowel('a'))

     // 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

     const sumArray = function(a, b, c) {
    return a + b + c;
}

     console.log(sumArray(3, 4, 3))


     // 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

     function multiplyArray(a, b, c) {
        return a * b * c;
     }

     console.log(multiplyArray(2, 4, 10))


     // 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

    const numArgs = function() {
        return arguments.length;
    }

    console.log(numArgs(5))

    // 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

    function reverseString(s) {
        return s.split("").reverse().join("");
    }
    
    console.log(reverseString("worldstar"))


    // 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

    const longestStringInArray = function(str) {
        let longestArray = 0
        str.forEach(element => {

            if (element.length > longestArray) {
                longestArray = element.length;
            }

        });
        return longestArray;
        }

    console.log(longestStringInArray(['cat','dog','capybara','mouse']))


    // 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

    function stringsLongerThan(str, lth) {
       return str.filter(element => {

            if (element.length > lth) {
                return element;
            }
       
    });
}

console.log(stringsLongerThan(['best','wishes','to','you','all'], 3))