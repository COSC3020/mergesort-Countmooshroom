function mergesort(array) {
    if (array.length == 0) { return []; }
    
    var temp = [];
    //Split array into smaller parts
    var arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push([array[i]]);
    }

    //merge parts together

    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i += 2) {
            temp.push([]);
            while (arr[i].length > 0 || arr[i+1].length > 0) {
                if (arr[i].length == 0) {
                    temp[i/2].push(arr[i+1].shift());
                }
                else if (arr[i+1].length == 0) {
                    temp[i/2].push(arr[i].shift());
                }
                else if (arr[i][0] < arr[i+1][0]) {
                    temp[i/2].push(arr[i].shift());
                }
                else {
                    temp[i/2].push(arr[i+1].shift());
                }
            }
        }
        //If there's an odd one out
        if (arr[arr.length - 1].length > 0) {
            temp.push(arr.pop());
        }

        arr = [];
        let tempLen = temp.length;
        for (let j = 0; j < tempLen; j++) {
            arr.push(temp.shift());
        }
    }

    return arr[0];
}
