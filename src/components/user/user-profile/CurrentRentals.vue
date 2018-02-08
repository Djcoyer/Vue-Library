<!--
 Created by dcoyer on 2/6/2018.
 -->
<template>
    <md-card>
        <md-card-header>
            <div class="md-title pb-0" style="padding-bottom: .2em;">
                Current Rentals
            </div>
        </md-card-header>
        <md-card-content>
            <md-list class="md-triple-line">
                <div v-for="rental in rentals" >
                    <md-list-item @click="navigate(rental.id)">
                        <div class="md-list-item-text">
                            <span class="pb-1">{{rental.title}}</span>
                            <span>{{rental.author}}</span>
                            <p>Due Date: {{rental.dueDate}}</p>
                        </div>
                    </md-list-item>
                    <md-divider></md-divider>
                </div>
            </md-list>
        </md-card-content>
    </md-card>

</template>

<script>
    export default {
        data() {
            return {
                rentals: [
                    {
                        id: "test1",
                        title: "The Hunger Games",
                        author: "Suzanne Collins",
                        dueDate: new Date().toDateString()
                    },
                    {
                        id: "test2",
                        title: "The Hunger Games: Catching Fire",
                        author: "Suzanne Collins",
                        dueDate: new Date().toDateString()
                    },
                ]
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
//            rentals: {
//                type: Array,
//                required: true
//            }
        }
    }
</script>