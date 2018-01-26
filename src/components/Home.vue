<!--
 Created by dcoyer on 1/19/2018.
 -->
<template>
    <md-content>
        <div class="md-layout md-gutter" :class="`md-alignment-${vertical}-${horizontal}`">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg"
                             alt="First slide" style="max-width: 150px; max-height: 225px;">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="http://placehold.it/300x150" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="http://placehold.it/300x150" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </md-content>

    <!--<div class="row">-->
    <!--<div class="col-sm-3">-->
    <!--<h3>Lone Wolf Library</h3>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="row">-->
    <!--<div class="col-sm-6">-->
    <!--<p>Rent books here</p>-->
    <!--</div>-->
    <!--</div>-->
</template>
<script>

    export default {
        data(){
            return {
                horizontal: "center",
                vertical: "bottom"
            }
        },

    }

</script>