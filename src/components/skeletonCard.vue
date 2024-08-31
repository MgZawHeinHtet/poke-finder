<template>
    <div class="">
        <div class="detail-card">
            <div class="img-circle skeleton">
                <i class="far fa-user-circle fa-3x text-white"></i>
            </div>
            <h4 class="mt-4 mb-2"><span class="blank-line"></span></h4>
            <div class="detial-text pb-2">
                <div class="left"><span class="blank-line"></span></div>
                <div class="right"><span class="blank-line small"></span></div>
            </div>
            <div class="detial-text pb-2">
                <div class="left"><span class="blank-line"></span></div>
                <div class="right"><span class="blank-line small"></span></div>
            </div>
            <div class="detial-text pb-2">
                <div class="left"><span class="blank-line"></span></div>
                <div class="right"><span class="blank-line small"></span></div>
            </div>
            <div class="detial-text pb-2">
                <h3 class="mb-0 fw-bold"><span class="blank-line big"></span></h3>
            </div>
            <div class="types">
                <div class="type p-0"><span class="blank-line typer"></span></div>
            </div>
            <div class="detial-text pb-2">
                <h3 class="mb-0 fw-bold"><span class="blank-line big"></span></h3>
            </div>
            <div class="types">
                <div class="type p-0"><span class="blank-line typer"></span></div>
            </div>
            <div class="button my-4">
                <span class="blank-line typer"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "skeletonCard"
}
</script>

<style>
    .img-circle.skeleton{
        animation: bgChange 2s infinite linear;
    }
    .blank-line{
        width: 120px;
        height: 20px;
        animation: bgChange 2s infinite linear;
        display: block;
        border-radius: 10px;
    }
    .blank-line.big{
        width: 200px;
        height: 40px;
        border-radius: 15px;
    }
    .blank-line.small{
        width: 100px;
        height: 20px;
        border-radius: 15px;
    }
    .blank-line.typer{
        width: 100px;
        height: 40px;
        border-radius: 15px;
    }
    @keyframes bgChange {
        0%{
            background-color: #0c325920;
        }
        50%{
            background-color: #0c325940;
        }
        100%{
            background-color: #0c325960;
        }
    }
</style>