<template>
    <div class="h-fruit">
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    }
    
}
</script>
<style scoped>
.h-fruit{
    width: 2rem;
    height: 1rem;
    background: rosybrown;
}
.h-fruit span{
    display: block;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 1rem;
    
    
}
</style>