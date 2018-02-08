<!--
 Created by dcoyer on 1/29/2018.
 -->
<template>
    <md-step :id="step1.id" md-label="Book Information" :md-done.sync="step1.finished">
        <form id="test">
            <md-field>
                <label>Title</label>
                <md-input id="title" @keyup="this.onChange" :value="title"/>
            </md-field>
            <md-field>
                <label>Author</label>
                <md-input id="author" @onChange.sync="author" :value="title"/>
            </md-field>
            <md-field>
                <label>Image URL</label>
                <md-input id="imgSrc" v-model="imgSrc"/>
            </md-field>
            <!--<app-text-box :id="'title'" @onChange="" labelText="Title"-->
                          <!--:required="true" :validations="['required','alpha']"></app-text-box>-->
            <!--<app-text-box :id="'author'" :onChange.sync="author" labelText="Author"-->
                          <!--:required="true" :validations="['required','alpha']"></app-text-box>-->
            <!--<app-text-box :id="'imgSrc'" :onChange.sync="imgSrc" labelText="Image URL"-->
                          <!--:required="true" :validations="['required','url']" placeholder="http://placehold.it/50x50"></app-text-box>-->
            <!--<md-button class="md-primary float-right mt-3" @click="setDone(step1.id, step2.id)" :disabled="!isFormValid">-->
                <!--Next-->
            <!--</md-button>-->
        </form>
    </md-step>
</template>

<script>
    import ValidationTextBox from './../../ValidationTextBox.vue';

    export default {
        data() {
            return {

            }
        },
        methods: {
            onChange(e) {
                console.log("HERE");
//                this.$emit('onChange', {id: e.target.id, value:e.target.value})
            }
        },
        props: {
            step1: {
                type: Object,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            imgSrc: {
                type: String,
                required: true
            }
        },
        computed: {
        },
        components: {
            appTextBox: ValidationTextBox
        }
    }
</script>