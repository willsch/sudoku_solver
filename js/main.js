var sudoku;
var initialSudoku = [
    [7, 0, 0, 0, 8, 0, 0, 0, 9, 3, 0, 8, 4, 0, 0, 7, 1, 0, 0, 1, 0, 0, 0, 0, 8, 2, 0, 8, 5, 0, 1, 9, 0, 2, 0, 0, 0, 3, 0, 8, 0, 5, 0, 7, 0, 0, 0, 4, 0, 2, 7, 0, 5, 8, 0, 7, 1, 0, 0, 0, 0, 8, 0, 0, 8, 6, 0, 0, 4, 1, 0, 2, 5, 0, 0, 0, 1, 0, 0, 0, 7],
    [0, 4, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 5, 0, 7, 0, 8, 9, 0, 0, 0, 2, 0, 5, 0, 6, 0, 0, 0, 0, 7, 9, 0, 0, 5, 4, 2, 0, 0, 3, 5, 0, 6, 4, 8, 9, 0, 0, 0, 3, 0, 8, 0, 0, 0, 6, 8, 4, 7, 0, 9, 1, 0, 0, 2, 3, 8, 0, 0, 5, 9, 0, 0, 0, 0, 6, 0, 9, 0, 3, 0, 0, 0, 7, 9, 0, 3, 0, 2, 0, 1],
    [0, 6, 0, 2, 0, 0, 0, 0, 8, 9, 3, 0, 0, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 3, 0, 0, 0, 7, 0, 0, 3, 0, 0, 5, 6, 6, 0, 0, 1, 0, 5, 0, 0, 9, 5, 1, 0, 0, 2, 0, 0, 8, 0, 0, 0, 6, 5, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 6, 2, 3, 0, 0, 0, 0, 2, 0, 9, 0],
    [0, 0, 9, 0, 0, 1, 0, 0, 8, 3, 0, 0, 7, 6, 9, 0, 0, 0, 1, 0, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 7, 0, 0, 2, 3, 5, 3, 7, 0, 0, 0, 8, 6, 1, 2, 8, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 6, 0, 0, 0, 0, 5, 0, 0, 0, 5, 9, 7, 0, 0, 2, 7, 0, 0, 1, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 9, 0, 4, 0, 0, 6, 0, 0, 0, 1, 7, 0, 0, 0, 0, 0, 7, 4, 0, 0, 0, 2, 0, 9, 5, 6, 1, 0, 0, 0, 3, 0, 7, 6, 0, 8, 0, 2, 1, 0, 1, 0, 0, 0, 7, 5, 9, 6, 0, 5, 0, 0, 0, 3, 6, 0, 0, 0, 0, 0, 9, 1, 0, 0, 0, 5, 0, 0, 8, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 3, 5, 0, 8, 0, 4, 2, 0, 4, 0, 0, 0, 0, 6, 0, 0, 2, 0, 0, 3, 0, 4, 9, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 9, 0, 0, 4, 0, 7, 0, 2, 0, 0, 1, 0, 8, 0, 0, 0, 0, 6, 0, 0, 0, 5, 6, 0, 9, 0, 0, 7, 0, 0, 2, 0, 0, 0, 0, 9, 0, 7, 8, 0, 2, 0, 1, 5, 0, 0],
    [0, 3, 0, 0, 0, 4, 2, 0, 5, 0, 0, 1, 7, 0, 0, 0, 4, 0, 8, 0, 0, 5, 0, 0, 0, 0, 6, 5, 4, 9, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 9, 7, 4, 3, 0, 0, 0, 0, 2, 0, 0, 7, 0, 6, 0, 0, 0, 5, 4, 0, 0, 4, 0, 8, 1, 0, 0, 0, 9, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 1, 0, 0, 0, 5, 6, 0, 3, 4, 8, 0, 0, 8, 0, 3, 0, 6, 5, 0, 0, 6, 0, 0, 0, 4, 0, 0, 3, 0, 8, 2, 0, 0, 0, 1, 6, 0, 3, 0, 0, 6, 0, 0, 0, 2, 0, 0, 4, 3, 0, 9, 0, 2, 0, 0, 1, 9, 7, 0, 2, 6, 0, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 8, 0, 1, 4, 0, 0, 0, 0, 0, 7, 0, 8, 5, 0, 0, 6, 1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 9, 8, 0, 0, 0, 4, 5, 0, 0, 3, 5, 0, 1, 9, 0, 0, 5, 8, 0, 0, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 4, 9, 0, 0, 3, 5, 0, 8, 0, 0, 0, 0, 0, 4, 9, 0, 5, 3, 0]
];
$(function () {

    function newSudokuUi(initialSudoku) {
        sudoku = new Sudoku();
        history = new Array();
        $(".main-table").empty();
        $(".controllers").empty();
        $("#show-result").button("disable");
        $("#unlock").button("disable");
        var $subTable;
        for (var i = 0; i < 9; i++) {
            $subTable = $("<div class='sub-table'></div>");
            for (var j = 0; j < 9; j++) {
                var row = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                var column = (Math.floor(i % 3) * 3 + Math.floor(j % 3));
                var index = row * 9 + column;
                var $input = $("<input class='ui-widget ui-state-default ui-corner-all field' type='text' size='1'/>")
                    .hover(
                    function () {
                        $(this).addClass("ui-state-hover");
                    },
                    function () {
                        $(this).removeClass("ui-state-hover");
                    })
                    .attr("tabIndex", index + 1)
                    .addClass("block" + i)
                    .addClass("row" + row)
                    .addClass("column" + column)
                    .addClass("index" + index)
                    .focus(function () {
                        $(this).addClass("ui-state-focus");
                    }).blur(function () {
                        $(this).removeClass("ui-state-focus");
                    }).change(function () {
                        var $this = $(this);
                        if (!parseInt($this.val())) {
                            $this.val("");
                        }
                    }).jStepper({minValue:0, maxValue:9, minLength:1, onStep:function (objTextField, bDirection, bLimitReached) {

                        if (!bDirection && bLimitReached) {
                            $(objTextField).val("");
                        }

                    }});
                if (initialSudoku && initialSudoku[index] > 0) {
                    $input.val(initialSudoku[index]);
                }
                $subTable.append($input);
            }
            $(".main-table").append($subTable);
        }
        $(".main-table").append($("<br clear='all'/>"))
    }


    $("#new").click(function () {
        newSudokuUi(initialSudoku[Math.floor(Math.random() * 1000) % initialSudoku.length]);
    }).trigger("click").button();
    $("#new-empty").click(function () {
        newSudokuUi();
    }).button();
    $("#solve").click(function () {
        sudoku.getFromObjects($(".main-table .field"));
        $(".main-table .field").each(function () {
            var $this = $(this);
            if ($this.val()) {
                $this.addClass("ui-state-highlight");
            }
            $this.prop("readonly", true).jStepper({"destroy":true});
        });
        $("#unlock").button("enable");
        var result;
        if ($("#algorithm-back-track").is(":checked")) {
            result = sudoku.backTrack();
        }
        if ($("#algorithm-forward-checking").is(":checked")) {
            result = sudoku.forwardChecking();
        }
        $(".controllers").empty();
        var $dialog = $("<div id='dialog'></div>");

        if (result) {
            if (result.error) {
                newSudokuUi(sudoku.values);
                $dialog.append(result.error);
                $(".controllers").append($dialog);
            } else if (result.history) {
                sudoku.values = result.history[0];
                var $slider = $("<span id='slider' style='width: 335px; display: inline-block; margin-bottom: 4px; margin-left: 6px; margin-right: 8px;'></span>");
                $slider.slider({
                    orientation:"horizontal",
                    range:"min",
                    min:0,
                    max:result.history.length - 1,
                    change:function (event, ui) {
                        var values = result.history[ui.value];
                        sudoku.values = values;
                        jQuery.each(values, function (index) {
                            var $val = $(".index" + index);
                            if (values[index] != $val.val()) {
                                $val.effect("highlight", 1000);
                            }
                            if (values[index])
                                $val.val(values[index]);
                            else
                                $val.val("");
                        });
                    }
                });

                var $prev = $("<span></span>").addClass("ui-icon").addClass("ui-icon-triangle-1-w").click(function () {
                    var value = $slider.slider("value");
                    if (value) {
                        $slider.slider("value", value - 1);
                    }
                }).button();
                var $next = $("<span></span>").addClass("ui-icon").addClass("ui-icon-triangle-1-e").click(function () {
                    var value = $slider.slider("value");

                    if ($slider.slider("option", "max") > value) {
                        $slider.slider("value", value + 1);
                    }

                }).button();

                $(".controllers").append($prev);
                $(".controllers").append($slider);
                $(".controllers").append($next);
                $(".controllers").unbind("mousewheel").bind("mousewheel", function (objEvent, intDelta) {
                    if (intDelta > 0) { // Up
                        $next.click();
                        return false;
                    }
                    else if (intDelta < 0) { // Down
                        $prev.click();
                        return false;
                    }
                });


                $dialog.append($("<div></div>").text("Solving Time: " + result.time + " Milliseconds"));
                $dialog.append($("<div></div>").text("Path Length: " + result.length));
                $(".controllers").append($dialog);
                $("#show-result").unbind("click").bind("click",function () {
                    $dialog.dialog("open");
                }).button("enable");
            }
            $dialog = $("#dialog").dialog({
                modal:true,
                buttons:{
                    Ok:function () {
                        $(this).dialog("close");
                    }
                }
            }).dialog("open");
        }
    }).button();
    $("#algorithms>div").buttonset();
    $("#show-result").button().button("disable");
    $("#unlock").bind("click",function () {
        newSudokuUi(sudoku.values);
    }).button().button("disable");

});
