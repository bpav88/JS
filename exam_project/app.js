/*
Declare all necessary variables for managing passed and failed exams as well as their statistics.
Write all code that connects a user behaviour with application logic.   
*/

const dataModule = (function () {
  function Subject(name) {
    this.name = name;
  }

  Subject.prototype.getSubjectName = function () {
    return this.name;
  };

  function Student(fullname) {
    this.fullname = fullname.trim();
  }

  Student.prototype.getStudentData = function () {
    const nameSplited = this.fullname.toLowerCase().split(" ");
    const name =
      nameSplited[0][0].toUpperCase() +
      "" +
      nameSplited[0].slice(1, nameSplited[0].length);
    const surname =
      nameSplited[1][0].toUpperCase() +
      "" +
      nameSplited[1].slice(1, nameSplited[1].length);
    const fullname =  `${name} ${surname}`;
    return fullname;
  };

  function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
  }
  Exam.prototype.hasPassed = function () {
    if (this.grade > 5 && this.grade <= 10) {
      return true;
    } else {
      return false;
    }
  };

  Exam.prototype.getExamInfo = function () {
    return `${this.subject.getSubjectName().toLowerCase()}, ${this.student.getStudentData()}, ${
      this.grade
      }`;
  };

  function createSubject(name) {
    return new Subject(name);
  }

  function createStudent(fullname) {
    return new Student(fullname);
  }

  function createExam(subject, student, grade) {
    return new Exam(subject, student, grade);
  }

  const storage = {
    studentList: [],
    gradeList: [],
    failedStudents: [],
    passedStudents: []
  };


  console.log(storage.failedStudents);
  console.log(storage.studentList);

  function addStudentToList(student) {
    storage.studentList.push(student);
  }

  function addGradeToList(grade) {
    storage.gradeList.push(grade);
  }

  function addFailedStudent(student) {
    storage.failedStudents.push(student);
  }
  function addPassedStudent(student) {
    storage.passedStudents.push(student);
  }



  return {
    createSubject: createSubject,
    createStudent: createStudent,
    createExam: createExam,
    addStudentToList: addStudentToList,
    addGradeToList: addGradeToList,
    addFailedStudent: addFailedStudent,
    addPassedStudent: addPassedStudent
  };
})();

const uiModule = (function () {
  const $subjectSelect = $(".subSelect");
  const $studentInput = $(".studentInput");
  const $gradeInput = $(".gradeInput");

  let $passedStudents = $(".passedStudent");
  let $failedStudents = $(".failedStudent");
  let $totalStudents = $(".totalStudents");

  const $passedNumber = $(".passedNumber");
  const $failedNumber = $(".failedNumber");

  let $passedPercent = $("#passedPercent");
  let $failedPercent = $("#failedPercent");

  const $errorMassage = $(".errorMessage");

  let counterPassed = $passedStudents.length;
  let counterFailed = $failedStudents.length;

  function collectFormData() {
    return {
      subjectInput: $subjectSelect.val(),
      studentInput: $studentInput.val(),
      gradeInput: $gradeInput.val()
    };
  }

  function resetInputs() {
    $subjectSelect.val("-");
    $studentInput.val("");
    $gradeInput.val("");
  }

  function createPassedStudentsList(examInfo) {

    const li = $("<li>");
    li.text(examInfo);
    $passedStudents.append(li);
  }

  function createFailedStudentList(examInfo) {

    const li = $("<li>");
    li.text(examInfo);
    $failedStudents.append(li);
  }


  function validation() {
    const $errorMassage = $(".errorMessage");
    if (!$studentInput.val()) {
      $errorMassage.text("input name and surname");
      return false;
    } else if (!$gradeInput.val() || $gradeInput.val() < 5 || $gradeInput.val() > 10) {
      $errorMassage.text("input number between 5 and 10");
      return false;
    } else if ($subjectSelect.val() === "-") {
      $errorMassage.text("select subject");
      return false;
    }
    else {
      $errorMassage.text("");
      return true;
    }
  }


  function passedStudentNumber(data) {
    $passedNumber.text(counterPassed);
    counterPassed++;
  }

  function failedStudentNumber(data) {
    $failedNumber.text(counterFailed);
    counterFailed++;
    console.log(counterFailed);
  }

  function totalStudents(){
    let parseCounterPassed = parseInt(counterPassed) - 1;
    let parseCounterFailed = parseInt(counterFailed) - 1;
    $totalStudents.text(parseCounterFailed + parseCounterPassed);
  }
  // var ukupno = counterPassed + counterFailed;

  function percentOfPassedStudents() {
    let parseCounterPassed = parseInt(counterPassed) - 1;
    let parseCounterFailed = parseInt(counterFailed) - 1;
    let x = $passedPercent.text((parseCounterPassed / (parseCounterPassed + parseCounterFailed) * 100).toFixed(0));
    let y = $failedPercent.text(100 - parseInt(x.text()));
    // console.log(typeof parseInt(x.text()));
  }


  return {
    collectFormData: collectFormData,
    validation: validation,
    resetInputs: resetInputs,
    createPassedStudentsList: createPassedStudentsList,
    createFailedStudentList: createFailedStudentList,
    passedStudentNumber: passedStudentNumber,
    failedStudentNumber: failedStudentNumber,
    percentOfPassedStudents: percentOfPassedStudents,
    totalStudents:totalStudents
  };
})();

const controller = (function (data, ui) {
  function init() {
    setupEventHandler();
  }

  function setupEventHandler() {
    const $addButton = $(".addButton");
    $addButton.on("click", addDataToInputsHandler);
  }

  function addDataToInputsHandler() {
    if (ui.validation()) {
      const $failedStudents = $(".failedStudent");
      const li = $("li");
      const inputObj = ui.collectFormData();
      const student1 = data.createStudent(
        inputObj.studentInput
      );
      const subject1 = data.createSubject(inputObj.subjectInput);
      const exam1 = data.createExam(subject1, student1, inputObj.gradeInput);




      if (exam1.hasPassed(true)) {

        ui.createPassedStudentsList(exam1.getExamInfo());
        data.addPassedStudent(exam1);
        data.addStudentToList(exam1);
        ui.resetInputs();
        ui.passedStudentNumber();
        ui.percentOfPassedStudents();
        ui.totalStudents();

      } else {
        ui.createFailedStudentList(exam1.getExamInfo());
        data.addFailedStudent(exam1);
        data.addStudentToList(exam1);
        ui.resetInputs();
        ui.failedStudentNumber();
        ui.percentOfPassedStudents();
        ui.totalStudents();

      }
    }
  }
  return {
    init: init
  };
})(dataModule, uiModule);
