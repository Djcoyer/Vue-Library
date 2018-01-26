<!--
 Created by dcoyer on 1/25/2018.
 -->
<template>
    <md-field>
        <label>{{labelText}}</label>
        <md-input @blur="this.onBlur" @keyup="this.onChange" data-validations="['required','alpha','something']"></md-input>
    </md-field>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            validate() {

            },
            onChange(e){
                this.$emit('onChange', e.target.value)
            },
            onBlur(e) {
                let target = e.target;
                console.log(target.dataset);
            }
        },
        props: [
            'labelText'
        ]
    }
</script>