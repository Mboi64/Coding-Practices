function truncateString(str, num) {
    const ellipsis = "..."
    if (str.length > num) {
        return str.slice(0, num) + ellipsis;
    }
    else if (str.length <= num){
        return str;
    }
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

console.log(truncateString("A-", 1));

console.log(("Absolutely Longer", 2));