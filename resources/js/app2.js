// var id = -1;
// var subAr = [];
// var marksAr = [];
// var creditAr = [];
var id, subAr, marksAr, creditAr, GPAcount;
/*-----------------------------/
----- DOM strings -----
------------------------------*/

var DOMStrings = {
    subName: '.sub-name',
    subCredit: '.sub-credit',
    subMar: '.sub-mar',
    subAdd: '.sub-add'
};

/*-----------------------------/
----- Calculator -----
------------------------------*/
var Calculator = function() {
    var grade, subTime, totalcredit, totaltimecal;
    totalcredit = 0;
    totaltimecal = 0;
    marksAr.forEach(function(current, index, array) {
        if (current > 84) {
            grade = 4.00;
        } else if (current > 79 && current < 85) {
            grade = 3.67;
        } else if (current > 74 && current < 80) {
            grade = 3.33;
        } else if (current > 70 && current < 75) {
            grade = 3.00;
        } else if (current > 67 && current < 71) {
            grade = 2.67;
        } else if (current > 63 && current < 68) {
            grade = 2.33;
        } else if (current > 60 && current < 64) {
            grade = 2.00;
        } else if (current > 57 && current < 61) {
            grade = 1.66;
        } else if (current > 49 && current < 58) {
            grade = 1.00;
        } else {
            grade = 0.00;
        }
        subTime = grade * creditAr[index];
        totalcredit += creditAr[index];
        totaltimecal += subTime;

    });
    totalGPA = totaltimecal / totalcredit;
    totalGPA = totalGPA.toFixed(2);
    if (totalGPA !== '' && !isNaN(totalGPA) && GPAcount === 0) {

        showGPA();
        document.querySelector('.total-gpa').textContent = totalGPA;
    }

    // return fun;
};


/*-----------------------------/
----- Event Listners -----
------------------------------*/

var setupEventListners = function() {
    document.querySelector(DOMStrings.subAdd).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
    document.querySelector('.calculate-btn').addEventListener('click', Calculator);
    document.querySelector('.reset-btn').addEventListener('click', init);
};

/*-----------------------------/
----- Getting input values -----
------------------------------*/

var getInput = function() {

    return {
        subjectAd: document.querySelector(DOMStrings.subName).value,
        creditAd: parseFloat(document.querySelector(DOMStrings.subCredit).value),
        marksAd: parseFloat(document.querySelector(DOMStrings.subMar).value)
    };
};

/*-----------------------------/
----- Add items to arrays -----
------------------------------*/

var ctrlAddItem = function() {
    var input, newItem;
    input = getInput();
    if (input.subjectAd !== "" && isNaN(input.subjectAd) && input.creditAd > 0 && input.marksAd >= 0) {
        // newItem = addItem(input.subjectAd, input.creditAd, input.marksAd);
        id += 1;
        subAr[id] = input.subjectAd;
        creditAr[id] = input.creditAd;
        marksAr[id] = input.marksAd;
        clearFields();
        updateUI(id);
    }

}

/*-----------------------------/
----- Clear Fields -----
------------------------------*/

var clearFields = function() {
    var fields, fieldsArr;
    fields = document.querySelectorAll(DOMStrings.subName + ',' + DOMStrings.subCredit + ',' + DOMStrings.subMar);
    fieldsArr = Array.prototype.slice.call(fields);
    fieldsArr.forEach(function(current, index, array) {
        current.value = "";
    });
    fieldsArr[0].focus();
};

/*-----------------------------/
----- UI Update -----
------------------------------*/

//New Subject added to list

var updateUI = function(ide) {
    var html, newhtml;
    html = '<div class="subject clearfix" id="item-%id%"> <div class = "sub-name-des">%sub%</div> <div class = "right">%marks%</div><div class = "right cred">%credit%</div></div>';
    newhtml = html.replace('%id%', ide);
    newhtml = newhtml.replace('%sub%', subAr[ide]);
    marksAr[ide] < 10 ? newhtml = newhtml.replace('%marks%', '0' + marksAr[ide]) : newhtml = newhtml.replace('%marks%', marksAr[ide]);
    newhtml = newhtml.replace('%credit%', creditAr[ide]);
    document.querySelector('.subject-head').insertAdjacentHTML('beforeend', newhtml);
}

//Reset UI
var resetUI = function() {
    document.querySelector('.subject-head').textContent = '';
    document.querySelector('.result-area').textContent = '';
}

// Show total GPA on UI

var showGPA = function() {
    var html, newhtml;
    html = '<h2>YOUR GPA IS</h2><p class="total-gpa">%total-gpa%</p>';
    document.querySelector('.result-area').insertAdjacentHTML('beforeend', html);
    GPAcount = 1;
}
var init = function() {
    setupEventListners();
    clearFields();
    resetUI();
    id = -1;
    GPAcount = 0;
    subAr = [];
    marksAr = [];
    creditAr = [];
}

init();