/*
1. Choose an element called "the pivot", how that's done is up to the implementation.
2. Take two variables to point left and right of the list excluding pivot.
3. Left points to the low index.
4. Right points to the high index.
5. While value at left is less than pivot move right.
6. While value at right is greater than pivot move left.
7. If both step 5 and step 6 does not match, swap left and right.
8. If left ≥ right, the point where they met is new pivot.
9. Repeat, recursively calling this for smaller and smaller arrays.
*/


function quickSort(arr, left = 0, right = arr.length - 1) {
    // Base case
    if (left < right) {
        let pivotIndex = rearrange(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
   
    return arr;
}

function rearrange(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];  
    return i + 1;
}


