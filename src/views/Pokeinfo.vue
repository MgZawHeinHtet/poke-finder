<template>
   <div class="">
       <section class="detail d-flex justify-content-center">

           <div v-if="fullload" class="detail-card">
               <div class="img-circle">
                   <img :src="pokeImg + '.png'" alt="" width="96px" height="96px">
               </div>
               <h4 class="mt-4 text-black fw-bold text-capitalize">{{spokemon.name}}</h4>
               <div class="detial-text pb-2">
                   <div class="left">Base-Experience</div>
                   <div class="right">{{spokemon.base_experience}}XP</div>
               </div>
               <div class="detial-text pb-2">
                   <div class="left">Height</div>
                   <div class="right">{{spokemon.height / 10}}m</div>
               </div>
               <div class="detial-text pb-2">
                   <div class="left">Weight</div>
                   <div class="right">{{spokemon.weight / 10}}kg</div>
               </div>
               <div class="detial-text pb-2">
                   <h3 class="mb-0 fw-bold">Pokemon Types</h3>
               </div>
               <div class="types">
                   <div :class="[type , value.type.name]" v-for="value in spokemon.types">{{value.type.name}}</div>
               </div>
               <div class="detial-text pb-2">
                   <h3 class="mb-0 fw-bold">Pokemon Abilities</h3>
               </div>
               <div class="types">
                   <div class="type bg-secondary" v-for="value in spokemon.abilities">{{value.ability.name}}</div>
               </div>
               <div class="button my-4">
                   <router-link class="btn btn-primary text-white fw-bold px-2" :to="{name : 'Pokedex',hash : '#experience'}"><i class="fas fa-arrow-alt-circle-left"></i> Back </router-link>
               </div>
           </div>

           <SkeletonCard v-if="skfinish"></SkeletonCard>
       </section>
   </div>
</template>

<script>
import SkeletonCard from "../components/skeletonCard";
export default {
    name: "pokeinfo",
    components: {SkeletonCard},
    data() {
        return {
            pokeImg : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.$route.params.id}`,
            dataUrl : `https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`,
            spokemon : {},
            type : 'type',
            fullload : false,
            skfinish : true,
        }
    },
    methods: {
        detailFetch(){
            fetch(this.dataUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.spokemon = data;
                this.skfinish = false;
                this.fullload = true;
            })
        }
    },
    created() {
        this.detailFetch();
    }
}
</script>

<style>
    .detail{
        padding: 50px 10px;
        height: 100vh;
    }
    .detail-card{
        margin-top: 80px;
        padding-top: 40px;
        padding-bottom: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 510px;
        height: 520px;
        background-color: #fafafa;
        position: relative;
        border-radius: 25px;
        box-shadow: 0 5px 10px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);
    }
    .img-circle{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #0a0a0a;
        position: absolute;
        top: -60px;
        box-shadow: 0 5px 10px rgba(0,0,0,.2),
                    0 5px 10px rgba(0,0,0,.2);
    }
    .detial-text{
        width: 90%;
        border-bottom: 1px solid black;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }
    .types{
        width: 90%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .type{
        margin: 0 5px 5px 0;
        color: white;
        font-size: 1rem;
        letter-spacing: 2px;
        padding: 10px 15px;
        text-transform: capitalize;
        word-break: keep-all;
        border-radius: 15px;
    }
    .button{
        width: 90%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

</style>