function isPiramida(n) {
    const a = n.toString();
    if (a.length % 2 === 0) return false;
    const mid = Math.floor(a.length / 2);

    for (let i = 0; i < mid; i++) {
        if (a[i] >= a[i + 1]) return false;
    }
    for (let i = mid; i < a.length - 1; i++) {
        if (a[i] <= a[i + 1]) return false;
    }

    return true;
}
console.log(isPiramida(12321)); 
console.log(isPiramida(1232));   