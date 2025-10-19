function isCyclops(n) {
    const a = n.toString();
    if (a.length % 2 === 0) return false;
    const mid = Math.floor(a.length / 2);
    if (a[mid] !== '0') return false;
    for(let i = 0; i < a.length; i++) {
        if (i !== mid && a[i] === '0') return false;
    }
    return true;
}
console.log(isCyclops(202));
console.log(isCyclops(492));
console.log(isCyclops(54345));