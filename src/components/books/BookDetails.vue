<!--
 Created by dcoyer on 1/19/2018.
 -->
<template>
    <div class="container">
        <transition name="component-fade" mode="in-out">
            <div class="row" v-if="error">
                <div class="col-sm-8">
                    <md-content class="md-accent text-center pt-2" style="width:70vw; height:8vh;">
                        <span class="md-headline">There Was an Error</span>
                    </md-content>
                </div>
            </div>
        </transition>
        <div class="md-layout md-gutter md-alignment-center-center" v-if="book === null">
                <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
        </div>
        <div v-else-if="book !== null">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-6">
                            <span class="md-display-1">{{book.title}}</span>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
            <div class="md-layout md-gutter" v-if="isLoading" :class="`md-alignment-center-center`">
                <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <img :src="book.imgSrc" width="90%vw"/>
                    <div class="row mt-2">
                        <div class="col-sm-11">
                            <md-button class="md-primary md-raised float-right" v-if="book.available && isAuthenticated"
                                       @click="rentBook">Rent
                            </md-button>
                            <p v-else-if="!book.available" class="float-left">Not Available</p>
                            <p v-else class="float-right">Log in to rent</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <p><strong>Author: </strong>{{book.author}}</p>
                    <p><strong>Publisher: </strong>{{book.publisher}}</p>
                    <p><strong>Release Date: </strong>{{book.releaseDate}}</p>
                    <p><strong>Description: </strong></p>
                    <p>{{book.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from './../../store/store';
    import {eventBus} from './../../main';
    import {Constants} from './../../constants/Constants';

    export default {
        beforeRouteEnter(to, from, next) {
            let bookId = to.params.bookId;
            store.dispatch('getBook', bookId).then(() => next());
        },
        computed: {
            book(){
                return this.$store.getters.book;
            },
            isAuthenticated(){
                return this.$store.getters.isAuthenticated
            },
            isLoading() {
                return this.$store.getters.reservationLoading
            }
        },
        data() {
            return {
                userId: this.$store.getters.userId,
                error: null
            }
        },
        methods: {
            rentBook() {
                let bookId = this.book.bookId;
                let userId = this.userId;
                let reservation = {
                    bookId,
                    userId
                };
                this.$store.dispatch('addReservation', reservation);
            },
            setError() {
                setTimeout(() => {
                    this.error = null;
                }, 2000);
                this.error = {isError: true};
            }
        },
        created() {
            eventBus.$on(Constants.RESERVATION_ADDED, (reservationId) => {
                this.$router.push({name:"reservationDetails", params:{reservationId}});
            });
            eventBus.$on(Constants.RESERVATION_FAILED, () => this.setError());
        }

    }
</script>

<style>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .6s ease;
    }

    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>