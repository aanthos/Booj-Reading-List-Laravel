# Booj Reading List
*Beware of the person of one book. -- Thomas Aquinas*
## Prompt/Tasks
Compose a site using the [Laravel](https://laravel.com/) or Vue framework that allows the user to create a list of books they would like to read. Users should be able to perform the following actions:
* Connect to a publically available API
* Create Postman collection and Vue app OR Laravel App 
* Add or remove items from the list
* Change the order of the items in the list
* Sort the list of items
* Display a detail page with at least 3 points of data to display
* Include unit tests
* Deploy it on the cloud - be prepared to describe your process on deployment

## About the Project
#### Client - Vue
This application currently connects to the Open Library API (https://openlibrary.org/dev/docs/api/books) given that the user has an ISBN code to search for a book. Once an ISBN code is entered in the search field, a book will be returned from the API and can be added to the user's book list. Once the user has built their book list, they are able to sort, remove, and shift books up or down in the list. The user can also press on the display details button under a specific book in the list to display a page containing more information on the book using the data requested from the API. 

##### Vuex
This application was built as if it would become a larger-scale application in the future. With this Vue application needing communication between components without a parent-child relationship, a centralized state storage was necessary for mutating and sending data for the components in a clean and predictable way. Mutators and getters in the store modules were tested using Jest.

#### Server - Laravel
The Reading List has a basic implementation of a Laravel back-end to allow for further development of the application in the future. The book models in Laravel contain the same data fields as the data requested in the Vue front-end. In future developments, this will allow for user-specific features such as saving book lists and loading lists from the server or creating user accounts. 

##### Postman Collection
A postman collection is provided for testing the Laravel API. 
