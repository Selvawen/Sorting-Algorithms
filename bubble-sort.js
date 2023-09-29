/*
1. If the current value is greater than its neighbor to the right
2. Swap those values
3. If you get to the end of the array and no swaps have occurred, return
4. Otherwise, repeat from the beginning
*/

function bubbleSort(arr) {
    const len = arr.length;
    var swapped;

    for (let i = 0; i < len - 1; i++) {
        swapped = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped) {
            return arr;
        }
    }
    return arr;
}

function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

