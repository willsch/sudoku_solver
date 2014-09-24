Sudoku.prototype.backTrack = function () {
    if (!this.check()) {
        return {error:"Wrong initial sudoku!"}
    }
    var history = new Array();
    var startTime = new Date();

    var solve = function (sudoku, history, index) {
        var cloneOfValues = sudoku.getCloneOfValues();
        history.push(cloneOfValues);
        if (index > -1 && !sudoku.checkIndex(index))
            return false;


        var mrv = sudoku.MRV();
        if (!mrv)
            return sudoku.check();


        for (var i = 1; i < 10; i++) {
            sudoku.values[mrv.index] = i;
            if (solve(sudoku, history, mrv.index)) {
                return true;
            }
            sudoku.values[mrv.index] = 0;

        }
        return false;
    };


    if (solve(this, history, -1))
        return {history:history, length:history.length, time:new Date() - startTime};
    else {
        return {error:"Unsolvable Puzzle!"}
    }
};
