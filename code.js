function mergesort(arr) {
    if (arr.length == 0) { return []; }
    
    var temp = [];
    //Split array into smaller parts
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [arr[i]];
    }

    //merge parts together
    while (arr.length > 1) {
        let i = 0;
        while (i < arr.length - 1) {
            arr.splice(i, 0, [])
            while (arr[i+1].length > 0 || arr[i+2].length > 0) {
                if (arr[i+1].length == 0) {
                    arr[i].push(arr[i+2].shift());
                }
                else if (arr[i+2].length == 0) {
                    arr[i].push(arr[i+1].shift());
                }
                else if (arr[i+1][0] < arr[i+2][0]) {
                    arr[i].push(arr[i+1].shift());
                }
                else {
                    arr[i].push(arr[i+2].shift());
                }
            }
            arr.splice(i+1, 2);
            i++;
        }
    }
    return arr[0];
}
