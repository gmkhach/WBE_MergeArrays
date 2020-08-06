// Write a function that takes three sorted arrays and merges them into a single sorted array

function mergeArrays(a, b, c) {
    return a.concat(b.concat(c)).reduce((result, value) => {
        if (result.length === 0) {
            result.push(value);
            return result;
        }

        for (let i = 0; i < result.length; i++) {
            if (result[i] >= value) {
                result.splice(i, 0, value);
                break;
            } else if (i === result.length - 1) {
                result.push(value);
                break;
            }
        }
        return result;
    }, []);
}

const arr1 = [3, 5, 6];
const arr2 = [1, 7];
const arr3 = [2, 4, 8, 9];

console.log(mergeArrays(arr1, arr2, arr3));
