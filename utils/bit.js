function BIT(nums) {
    const n = nums.length;
    const bits = Array(n + 1);

    function _build() {
        bits[0] = 0;

        for (let i = 0; i < n; i += 1) {
            bits[i + 1] = nums[i];
        }

        for (let i = 1; i <= n; ++i) {
            let j = i + (i & -i);

            if (j <= n) bits[j] += bits[i];
        }
    }

    function update(idx, val) {
        const diff = val - nums[idx];
        nums[idx] = val;

        for (idx += 1; idx <= n; idx += idx & (-idx)) {
            bits[idx] += diff;
        }
    }

    function _queryBIT(idx) {
        let sum = 0;

        for (idx += 1; idx > 0; idx -= idx & (-idx)) {
            sum += bits[idx];
        }

        return sum;
    }

    function query(i, j) {
        return _queryBIT(j) - _queryBIT(i - 1);
    }

    _build();

    return {
        update,
        query
    };
}

const bit = BIT([2, 3, 1, 5, 3, 7, 2, 9]);

bit.update(0, 5);
console.log(bit.query(2, 7));
console.log(bit.query(4, 6));
