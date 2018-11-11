let dataModule = (function () {

    let storage = {
        students: {
            passed: [],
            failed: []
        }
    };

    function Subject(name) {
        this.name = name;
    }

    Subject.prototype.getSubjectName = function () {
        return this.name;
    };

    function createSubject(name) {
        return new Subject(name);
    }

    function Student(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Student.prototype.getStudentData = function () {
        return `${this.name} ${this.surname}`;
    };

    function createStudent(name, surname) {
        return new Student(name, surname);
    }

    function Exam(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    Exam.prototype.getExamInfo = function () {
        return `${this.subject.name} - ${this.student.getStudentData()} - ${this.grade}`;
    };

    Exam.prototype.hasPassed = function () {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        }
    };

    function createExam(subject, student, grade) {
        return new Exam(subject, student, grade);
    }

    function addToPassed(student) {
        storage.students.passed.push(student);

    }

    function addToFailed(student) {
        storage.students.failed.push(student);

    }

    return {
        createSubject: createSubject,
        createStudent: createStudent,
        createExam: createExam,
        addToPassed: addToPassed,
        addToFailed: addToFailed
    }

})();

let uiModule = (function () {

    let $subjectSelect = document.querySelector('select');
    let $nameSurnameInput = document.querySelector('.name');
    let $gradeInput = document.querySelector('.grade');
    // let $addButton = document.querySelector('button');
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
            name: name,
            surname: surname,
            grade: grade
        }
    }

    function validateData(collectedData) {
        let letterName = collectedData.name[0];
        let letterSurname = collectedData.surname[0];

        if (letterName === letterName.toUpperCase() && letterSurname === letterSurname.toUpperCase() && collectedData.grade >=5 && collectedData.grade <= 10) {
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
        let passed = $passedUl.querySelectorAll('li').length -1;
        let failed = $failedUl.querySelectorAll('li').length -1;
        $h2.textContent = passed + failed;
        $passedStat.textContent = passed + ' - ' + Math.round(passed / (passed + failed) * 100) + '%';
        $failedStat.textContent = failed + ' - ' + Math.round(failed / (passed + failed) * 100) + '%';

    }

    return {
        collectData: collectData,
        validateData: validateData,
        updateList: updateList,
        updateStatistic: updateStatistic
    }

})();

let controller = (function (data, ui) {

    let $addButton = document.querySelector('button');
    let $passedUl = document.querySelector('.passed');
    let $failedUl = document.querySelector('.failed');

    $addButton.addEventListener('click', function () {
        let collectedData = ui.collectData();

        if (ui.validateData(collectedData)) {
            let subject = data.createSubject(collectedData.subject);
            let student = data.createStudent(collectedData.name, collectedData.surname);
            let exam = data.createExam(subject, student, collectedData.grade);

            if (exam.hasPassed()) {
                data.addToPassed(student);
                ui.updateList(exam, $passedUl);
            } else {
                data.addToFailed(student);
                ui.updateList(exam, $failedUl);
            }

            ui.updateStatistic();

        } else {
            alert('Wrong input!!');
        }



    })

})(dataModule, uiModule);