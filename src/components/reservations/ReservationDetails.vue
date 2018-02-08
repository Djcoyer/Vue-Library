<template>
    <div class="container">
        <transition name="component-fade" mode="in-out">
            <div class="row" v-if="error">
                <div class="col-sm-8">
                    <md-content class="md-accent text-center pt-2" style="width:70vw; height:8vh;">
                        <span class="md-headline">There Was an Error</span>
                    </md-content>
                </div>
            </div>
        </transition>
        <div class="md-layout md-gutter md-alignment-center-center" v-if="reservation == null || reservation.title == null">
            <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
        </div>
        <div v-else-if="reservation !== null">
            <md-card style="overflow: hidden;">
                <md-card-header>
                    <span class="md-title">
                        {{reservation.title}}
                    </span>
                </md-card-header>
                <md-card-content>
                    <div class="md-layout md-gutter" style="max-width: 80%;">
                        <div class="md-layout-item md-size-40">
                            <span class="md-subheading">Checkout Date:
                                {{new Date(reservation.startDate).toLocaleDateString()}}
                            </span>
                        </div>
                        <div class="md-layout-item md-size-30">

                        </div>
                        <div class="md-layout-item md-size-30">
                            <span class="md-subheading">
                                Due Date: {{new Date(reservation.endDate).toLocaleDateString()}}
                            </span>
                        </div>
                    </div>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-20">
                            <md-button class="md-primary">
                                Return
                            </md-button>
                        </div>
                    </div>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
    import store from './../../store/store';

    export default {
        name: "reservation-details",

        beforeRouteEnter(to, from, next) {
            let reservationId = to.params.reservationId;
            store.dispatch('getReservation', reservationId);
            next();
        },

        created() {

        },

        computed: {
            reservation() {
                return store.getters.reservation
            }
        }
    }
</script>

<style scoped>

</style>