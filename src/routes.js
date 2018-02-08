/**
 * Created by dcoyer on 1/19/2018.
 */
import BookDirectory from './components/books/list/BookDirectory.vue';
import Home from './components/Home.vue';
import BookDetails from './components/books/BookDetails.vue';
import UserProfile from './components/user/user-profile/UserProfile.vue';
import BookForm from './components/books/form/BookForm.vue';
import LoginPage from './components/auth/LoginPage.vue';
import RegisterPage from './components/auth/RegisterPage.vue';
import ReservationDetails from './components/reservations/ReservationDetails.vue';

export const routes = [
    {path: '/', component: Home},
    {name: 'bookDetails', path: '/books/:bookId', component: BookDetails, props: {}},
    {name: 'addBook', path:'/add-book', component: BookForm, props: {}},
    {path: '/books', component: BookDirectory},
    {path: '/user-profile', component: UserProfile},
    {path: "/login", component: LoginPage},
    {path: "/register", component: RegisterPage},
    {name: "reservationDetails", path: "/reservations/:reservationId", component: ReservationDetails}
];