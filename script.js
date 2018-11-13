//Assign variables to initial HTML elements
var disp = document.getElementById('disp');
var btn = document.getElementById('btn');

var savedFullName;
var firstAge;
var lastAge;

//Make numbers random
var random = function(num) {
    var randomResult = Math.floor(Math.random() * num);
    return randomResult;
}

// Info Object
function Info() {

    //Jobs
    this.job = jobs[random(jobs.length)];
}

Info.prototype.fullName = function() {
    //Assign variables to info selections
    var randomFirstName = bothf[random(bothf.length)][random(boysf.length)];
    var randomLastName = lname[random(lname.length)];

    savedFullName = randomFirstName + ' ' + randomLastName;
    return savedFullName;
}

Info.prototype.age = function() {
    this.age = random(80);

    if (this.age < 18) {
        this.age += 18;
    }

    return this.age;
}

Info.prototype.statement = function() {
    return 'Hello, my name is ' + savedFullName + ' and I\'m ' + this.age + '.';
}

// Click button to display data
btn.onclick = function() {
    // Makes a new object every time the button is clicked
    var infoCont = new Info();

    // Displays the object
    disp.innerHTML += '<div class= "col">'
                      + '<div class="card" style="width: 20rem;">'
                      + '<div class="card-body">' 
                        + '<h5 class="card-title">' + infoCont.fullName() + '</h5>'
                        + '<p class="card-text">' + infoCont.age() + '</p>'
                        + '<p class="card-text">' + infoCont.job + '</p>'
                        + '<p class="card-text">' + infoCont.statement() + '</p>'
                      + '</div>'
                      + '</div>'
                    + '</div>';
}