<template>
<div>
        <div class="h-top">
            <div class="h-img">
            <img :src="topimg" alt="">
            </div>
            <div class="h-a">{{toptitle}}</div>
        </div>
</div>
        
</template>
<script>
export default {
    props:{
        topimg:String,
        toptitle:String
    }
    
}
</script>
<style scoped>
/* .h-mast{
    display: flex;
} */
.h-top{
    width: 1rem;
    height: 1.2rem;  
}
img{
    width: 100%;
    height: 100%;
}
.h-img{
    width: 100%;
    height: 70%;
    border-radius: 50%;
    background: red;
}


.h-top div{
    text-align: center;
    line-height: .22rem;
    color: gray;
    font-size: .2rem;

}

</style>