<!--
 Created by dcoyer on 1/25/2018.
 -->
<template>
    <div class="container" style="margin-top:10vh">
        <div class="md-layout md-gutter" :class="`md-alignment-${vertical}-${horizontal}`">
            <div class="md-layout-item md-size-75">
                <md-card>
                    <md-card-header>
                        <md-card-header-text>
                            Add Book
                        </md-card-header-text>
                    </md-card-header>
                    <md-card-content>
                        <md-steppers :md-active-step.sync="active" md-alternative>
                            <md-step id="first" md-label="Book Information" :md-done.sync="first">
                                <div class="md-layout md-gutter">
                                    <div class="md-layout-item md-size-50">
                                        <md-field id="title">
                                            <label>Title</label>
                                            <md-input v-model="title" required @blur="validateItem('title')"></md-input>
                                            <span class="md-error">There is an error</span>
                                        </md-field>
                                        <md-field>
                                            <label>Author</label>
                                            <md-input v-model="author" required></md-input>
                                            <span class="md-error">There is an error</span>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-size-50">
                                        <!--<md-field>-->
                                            <!--<md-input v-model="releaseDate" placeholder="mm/dd/yyyy" required></md-input>-->
                                            <md-datepicker placeholder="Release date" v-model="releaseDate" class="md-accent" />
                                        <!--</md-field>-->
                                        <md-field>
                                            <label>Image URL</label>
                                            <md-input v-model="imgSrc" placeholder="http://placehold.it/50x50" required></md-input>
                                            <span class="md-error">There is an error</span>
                                        </md-field>
                                        <md-button class="md-primary float-right mt-3" @click="setDone('first', 'second')">Next</md-button>
                                    </div>
                                </div>
                            </md-step>
                            <md-step id="second" md-label="Publisher Info" :md-done.sync="second">
                                <div class="md-layout md-gutter">
                                    <div class="md-layout-item md-size-100">
                                        <md-field>
                                            <label>Publisher</label>
                                            <md-input v-model="publisher" required></md-input>
                                            <span class="md-error">There is an error</span>
                                        </md-field>
                                    </div>
                                        <div class="md-layout-item md-size-100">
                                            <md-button class="md-primary float-right mt-5" @click="setDone('second', 'third')">Next</md-button>
                                            <md-button class="md-primary float-right mt-5" @click="goBack('second', 'first')">Previous</md-button>
                                        </div>

                                </div>
                            </md-step>

                            <md-step id="third" md-label="Description" md-done.sync="third">
                                <div class="md-layout-item md-size-100">
                                    <md-field>
                                        <label>Book Description</label>
                                        <md-textarea v-model="description" required></md-textarea>
                                        <span class="md-error">There is an error</span>
                                    </md-field>
                                    <md-button class="md-primary float-right mt-4" @click="finishForm">Submit</md-button>
                                    <md-button class="md-primary float-right mt-4" @click="goBack('second', 'first')">Previous</md-button>

                                </div>
                            </md-step>

                        </md-steppers>


                                <!--<div class="md-layout-item md-size-50">-->


                                    <!--<md-field>-->
                                        <!--<label>Image URL</label>-->
                                        <!--<md-input v-model="imgSrc" required></md-input>-->
                                    <!--</md-field>-->
                                    <!--<md-button class="md-primary float-right">Next</md-button>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</form>-->
                    </md-card-content>
                </md-card>
            </div>
        </div>


    </div>
</template>

<script>
    import ValidationTextBox from './../ValidationTextBox.vue';
    import {eventBus} from './../../main';

    export default {
        data() {
            return {
                vertical: "center",
                horizontal: "center",
                first: false,
                second: false,
                third: false,
                active: 'first',


                title: '',
                author: '',
                releaseDate: '',
                imgSrc: '',
                publisher: '',
                description: ''
            }
        },
        computed: {},
        components: {
          appTextBox: ValidationTextBox
        },
        methods: {
            setDone(step, nextItem) {
//                if(validateForm(step)) {
                    this[step] = true;
                    this.active = nextItem;
//                }
            },
            validateItem(id) {
                if(this[id] == null || this[id] === '') {
                    let el = document.getElementById(id);
                    console.log("Invalid");
                    el.className += " md-invalid";
                }
            },
            goBack(step, prevItem) {
              this[step] = false;
              this.active = prevItem;
            },
            finishForm() {
                let book = {
                  title: this.title,
                    description: this.description,
                    imgSrc: this.imgSrc,
                    releaseDate: new Date(this.releaseDate),
                    publisher: this.publisher,
                    author: this.author
                };
                console.log(book);

                this.$store.dispatch('addBook', book);
            }
        },
        created() {
            eventBus.$on('ADDED_BOOK', (bookId) => {
               this.$router.push('/books/' + bookId);
            });
        }
    }
</script>