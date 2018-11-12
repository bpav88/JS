const dataModule = (function () {
    let storage = {
        tasks: []
    }

    class Task {
        constructor(name, date) {
            this.name = name;
            this.date = date;
            this.status = false;
        }
    }

})();

const uiModule = (function () {

})();

const controller = (function (data, ui) {

})(dataModule, uiModule);