/**
 * Created by dcoyer on 1/18/2018.
 */
import Vue from 'vue';
import {eventBus} from './../../main';

const state = {
    books: [],
    book: {}
};

const mutations = {
    "GET_BOOKS"(state, books) {
        console.log(books);
        state.books = books;
    },
    "GET_BOOK"(state, book) {
        state.book = book;
    },
    "ADDED_BOOK"(state, book) {
        state.books.push(book);
        eventBus.$emit('ADDED_BOOK', book.bookId);
    }
};

const actions = {
    getBooks: ({commit}) => {
        let test = new Promise((resolve, reject) => {
            Vue.http.get("http://localhost:8091/books")
                .then((response) => {
                    commit("GET_BOOKS", response.body);
                    resolve();
                })
        });
    },
    getBook: ({commit}, bookId) => {
        if (state.books.length) {
            let book = state.books.find((_book) => {
                return _book.bookId === bookId;
            });
            commit("GET_BOOK", book);
        }
        else {
            let book = new Promise((resolve, reject) => {
                Vue.http.get("http://localhost:8091/books/" + bookId)
                    .then((response) => {
                        commit("GET_BOOK", response.body);
                        resolve();
                    });
            });
        }
    },

    addBook: ({commit}, book) => {
        if (book != null) {
            new Promise((resolve, reject) => {
                Vue.http.post("http://localhost:8091/books", book)
                    .then((response) => {
                        commit("ADDED_BOOK", response.body);
                        resolve();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            });
        }
    }

};

const getters = {
    books: (state) => {
        return state.books;
    },
    book: (state) => {
        return state.book;
    }
};

export default {
    mutations,
    actions,
    getters,
    state
}