<!--
 Created by dcoyer on 2/6/2018.
 -->
<template>
    <div class="md-layout md-gutter md-alignment-center-center" v-if="isLoading">
        <md-progress-spinner md-mode="indeterminate" ></md-progress-spinner>
    </div>
    <md-card v-else-if="!isLoading && rentals.length">
        <md-card-header>
            <div class="md-title pb-0" style="padding-bottom: .2em;">
                Current Rentals
            </div>
        </md-card-header>
        <md-card-content>
            <md-list class="md-triple-line" v-if="!isLoading">
                <div v-for="rental in rentals" >
                    <md-list-item @click="navigate(rental.reservationId)">
                        <div class="md-list-item-text">
                            <span class="pb-1">{{rental.title}}</span>
                            <span>{{rental.author}}</span>
                            <p>Due Date: {{rental.endDate}}</p>
                        </div>
                    </md-list-item>
                    <md-divider></md-divider>
                </div>
            </md-list>
        </md-card-content>
    </md-card>
    <div class="md-layout md-gutter md-alignment-center-center" v-else>
        <span class="md-headline">No Rentals</span>
    </div>

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
            navigate(id) {
                console.log(id);
            }
        },
        props: {
           rentals: {
               type: Array,
               required: true
           },
            navigate: {
               type: Function,
                required: false
            },
            isLoading: {
               type: Boolean,
                required: true
            }
        }
    }
</script>