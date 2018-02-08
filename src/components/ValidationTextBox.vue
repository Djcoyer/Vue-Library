<!--
 Created by dcoyer on 1/25/2018.
 -->
<template>
    <md-field>
        <label>{{labelText}}</label>
        <md-input @blur="this.onBlur" @keyup="this.onChange" :required="required"
                  :data-validations="validations" :placeholder="placeholder" :id="id"></md-input>
        <span class="md-error">There is an error</span>
    </md-field>
</template>

<script>
import {performValidation} from './../functions/ValidationFunctions';

    export default {
        data() {
            return {

            }
        },
        methods: {
            onChange(e){
                this.$emit('onChange', {id: e.target.id, value:e.target.value});
            },
            onBlur(e) {
                let target = e.target;
                let id = target.id;
                let value = target.value;
                let validations = target.dataset.validations.split(",");
                if(performValidation(id, value, validations)){

                }
            }
        },
        props: {
            labelText: {
                type: String,
                required: true
            },
            required: {
                type: Boolean,
                required: true
            },
            validations: {
                type: Array,
                required: true
            },
            placeholder: {
                type: String
            },
            id: {
                type: String,
                required: true
            }
        }
    }
</script>