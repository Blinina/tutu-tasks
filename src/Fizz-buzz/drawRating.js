const obj = {
    20: () => '★☆☆☆☆',
    40: () => '★★☆☆☆',
    60: () => '★★★☆☆',
    80: () => '★★★★☆',
    100: () => '★★★★★',
}

function drawRating(vote) {
    const arr = Object.keys(obj);
    const max = arr.filter((el) => el >= vote);
    return obj[max[0]]();
}