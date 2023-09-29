/*
1. Set MIN to location 0.
2. Search the minimum element in the list.
3. Swap with value at location MIN.
4. Increment MIN to point to next element.
5. Repeat until list is sorted.
*/


function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let MIN = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[MIN]) {
                MIN = j;
            }
        }
        if (MIN !== i) {
            swap(arr, i, MIN);
        }
    }
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

