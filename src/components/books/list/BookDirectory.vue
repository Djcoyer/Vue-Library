<!--
 Created by dcoyer on 1/19/2018.
 -->
<template>
    <div class="container" v-if="(books && books.length) || isAuthenticated">
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Add Book</md-dialog-title>
            <div class="md-content m-3">
                        <md-field>
                            <label>Title</label>
                            <md-input v-model="title" required></md-input>
                        </md-field>
            </div>
            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
                <md-button class="md-primary">Save</md-button>
            </md-dialog-actions>
        </md-dialog>
        <!--<div class="row mb-2">-->
        <!--<div class="col-sm-12">-->
        <!--<div class="row">-->
        <!--<div class="col-sm-3">-->
        <!--<h3 style="display:inline;">Books</h3>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <md-table md-card v-model="books" md-sort="title" md-sort-order="asc" md-fixed-headers>
            <md-table-toolbar>
                <div class="md-layout-item md-size-10">
                    <span class="md-title">Books</span>
                </div>
                <div class="md-layout-item md-size-90">
                    <md-button class="md-raised md-dense md-primary float-right" @click="addBook">Add Book</md-button>
                </div>
            </md-table-toolbar>
            <!--<md-table-row>-->
            <!--<md-table-head>Title</md-table-head>-->
            <!--<md-table-head>Author</md-table-head>-->
            <!--<md-table-head>Available</md-table-head>-->
            <!--</md-table-row>-->
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <!--<router-link tag="td" class="md-table-cell" :to="`/books/${item.bookId}`">{{item.title}}</router-link>-->
                <md-table-cell md-label="Title" md-sort-by="title">
                    <router-link tag="span" :to="`/books/${item.bookId}`" style="cursor:pointer;">{{item.title}}
                    </router-link>
                </md-table-cell>
                <md-table-cell md-label="Author" md-sort-by="author">{{item.author}}</md-table-cell>
                <md-table-cell md-label="Available" md-sort-by="available">{{item.available}}</md-table-cell>
                <md-table-cell md-label="" v-if="isAuthenticated"><router-link :to="`/books/${item.bookId}/edit`">Edit</router-link></md-table-cell>
            </md-table-row>
        </md-table>
    </div>
    <div v-else>
        <div class="md-layout md-gutter" :class="`md-alignment-center-center`">
            <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
        </div>
    </div>
</template>

<script>
    import Book from './../../../models/Book';

    export default {
        data() {
            return {
                resource: {},
                vertical: 'top',
                horizontal: 'left',
                showDialog: false
            }
        },
        computed: {
            books(){
                return this.$store.getters.books
            },
            isAuthenticated() {
                return this.$store.getters.isAuthenticated
            }
        },
        methods: {
            addBook() {
                this.$router.push({name: 'addBook'});
            }
        },
        created() {
            this.$store.dispatch('getBooks');
        },
    }


</script>