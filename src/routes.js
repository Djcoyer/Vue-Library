/**
 * Created by dcoyer on 1/19/2018.
 */
import BookDirectory from './components/books/list/BookDirectory.vue';
import Home from './components/Home.vue';
import BookDetails from './components/books/BookDetails.vue';
import LoginPage from './components/auth/LoginPage.vue';
import UserProfile from './components/user/UserProfile.vue';
import BookForm from './components/books/BookForm.vue';

export const routes = [
    {path: '/', component: Home},
    {name: 'bookDetails', path: '/books/:bookId', component: BookDetails, props: {}},
    {name: 'addBook', path:'/books/add', component: BookForm, props: {}},
    {path: '/books', component: BookDirectory},
    {path: '/login', component: LoginPage},
    {path: '/user-profile', component: UserProfile}
];