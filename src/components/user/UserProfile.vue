<!--
 Created by dcoyer on 1/19/2018.
 -->

<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-3">
                        <h3>User Profile</h3>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-7">
                <p>Tests</p>
            </div>
            <div class="col-sm-4 offset-1">
                <p>Tests</p>
            </div>
        </div>
    </div>

</template>

<script>
    import store from './../../store/store';
    export default {
        methods: {

        },
        data() {
            return {

            }
        },
        computed: {
            user() {
              return this.$store.getters.getUser;
            }
        },
        beforeRouteEnter(to, from, next) {
            if(store.getters.getUser == null || store.getters.getUser.userId == null){
                store.dispatch('getUser');
            }
            next();
        }
    }
</script>