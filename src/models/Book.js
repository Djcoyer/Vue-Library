/**
 * Created by dcoyer on 1/19/2018.
 */
export default class Book {
    title;
    author;
    available;
    id;

    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(author) {
        this.author = author;
    }
    getAvailable() {
        return this.available;
    }
    setAvailable(available) {
        this.available = available;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}