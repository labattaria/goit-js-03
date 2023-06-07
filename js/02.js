const countProps = function (props) {
    // const amountOfEntries = Object.entries(props);
    // return amountOfEntries.length;
    // return Object.entries(props).length;

    // const amountOfKeys = Object.keys(props);
    // return amountOfKeys.length;
    return Object.keys(props).length;
}

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
