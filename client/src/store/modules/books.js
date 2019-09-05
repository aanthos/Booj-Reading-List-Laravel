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
         * books is an array of book, each of which contains title and coverPath JSON fields
         */
        books: [],
        /**
         * showDetailsPage will turn true when book is selected on book list.
         * Used in BookDetails.vue to bring up details page for the selected book.
         */
        showDetailsPage: false,
        /**
         * selectedBookDetails contains a single Book object after it was clicked on the list.
         * Used in BookDetails.vue to bring up details of selected book.
         */
        selectedBookDetails: null,
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
            let position = state.books.findIndex(book => book.isbn === isbn)
            state.books.splice(position, 1)
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
        },

        /**
         * Shifts book up one in the queue/list
         */
        shiftBookUp(state, isbn) {
            let position = state.books.findIndex(book => book.isbn === isbn)
            //let sizeOfBooks = state.books.length
            let tempBooksArray = state.books

            if(position != 0) {
                var targetBook = tempBooksArray[position]
                tempBooksArray.splice(position, 1)
                tempBooksArray.splice((position - 1), 0, targetBook)
            }

            state.books = tempBooksArray
        },

        /**
         * Shifts the book down one in the queue/list
         */
        shiftBookDown(state, isbn) {
            let position = state.books.findIndex(book => book.isbn === isbn)
            let sizeOfBooks = state.books.length
            let tempBooksArray = state.books

            if(position != (sizeOfBooks - 1)) {
                var targetBook = tempBooksArray[position]
                tempBooksArray.splice(position, 1)
                tempBooksArray.splice((position + 1), 0, targetBook)
            }

            state.books = tempBooksArray
        },

        /**
         * Closes BookDetails page when close button is pressed.
         */
        closeBookDetailsPage(state) {
            state.showDetailsPage = false
        },

        /**
         * Changes state.selectedBookDetails to hold Book object that was selected on list
         * for display on the BookDetails page.
         * Also opens BookDetails page 
         */
        selectBookForDetails(state, isbn) {
            state.showDetailsPage = true
            let position = state.books.findIndex(book => book.isbn === isbn)
            state.selectedBookDetails = state.books[position]
        }
    },

    getters: {
        books: state => state.books,
        showDetailsPage: state => state.showDetailsPage,
        selectedBookDetails: state => state.selectedBookDetails,
    }


}