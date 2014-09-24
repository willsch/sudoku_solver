Sudoku.prototype.forwardChecking = function () {
    if (!this.check()) {
        return {error:"Wrong initial sudoku!"}
    }
    var history = new Array();
    var startTime = new Date();

    var solve = function (sudoku, history) {
        var cloneOfValues = sudoku.getCloneOfValues();
        history.push(cloneOfValues);
        var mrv = sudoku.MRV();
        if (!mrv)
            return sudoku.check();


        var domain = mrv.domain;
        for (var i = 0; i < domain.length; i++) {
            sudoku.values[mrv.index] = domain[i];
            if (solve(sudoku, history)) {
                return true;
            }
            sudoku.values[mrv.index] = 0;

        }
        return false;
    };


    if (solve(this, history))
        return {history:history, length:history.length, time:new Date() - startTime};
    else {
        return {error:"Unsolvable Puzzle!"}
    }
};
