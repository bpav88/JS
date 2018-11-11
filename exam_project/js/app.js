
let data = {
    students: {
        passed: [],
        failed: []
    }
}

function Subject(name) {
    this.name = name;
}

Subject.prototype.getSubjectName = function () {
    return this.name;
}

function Student(name, surname) {
    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentData = function () {
    return `${this.name} ${this.surname}`;
}

function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function () {
    return `${this.subject.name} - ${this.student.getStudentData()} - ${this.grade}`;
}

Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return true;
    } else {
        return false;
    }
}

// form

let $subjectSelect = document.querySelector('select');
let $nameSurnameInput = document.querySelector('.name');
let $gradeInput = document.querySelector('.grade');
let $addButton = document.querySelector('button');
let $passedUl = document.querySelector('.passed');
let $failedUl = document.querySelector('.failed');
let $passedStat = document.querySelector('.passed-stat');
let $failedStat = document.querySelector('.failed-stat');
let $h2 = document.querySelector('h2 span');

function collectData() {
    let subject = $subjectSelect.value;

    let nameSurname = $nameSurnameInput.value;
    let tmp = nameSurname.split(' ');
    let name = tmp[0];
    let surname = tmp[1];

    let grade = $gradeInput.value;

    return {
        subject: subject,
        nameSurname: nameSurname,
        name: name,
        surname: surname,
        grade: grade
    }
}

function validateData(collectedData) {
    let letterName = collectedData.name[0];
    let letterSurname = collectedData.surname[0];

    if (!collectedData.surname) {
        return false;
    } else if (letterName === letterName.toUpperCase() && letterSurname === letterSurname.toUpperCase() && collectedData.grade > 0 && collectedData.grade < 11) {
        return true;
    } else {
        return false;
    }
}

function updateList(exam, $ul) {
    let $li = document.createElement('li');
    $li.classList.add('list-group-item');
    $li.textContent = exam.getExamInfo();
    $ul.appendChild($li);
}

function updateStatistic() {
    let passed = data.students.passed.length;
    let failed = data.students.failed.length;
    $h2.textContent = passed + failed;
    $passedStat.textContent = passed + ' - ' + Math.round(passed / (passed + failed) * 100) + '%';
    $failedStat.textContent = failed + ' - ' + Math.round(failed / (passed + failed) * 100) + '%';

}



$addButton.addEventListener('click', function () {
    let collectedData = collectData();

    console.log(collectedData);


    if (validateData(collectedData)) {
        let subject = new Subject(collectedData.subject);
        let student = new Student(collectedData.name, collectedData.surname);
        let exam = new Exam(subject, student, collectedData.grade);

        if (exam.hasPassed()) {
            data.students.passed.push(exam);
            updateList(exam, $passedUl);
        } else {
            data.students.failed.push(exam);
            updateList(exam, $failedUl);
        }

        updateStatistic();

    } else {
        alert('Error!');
    }



})