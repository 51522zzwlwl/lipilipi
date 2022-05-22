<template>
    <div>
        <div  class="editbanner">
            <span>{{left}}</span>
            <span><slot name="right"></slot></span>
        </div>
    </div>
</template>

<script>
export default {
    props:['left'],
}
</script>

<style>
.editbanner{
    background-color: white;
    border-bottom: 0.278vw solid #eee;
    padding: 4.167vw;
    font-size: 4.444vw;
    display: flex;
    justify-content: space-between;
    color: #333;
    align-items: center;
}
</style>