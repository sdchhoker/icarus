function storesAndHouses(hs, ss) {
    hs.sort((a, b) => a - b);
    ss.sort((a, b) => a - b);

    let i = 0;
    const ans = [];

    for (let h of hs) {
        while (i + 1 < ss.length && h > (ss[i] + ss[i + 1]) / 2) i += 1;

        ans.push(ss[i]);
    }

    return ans;
}

console.log(storesAndHouses([5, 10, 17], [1, 5, 20, 11, 16]));
console.log(storesAndHouses([2, 4, 2], [5, 1, 2, 3]));
console.log(storesAndHouses([4, 8, 1, 1], [5, 3, 1, 2, 6]));
