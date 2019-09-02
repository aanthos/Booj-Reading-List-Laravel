/*
|-------------------------------------------------------------------------------
| VUEX modules/books.js
|-------------------------------------------------------------------------------
| The Vuex data store for the user's book list
*/

/**
 * Exports the books module
 */
export const books = {
    state: {
        /**
         * books is an array of book, each of which title and coverPath JSON fields
         */
        books: []
    },

    mutations: {
        /**
         * Takes in book array selected by user in AddBook.vue
         * and formats it into JSON before pushing it into state.books array
         */
        pushBookToUserList(state, receivedBook) {
            const book = {
                isbn: receivedBook[0],
                title: receivedBook[1],
                coverPath: receivedBook[2],
            }
            state.books.push(book)
        },

        /**
         * Takes in Book id and finds out the index position of the Book in state.books.
         * Then removes this book.
         */
        removeBookFromUserList(state, isbn) {
            let position = state.books.findIndex(book => book.isbn === isbn);
            state.books.splice(position, 1);
        },

        /**
         * Compares title of books in state.books and sorts them alphabetically in ascending order
         */
        sortBooksAlphabeticallyAscending(state) {
            state.books.sort((book1, book2) =>
                book1.title.localeCompare(book2.title))
        },

        /**
         * Compares title of books in state.books and sorts them alphabetically in descending order
         */
        sortBooksAlphabeticallyDescending(state) {
            state.books.sort((book1, book2) =>
                book2.title.localeCompare(book1.title))
        }
    },

    getters: {
        books: state => state.books
    }


}