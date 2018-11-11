
function Exam(subject, student, grade) {
    this.grade = grade;
}

Exam.prototype.getExamInfo = function () {
    return `${subject.name}, ${student.name} ${student.surname}`;
}

Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return true;
    } else {
        return false;
    }
}