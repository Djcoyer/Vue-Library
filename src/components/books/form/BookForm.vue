<!--
 Created by dcoyer on 1/25/2018.
 -->
<template>
    <div class="container" style="margin-top:10vh">
        <div class="md-layout md-gutter" :class="`md-alignment-${vertical}-${horizontal}`">
            <div class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header>
                        <md-card-header-text>
                            Add Book
                        </md-card-header-text>
                    </md-card-header>
                    <md-card-content>
                        <md-steppers :md-active-step.sync="active" md-alternative md-linear>
                            <!--<step1 :step1="step_1" :title="title" :author="author" :imgSrc="imgSrc" @onChange="onChange"></step1>-->
                            <md-step :id="step1.id" md-label="Book Info" :md-done.sync="step1.finished">
                                <md-field>
                                    <label>Title</label>
                                    <md-input required id="title" v-model="title"/>
                                </md-field>
                                <md-field>
                                    <label>Author</label>
                                    <md-input id="author" required v-model="author"/>
                                </md-field>
                                <md-field>
                                    <label>Image URL</label>
                                    <md-input required id="imgSrc" v-model="imgSrc"/>
                                </md-field>

                                <md-button class="md-primary float-right mt-5" @click="setDone(step1.id, step2.id)">Next</md-button>
                            </md-step>
                            <md-step :id="step2.id" md-label="Publisher Info" :md-done.sync="step2.finished">
                                <div class="md-layout md-gutter">
                                    <div class="md-layout-item md-size-100">
                                        <md-field>
                                            <label>Publisher</label>
                                            <md-input v-model="publisher" required></md-input>
                                            <span class="md-error">There is an error</span>
                                        </md-field>

                                        <label class="mb-0">Release Date</label>
                                        <md-datepicker v-model="releaseDate" class="md-accent mt-0 pt-2 mb-0"
                                                       :md-open-on-focus="false"/>

                                    </div>
                                    <div class="md-layout-item md-size-100">
                                        <md-button class="md-primary float-right mt-5"
                                                   @click="setDone(step2.id, step3.id)">Next
                                        </md-button>
                                        <md-button class="md-primary float-right mt-5"
                                                   @click="goBack(step2.id, step1.id)">Previous
                                        </md-button>
                                    </div>

                                </div>
                            </md-step>

                            <md-step :id="step3.id" md-label="Description" :md-done.sync="step3.finished">
                                <div class="md-layout-item md-size-100">
                                    <md-field>
                                        <label>Book Description</label>
                                        <md-textarea v-model="description" required></md-textarea>
                                        <span class="md-error">There is an error</span>
                                    </md-field>
                                    <md-button class="md-primary float-right mt-4" @click="finishForm">Submit
                                    </md-button>
                                    <md-button class="md-primary float-right mt-4" @click="goBack(step3.id, step2.id)">
                                        Previous
                                    </md-button>

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
    import ValidationTextBox from '../../ValidationTextBox.vue';
    import {eventBus} from '../../../main';
    import Step1 from './Step1.vue';

    export default {
        data() {
            return {
                step1: {
                    id: 'step1',
                    finished: false,
                },
                step2: {
                    id: 'step2',
                    finished: false
                },
                step3: {
                    id: 'step3',
                    finished: false
                },
                vertical: "center",
                horizontal: "center",
                first: false,
                second: false,
                third: false,
                active: this.step1,


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
//            appTextBox: ValidationTextBox,
//            step1: Step1
        },
        methods: {
            setDone(step, nextItem) {
                this[step].finished = true;
                this.active = nextItem;
            },
            validateItem(id) {
                if (this[id] == null || this[id] === '') {
                    let el = document.getElementById(id);
                    el.className += " md-invalid";
                }
            },
            goBack(step, prevItem) {
                this[step].finished = false;
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

                this.$store.dispatch('addBook', book);
            },
            onChange(payload) {
                console.log(payload);
                let id = payload.id;
                let value = payload.value;
                this[id] = value;
            }
        },
        created() {
            eventBus.$on('ADDED_BOOK', (bookId) => {
                this.$router.push('/books/' + bookId);
            });
        }
    }
</script>