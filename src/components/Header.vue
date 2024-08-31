<template>
    <!-- lower nav -->
    <nav class="navbar navbar-expand-lg d-flex align-items-center  navbar-dark shadow" >
        <div class="container text-center">
            <div class="py-2">
                <img src="../assets/poke-logo.png" alt="" class="brand-logo">
            </div>
            <button @click="changeIcon()" class="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas text-white fa-bars menu-icon"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-end text-uppercase custom-nav" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 text-center">
                    <li class="nav-item">
                        <router-link  class="nav-link text-light"  :to="{name:'Home'}" >Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link text-light" :to="{name: 'Pokedex'}">Pokedex</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link text-light" :to="{name: 'Game'}">Game</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- end nav -->
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            changed : 'bg-primary'
        }
    },
    methods: {
        changeIcon() {
            let result = $(".navbar-collapse").hasClass("show");
            console.log(result);

            if(result){
                $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
            }else{
                $(".menu-icon").removeClass("fa-bars").addClass("fa-cross");
            }
        }
    },
    watch: {
        '$route' () {
            if( $('.navbar-collapse').hasClass('show')){
                $('.navbar-collapse').removeClass('show')
                $('.navbar-collapse').addClass('hide')
                $(".menu-icon").removeClass("fa-cross").addClass("fa-bars");
                console.log("dfd")
            }
        }
    }
}
</script>

<style >

</style>