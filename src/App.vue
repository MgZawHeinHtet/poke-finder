<template>
    <div>
        <!-- second nav-->
        <Header class="fixed-top" id="navBar"></Header>

       <transition name="fade">
           <router-view></router-view>
       </transition>

    </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";
export default {
    components: {Body, Header},
}
</script>

<style lang="scss">
    $primary : #fcbe03;
    $secondary : #0e2a47;
    @import "~bootstrap/scss/bootstrap";
    .router-link-exact-active{
        background-color: #42b983;
        color: #fcbe03!important;
        font-weight: bolder;
        box-shadow: inset 5px 5px 10px #0a0a0a50;
    }
</style>