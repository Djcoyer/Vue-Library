<!--
 Created by dcoyer on 1/19/2018.
 -->
<template>
    <div class="container" v-if="book">
        <div class="row">
            <div class="col-sm-12">
                <div class="row" v-if="book != null">
                    <div class="col-sm-6">
                        <span class="md-display-1">{{book.title}}</span>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <img :src="book.imgSrc" width="90%vw"/>
                <div class="row mt-2">
                    <div class="col-sm-11">
                        <md-button class="md-primary md-raised float-right" v-if="book.available && isAuthenticated" @click="rentBook">Rent</md-button>
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
            <div class="col-sm-4">
            </div>
        </div>
    </div>
</template>

<script>
    import store from './../../store/store';

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
            }
        },
        data() {
            return{
            }
        },
        methods: {
            rentBook() {
                let bookId = this.book.bookId;
                console.log(bookId);
            }
        }

    }
</script>