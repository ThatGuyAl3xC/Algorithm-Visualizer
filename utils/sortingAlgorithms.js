// File: src/utils/sortingAlgorithms.js

// Bubble Sort
const bubbleSort = (array) => {
  let steps = [];
  let arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({ array: [...arr], swapped: [j, j + 1] });
      } else {
        steps.push({ array: [...arr], swapped: [] });
      }
    }
  }
  steps.push({ array: [...arr], swapped: [], sorted: true });
  return steps;
};

// Insertion Sort
const insertionSort = (array) => {
  let steps = [];
  let arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
          steps.push({ array: [...arr], swapped: [j + 1, j + 2] });
      }
      arr[j + 1] = key;
      steps.push({ array: [...arr], swapped: [j + 1, i] });
  }
  steps.push({ array: [...arr], swapped: [], sorted: true });
  return steps;
};

// Selection Sort
const selectionSort = (array) => {
  let steps = [];
  let arr = array.slice();
  for (let i = 0; i < arr.length - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[min_idx]) {
              min_idx = j;
          }
      }
      [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
      steps.push({ array: [...arr], swapped: [i, min_idx] });
  }
  steps.push({ array: [...arr], swapped: [], sorted: true });
  return steps;
};

// Merge Sort
// Merge Sort
const mergeSort = (array) => {
    let steps = [];
    let arr = array.slice();

    const merge = (left, right) => {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    };

    const mergeSortHelper = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        const sortedLeft = mergeSortHelper(left);
        const sortedRight = mergeSortHelper(right);
        const merged = merge(sortedLeft, sortedRight);

        steps.push({ array: [...arr], swapped: [] });
        return merged;
    };

    mergeSortHelper(arr);
    steps.push({ array: [...arr], swapped: [], sorted: true });
    return steps;
};


// Quick Sort
// Quick Sort
const quickSort = (array) => {
    let steps = [];
    let arr = array.slice();

    const quickSortHelper = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) return;

        const pivotIndex = Math.floor((left + right) / 2);
        const pivot = arr[pivotIndex];
        const index = partition(arr, left, right, pivot);

        quickSortHelper(arr, left, index - 1);
        quickSortHelper(arr, index, right);
    };

    const partition = (arr, left, right, pivot) => {
        while (left <= right) {
            while (arr[left] < pivot) left++;
            while (arr[right] > pivot) right--;

            if (left <= right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                steps.push({ array: [...arr], swapped: [left, right] });
                left++;
                right--;
            }
        }
        return left;
    };

    quickSortHelper(arr);
    steps.push({ array: [...arr], swapped: [], sorted: true });
    return steps;
};


// Heap Sort
const heapSort = (array) => {
  let steps = [];
  let arr = array.slice();

  const heapify = (arr, n, i) => {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < n && arr[left] > arr[largest]) {
          largest = left;
      }

      if (right < n && arr[right] > arr[largest]) {
          largest = right;
      }

      if (largest !== i) {
          [arr[i], arr[largest]] = [arr[largest], arr[i]];
          steps.push({ array: [...arr], swapped: [i, largest] });
          heapify(arr, n, largest);
      }
  };

  const buildMaxHeap = (arr) => {
      let n = arr.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          heapify(arr, n, i);
      }
  };

  const heapSortHelper = (arr) => {
      buildMaxHeap(arr);
      for (let i = arr.length - 1; i > 0; i--) {
          [arr[0], arr[i]] = [arr[i], arr[0]];
          steps.push({ array: [...arr], swapped: [0, i] });
          heapify(arr, i, 0);
      }
  };

  heapSortHelper(arr);
  steps.push({ array: [...arr], swapped: [], sorted: true });
  return steps;
};

// Radix Sort
// Radix Sort
const radixSort = (array) => {
    let steps = [];
    let arr = array.slice();

    const getMax = (arr) => {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    };

    const countingSort = (arr, exp) => {
        let output = new Array(arr.length);
        let count = new Array(10).fill(0);
        let swapped = [];

        for (let i = 0; i < arr.length; i++) {
            count[Math.floor(arr[i] / exp) % 10]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
            swapped.push(i);
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
            steps.push({ array: [...arr], swapped: [...swapped] });
        }
    };

    const radixSortHelper = (arr) => {
        let max = getMax(arr);

        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            countingSort(arr, exp);
        }
    };

    radixSortHelper(arr);
    steps.push({ array: [...arr], swapped: [], sorted: true });
    return steps;
};


// Shell Sort
const shellSort = (array) => {
  let steps = [];
  let arr = array.slice();

  const shellSortHelper = (arr) => {
      let n = arr.length;
      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
          for (let i = gap; i < n; i++) {
              let temp = arr[i];
              let j;
              for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                  arr[j] = arr[j - gap];
                  steps.push({ array: [...arr], swapped: [j, j - gap] });
              }
              arr[j] = temp;
              steps.push({ array: [...arr], swapped: [] });
          }
      }
  };

  shellSortHelper(arr);
  steps.push({ array: [...arr], swapped: [], sorted: true });
  return steps;
};

export const getSortingSteps = (array, algorithm) => {
  switch (algorithm) {
      case 'Bubble Sort':
          return bubbleSort(array);
      case 'Insertion Sort':
          return insertionSort(array);
      case 'Selection Sort':
          return selectionSort(array);
      case 'Merge Sort':
          return mergeSort(array);
      case 'Quick Sort':
          return quickSort(array);
      case 'Heap Sort':
          return heapSort(array);
      case 'Radix Sort':
          return radixSort(array);
      case 'Shell Sort':
          return shellSort(array);
      default:
          return [];
  }
};
