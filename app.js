// Write a JavaScript conditional statement to sort three numbers.Display an alert box to show the results.

// Sample numbers: 3, -7, 2
// Output: The sign is -

// high first - low last
let arr = [3, 1, 56, 7, 3, -3, -6]
let input = arr
const span = document.querySelector('span')
span.innerHTML += ' ' + input

let swapped = false
do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            swapped = true
        }

    }
} while (swapped)

console.log(arr);




const p = document.querySelector('p')
p.innerText += ' ' + arr