function choice(arr) {
    // let r = Math.floor(Math.random() * 257);
    // let g = Math.floor(Math.random() * 150);
    // let b = Math.floor(Math.random() * 150);
    // let rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    return arr[Math.floor(Math.random() * arr.length)];
}

export {choice};