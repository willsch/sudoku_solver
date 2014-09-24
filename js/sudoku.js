function Sudoku() {
    this.values = new Array(80);
}
Sudoku.prototype = {
    getValue:function (r, c) {
        return this.values[r * 9 + c];
    },
    checkIndex:function (index) {
        if (!this.values[index])
            return true;
        var r = Math.floor(index / 9);
        var c = index % 9;
        var br = Math.floor(r / 3) * 3; //block start row
        var bc = Math.floor(c / 3) * 3; //block start column
        var checkIndex;
        for (var i = 0; i < 9; i++) {
            checkIndex = r * 9 + i;
            if (checkIndex != index && this.values[checkIndex] == this.values[index])
                return false;
            checkIndex = i * 9 + c;
            if (checkIndex != index && this.values[checkIndex] == this.values[index])
                return false;
            checkIndex = (br + Math.floor(i / 3)) * 9 + bc + (i % 3);
            if (checkIndex != index && this.values[checkIndex] == this.values[index])
                return false;
        }

        return true;

    },
    check:function () {
        for (var index = 0; index < this.values.length; index++) {
            if (!this.checkIndex(index)) {
                return false;
            }
        }
        return true;
    },
    setValue:function (r, c, val) {

        if (isNaN(val)) {
            val = 0;
        }
        this.values[r * 9 + c] = val;
        return val;
    },
    getFromObjects:function (objects) {

        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var r = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                var c = Math.floor(i % 3) * 3 + Math.floor(j % 3);
                this.setValue(r, c, parseInt($(objects[i * 9 + j]).val()));

            }
        }
        return this;
    },
    getCloneOfValues:function () {
        return this.values.slice();
    },

    print:function () {
        var result = "";
        for (var r = 0; r < 9; r++) {
            for (var c = 0; c < 9; c++) {

                result += " " + this.getValue(r, c);
                if (!((c + 1) % 3))
                    result += " ";


            }
            result += "\n";
            if (!((r + 1) % 3))
                result += "\n";
        }
        return result;
    },
    MRV:function () {
        var i;
        var minIndex = -1;
        var minIndexDomainLength = Infinity;
        var minDomain;
        for (i = 0; i < this.values.length; i++) {
            if (!this.values[i]) {
                var domain = this.getDomain(i);
                if (domain.length < minIndexDomainLength) {
                    minIndex = i;
                    minIndexDomainLength = domain.length;
                    minDomain = domain;
                    if (minDomain.length == 1)
                        break;
                }
            }
        }
        if (minIndex != -1) {
            return {index:minIndex, domain:minDomain};
        }
        return false;

    },
    getDomain:function (index) {
        var r = Math.floor(index / 9);
        var c = index % 9;
        var br = Math.floor(r / 3) * 3; //block start row
        var bc = Math.floor(c / 3) * 3; //block start column
//                               0 ,   1 ,   2 ,   3 ,   4 ,   5 ,   6 ,   7 ,   8 ,   9
        var domain = new Array(true, true, true, true, true, true, true, true, true, true);
        for (var i = 0; i < 9; i++) {
            domain[this.values[r * 9 + i]] = false;
            domain[this.values[i * 9 + c]] = false;
            domain[this.values[(br + Math.floor(i / 3)) * 9 + bc + (i % 3)]] = false;
        }
        var result = new Array();
        for (i = 1; i < domain.length; i++) {
            if (domain[i])
                result.push(i);
        }
        return result;
    }


};