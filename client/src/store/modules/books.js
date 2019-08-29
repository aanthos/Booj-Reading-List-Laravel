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
                title: receivedBook[0],
                coverPath: receivedBook[1],
            } 
            state.books.push(book)
        }
    },

    getters: {
        books: state => state.books
    }


}