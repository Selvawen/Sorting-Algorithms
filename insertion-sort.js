/*
1. If it is the first element, it is already sorted; return 1.
2. Pick next element.
3. Compare with all elements in the sorted sub-list.
4. Shift all the elements in the sorted sub-list that is greater than the value
  to be sorted.
5. Insert the value.
6. Repeat until list is sorted.
*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
