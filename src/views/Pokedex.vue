<template>
    <div class="">
        <section class="hero-pokedex shadow-lg px-0 pb-5">
            <div class="container hero-img">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="text-left text-md-center custom-p">
                            <h4 class="text-primary text-uppercase fw-bold mb-2">HI! EveryOne</h4>
                            <p class="text-white-50 mb-3">WELCOME TO THE POKE WORLD,AND FIND YOUR FAVORITE POKEMON</p>
                            <div class="">
                                <a href="" class="btn btn-primary text-black-50 text-uppercase fw-bold">get start</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pokedex-intro">
            <div class="container">
                <div class="row 100vh justify-content-center align-items-center flex-column-reverse flex-md-row">
                    <div class="col-12 col-md-6">
                        <div class="content">
                            <h4 class="text-primary mb-2 fw-bold">What is pokedex?</h4>
                            <p class="text-black-50 mb-3">The Pokédex is one of the main elements of the game. It is <span class="fw-bold">a compendium of information about every Pokémon already caught and seen by player</span> .It becomes more complete as trainers own and encounter new Pokémon.</p>
                            <button class="btn btn-primary text-uppercase text-white fw-bold me-3">Get Info</button>
                            <button class="btn btn-outline-primary text-uppercase fw-bold">Get Start</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="text-center mb-4">
                            <img src="../assets/groupash.png" alt="" class="intro-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>

       <section class="pokedex" id="experience">
           <div class="container">
               <div class="row">
                   <div class="col-12">
                       <div class="content text-center mb-5">
                           <h4 class="text-primary fw-bold text-uppercase">pokedex</h4>
                           <p class="text-white-50 ">Find Your favorite pokemon!</p>
                       </div>
                   </div>
               </div>
               <div class="row justify-content-center mb-5">
                   <div class="col-6">
                       <input v-on:keyup.enter="searchPoke()" type="search" class="form-control" v-model="pokename">
                   </div>
                   <div class="col-2">
                       <button @click="autofill()" class="btn btn-primary"><i class="fas fa-sync-alt"></i></button>
                   </div>
               </div>
               <div class="row justify-content-center">
                   <div class="col-12 col-md-3" v-for="(pokemon,index) in pokemons" v-bind:key="'poke'+index">
                       <div v-if="complete" class="card glass-pokedex pokecard text-center mb-5">
                           <img :src="imgUrl + pokemon.id + '.png' " alt="" class="img-custom">
                           <div class="card-footer mb-0 text-center text-white">
                               <p class="mb-0 text-white">{{pokemon.name}}</p>
                               <router-link class="page-changer text-light"  :to="`/pokeinfo/${pokemon.id}`"><i class="fas fa-info-circle"> views details</i></router-link>
                           </div>
                       </div>

                       <Skeletonpreloader v-if="skcomplete"></Skeletonpreloader>
                   </div>
               </div>
           </div>
       </section>

        <section id="footer" class="footer">
            <div class="container">
                <div class="row mb-3">
                    <div class="col-12">
                        <div class="introduce-title py-5 text-center">
                            <h4 class="text-uppercase text-primary fw-bold pb-1">Get in touch</h4>
                            <p class="text-white h5">Do you have any recommendation for our website?</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-5">
                        <form action="" class="form-group mb-5">
                            <input type="text" class="form-control mb-3" placeholder="NAME">
                            <input type="text" class="form-control mb-3 p-3" placeholder="EMAIL ADDRESS">
                            <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="5" placeholder="MESSAGE"></textarea>
                            <button  @click.prevent class="btn btn-primary btn-lg d-block">Submit</button>
                        </form>
                    </div>
                    <div class="col-12 col-md-3 mb-3">
                        <h5 class="text-white">Address</h5>
                        <p class="text-primary fw-bold mb-5">Yone Pot Street,Hmawbi,Yangon</p>

                        <h5 class="text-white mb-3">Follow</h5>
                        <div class="row">
                            <div class="col-12 col-md-8 mb-4">
                                <div class="d-flex justify-content-start justify-content-md-between">
                                    <span class="social-icon me-5"><i class="fab fa-facebook text-primary fa-2x"></i></span>
                                    <span class="social-icon me-5"><i class="fab fa-instagram text-primary fa-2x"></i></span>
                                    <span class="social-icon me-5"><i class="fab fa-youtube text-primary fa-2x"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <h5 class="text-white fw-bold">Phone</h5>
                        <p class="text-primary fw-bold mb-5">09 4456777224525</p>

                        <h5 class="text-white fw-bold mb-3">Gmail</h5>
                        <p class="text-white">zawhh88003@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Skeletonpreloader from "../components/Skeletonpreloader";
export default {
    name: "Pokedex",
    components: {Skeletonpreloader},
    data() {
        return {
            imgUrl : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
            dataUrl : "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0",
            nextUrl : "",
            pokemons : [],
            complete : false,
            skcomplete : true,
            pokename : "",
            getPokes : [],
            turnOn : false,
        }
    },
    methods: {
        fetchData() {
            fetch(this.dataUrl)
            .then(res => res.json())
            .then(data => {
                this.nextUrl = data.next;
                data.results.forEach((el) => {
                    el.id = el.url.split('/')
                    .filter(function (part) {return !!part}).pop();
                    this.pokemons.push(el);
                    this.getPokes.push(el);
                    setTimeout(this.turnOffLoad , 1000);
                })
            })
        },
         searchPoke() {
             this.pokemons = this.pokemons.filter(poke => {
               if(this.pokename.length > 0){
                   if (poke.name.indexOf(this.pokename) > -1){
                       return poke
                   }
               }
            });
        },
        turnOffLoad() {
                this.skcomplete = false;
                this.complete = true;
        },
        showoff() {
            this.turnOn = true
        },
        autofill () {
            this.pokemons = []
            this.pokemons = this.getPokes;
        }
        // searchFetch() {
        //     fetch(this.singlePoke)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.onePoke = data
        //         this.open = true
        //     })
        // }
    },
    mounted() {
       this.fetchData();
    },
}
</script>

<style>
    .hero-pokedex{
        height: 300px;
        background: linear-gradient(180deg,#373B4420,#4286f420,#fcbe0320) , url("../assets/tr-bg.png")  fixed;

    }
    .img-custom{
        width: 96px;
        height: 96px;
        margin: 10px auto;
    }
    .pokedex-intro{
        position: relative;
        padding: 60px 0;
        background: #eeeeee  url("../assets/container_bg.png");
    }
    .pokedex-intro p{
        font-size: 18px;
    }
    .pokedex-intro:before{
        content: '';
        width: 50px;
        height: 100%;
        background-color: #00000080;
        position: absolute;
        top: 0;
        left: 0;
    }
    .pokedex-intro:after{
        content: '';
        width: 50px;
        height: 100%;
        background-color: #00000080;
        position: absolute;
        top: 0;
        right: 0;
    }
    .intro-img{
        height: 500px;
        width: auto;
    }
    .pokecard{
        width: 200px;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.4),0px 5px 10px rgba(0,0,0,0.2);
    }
    .custom-p{
        margin: 100px auto;
        z-index: 100!important;
    }
    .pokedex{
        padding: 50px 0;
        position: relative;
    }
    .glass-pokedex{
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
    }
    .glass-pokedex:hover{
        animation: upDown 1s ease alternate;
    }
    .card-footer .page-changer{
        display: none;
        transition: 0.5s;
    }
    .glass-pokedex:hover p{
        display:none;
    }
    .glass-pokedex:hover .page-changer{
        display: block;
    }
</style>