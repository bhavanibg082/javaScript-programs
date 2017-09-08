function findDuplicate() {


    var arr = [1, 2, 2, 2, 3, 4, 5, 6, 7, 7];
    var sorted_arr = arr.slice().sort();
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i] && !results.includes(sorted_arr[i])) {
            results.push(sorted_arr[i]);
        }
    }

    document.writeln("duplicates are:" + results);
}