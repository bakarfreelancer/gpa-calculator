/*-----------------------------/
----- GPA CALCULATOR -----
------------------------------*/

var Calculator = (function() {
    //
})();

/*-----------------------------/
----- UI CONTROLLER -----
------------------------------*/

var UIController = (function() {
    //
    var DOMStrings = {
        subName: '.sub-name',
        subCredit: '.sub-credit',
        subMar: '.sub-mar',
        subAdd: '.sub-add'
    };

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        getInput: function() {
            return {
                subjectAd: document.querySelector(DOMStrings.subName).value,
                creditAd: parseFloat(document.querySelector(DOMStrings.subCredit).value),
                marksAd: parseFloat(document.querySelector(DOMStrings.subMar).value)
            };

        }
    }
})();

/*-----------------------------/
----- CONTROLLER -----
------------------------------*/

var Controller = (function(UICtrl, CalcCtrl) {
    //
    var DOM = UIController.getDOMStrings();
    var setupEventListners = function() {
        document.querySelector(DOM.subAdd).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    var ctrlAddItem = function() {
        var input, newItem;
        input = UICtrl.getInput();
        if (input.subjectAd !== "" && !isNaN(input.subjectAd) && input.subjectAd > 0) {
            newItem = Calculator.addItem(); //to be continue
        }
    }

    return {}
})(UIController, Calculator);