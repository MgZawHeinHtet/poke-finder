<template>
   <div class="card glass-pre-card mb-5">
       <div class="square text-center"></div>
       <div class="card-footer mb-0 text-center">
           <span class="blank-line small cus-margin"></span>
       </div>
   </div>
</template>

<script>
export default {
    name: "Skeletonpreloader"
}
</script>

<style >
    .square{
        width: 80px;
        height: 80px;
        animation: bgChange 2s infinite linear;
        margin: 10px auto;
    }
    .glass-pre-card{
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        width: 200px;
    }
    .cus-margin{
        margin: 0 30px;
    }
</style>