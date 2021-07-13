var entrybutton1 = $('.input1');
var entrybutton2 = $('.input2');
var entrybutton3 = $('.input3');
var entrybutton4 = $('.input4');
var entrybutton5 = $('.input5');
var entrybutton6 = $('.input6');
var entrybutton7 = $('.input7');
var entrybutton8 = $('.input8');
var entrybutton9 = $('.input9');
var task1 = localStorage.getItem("task1");
var task2 = localStorage.getItem("task2");
var task3 = localStorage.getItem("task3");
var task4 = localStorage.getItem("task4");
var task5 = localStorage.getItem("task5");
var task6 = localStorage.getItem("task6");
var task7 = localStorage.getItem("task7");
var task8 = localStorage.getItem("task8");
var task9 = localStorage.getItem("task9");

var time = moment().format("H")
var date = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(date);


entrybutton1.on('click', '.button1', entry1)
entrybutton2.on('click', '.button2', entry2)
entrybutton3.on('click', '.button3', entry3)
entrybutton4.on('click', '.button4', entry4)
entrybutton5.on('click', '.button5', entry5)
entrybutton6.on('click', '.button6', entry6)
entrybutton7.on('click', '.button7', entry7)
entrybutton8.on('click', '.button8', entry8)
entrybutton9.on('click', '.button9', entry9)

function entry1 (event) {
    event.preventDefault();
    var input1 = $('textarea[name="entry1"]').val();
    localStorage.setItem ('task1', input1);
   
}

function entry2 (event) {
    event.preventDefault();
    var input2 = $('textarea[name="entry2"]').val();
    localStorage.setItem ('task2', input2);
   
}

function entry3 (event) {
    event.preventDefault();
    var input3 = $('textarea[name="entry3"]').val();
    localStorage.setItem ('task3', input3);
   
}

function entry4 (event) {
    event.preventDefault();
    var input4 = $('textarea[name="entry4"]').val();
    localStorage.setItem ('task4', input4);
   
}

function entry5 (event) {
    event.preventDefault();
    var input5 = $('textarea[name="entry5"]').val();
    localStorage.setItem ('task5', input5);
   
}

function entry6 (event) {
    event.preventDefault();
    var input6 = $('textarea[name="entry6"]').val();
    localStorage.setItem ('task6', input6);
   
}

function entry7 (event) {
    event.preventDefault();
    var input7 = $('textarea[name="entry7"]').val();
    localStorage.setItem ('task7', input7);
   
}

function entry8 (event) {
    event.preventDefault();
    var input8 = $('textarea[name="entry8"]').val();
    localStorage.setItem ('task8', input8);
   
}

function entry9 (event) {
    event.preventDefault();
    var input9 = $('textarea[name="entry9"]').val();
    localStorage.setItem ('task9', input9);
   
}

function start() {
    var taskentry1 = $('textarea[name="entry1"]')
    var taskentry2 = $('textarea[name="entry2"]')
    var taskentry3 = $('textarea[name="entry3"]')
    var taskentry4 = $('textarea[name="entry4"]')
    var taskentry5 = $('textarea[name="entry5"]')
    var taskentry6 = $('textarea[name="entry6"]')
    var taskentry7 = $('textarea[name="entry7"]')
    var taskentry8 = $('textarea[name="entry8"]')
    var taskentry9 = $('textarea[name="entry9"]')
    taskentry1.text(task1);
    taskentry2.text(task2);
    taskentry3.text(task3);
    taskentry4.text(task4);
    taskentry5.text(task5);
    taskentry6.text(task6);
    taskentry7.text(task7);
    taskentry8.text(task8);
    taskentry9.text(task9);

    colorchange1()
    colorchange2()
    colorchange3()
    colorchange4()
    colorchange5()
    colorchange6()
    colorchange7()
    colorchange8()
    colorchange9()
}


start ()

function colorchange1 () {

    if (time === 9) {
        $('textarea[name="entry1"]').addClass('present')
    }
    else if ( time >= 10 && time <= 17) {
        $('textarea[name="entry1"]').addClass('future')
    }
    else {
        $('textarea[name="entry1"]').addClass('past')
    }

}

function colorchange2 () {

    if (time === 10) {
        $('textarea[name="entry2"]').addClass('present')
    }
    else if ( time >= 11 && time <= 17) {
        $('textarea[name="entry2"]').addClass('future')
    }
    else {
        $('textarea[name="entry2"]').addClass('past')
    }

}

function colorchange3 () {

    if (time === 11) {
        $('textarea[name="entry3"]').addClass('present')
    }
    else if ( time >= 12 && time <= 17) {
        $('textarea[name="entry3"]').addClass('future')
    }
    else {
        $('textarea[name="entry3"]').addClass('past')
    }

}

function colorchange4 () {

    if (time === 12) {
        $('textarea[name="entry4"]').addClass('present')
    }
    else if ( time >= 13 && time <= 17) {
        $('textarea[name="entry4"]').addClass('future')
    }
    else {
        $('textarea[name="entry4"]').addClass('past')
    }

}

function colorchange5 () {

    if (time === 13) {
        $('textarea[name="entry5"]').addClass('present')
    }
    else if ( time >= 13 && time <= 17) {
        $('textarea[name="entry5"]').addClass('future')
    }
    else {
        $('textarea[name="entry5"]').addClass('past')
    }

}

function colorchange6 () {

    if (time === 14) {
        $('textarea[name="entry6"]').addClass('present')
    }
    else if ( time >= 15 && time <= 17) {
        $('textarea[name="entry6"]').addClass('future')
    }
    else {
        $('textarea[name="entry6"]').addClass('past')
    }

}

function colorchange7 () {

    if (time === 15) {
        $('textarea[name="entry7"]').addClass('present')
    }
    else if ( time >= 16 && time <= 17) {
        $('textarea[name="entry7"]').addClass('future')
    }
    else {
        $('textarea[name="entry7"]').addClass('past')
    }

}

function colorchange8 () {

    if (time === 16) {
        $('textarea[name="entry8"]').addClass('present')
    }
    else if ( time === 17) {
        $('textarea[name="entry8"]').addClass('future')
    }
    else {
        $('textarea[name="entry8"]').addClass('past')
    }

}

function colorchange9 () {

    if (time === 17) {
        $('textarea[name="entry9"]').addClass('present')
    }
    else if (time >= 9 && time <= 16) {
        $('textarea[name="entry9"]').addClass('future')
    }
    else {
        $('textarea[name="entry9"]').addClass('past')
    }

}