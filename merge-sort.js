/*
Steps for Sorting Function
1. Check if the input is length 1 or less.
2. If so, it's already sorted: return.
3. Divide the array in half.
4. Recursively sort the left half.
5. Recursively sort the right half.
6. Merge the halves together and return.

Steps for Merge Sort
1. Create an empty return array.
2. Point to the first value of each array.
3. While there are still values in each array:
4. Compare the first values of each array.
5. Add the smaller value to the return array.
6. Move the pointer to the next value in that array.
7. Return the return array.
*/

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
 
    return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
    let mergedArr = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
        if (leftArr[leftPointer] < rightArr[rightPointer]) {
            mergedArr.push(leftArr[leftPointer]);
            leftPointer++;
        } else {
            mergedArr.push(rightArr[rightPointer]);
            rightPointer++;
        }
    }
    mergedArr = mergedArr.concat(leftArr.slice(leftPointer), rightArr.slice(rightPointer));
    return mergedArr;
}


