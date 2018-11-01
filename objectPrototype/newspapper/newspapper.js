
Blog.prototype = Object.create(Article.prototype);
Blog.prototype.constructor = Blog;

NewspaperArticle.prototype = Object.create(Article.prototype);
NewspaperArticle.prototype.constructor = NewspaperArticle;

Book.prototype = Object.create(Article.prototype);
Book.prototype.constructor = Book;

function Article(title, author, publishedDate, trending) {
    this.title = title;
    this.author = author;
    this.publishedDate = publishedDate;
    this.trending = trending;
}


Article.prototype.initials = function () {
    return this.author[0] + this.author[this.author.length - 1];
}

Article.prototype.old = function () {
    var result = 2018 - this.publishedDate.getFullYear();
    return result;
}

function Blog(title, author, publishedDate, url, trending) {
    Article.call(this, title, author, publishedDate, trending);
    this.url = url;
}

Blog.prototype.domainName = function () {
    var array = url.split(".");
    return array[1];
}

function NewspaperArticle(title, author, publishedDate, category, trending) {
    Article.call(this, title, author, publishedDate, trending);
    this.category = category;
}

NewspaperArticle.prototype.isPolitics = function () {
    if (this.category === 'politics') {
        return true;
    } else {
        return false;
    }
}

function Book(title, author, publishedDate, genre, trending, pages, chapters) {
    Article.call(this, title, author, publishedDate, trending);
    this.genre = genre;
    this.pages = pages;
    this.chapters = chapters;
}

Book.prototype.avgChapter = function () {
    return this.pages / this.chapters;
}



var blog1 = new Blog("Doske Fashion", "Doskovic Milos", new Date("2017-05-05"), "www.doskefashion.rs", "low");
var newspaperArticle1 = new NewspaperArticle("Kolumna Doske", "Doskovic Milos", new Date("2018-10-25"), "Sport", "High");
var book1 = new Book("DoskeH", "Doskovic Milos", new Date("2015-04-04"), "Fashion", "High", 350, 10);

console.log(newspaperArticle1.old());


