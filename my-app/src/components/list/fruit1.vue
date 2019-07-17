<template>
    <div class="f-box">
        
        <div class="fruit-left">
            <div v-for="(v,i) in fruitarr" :key="i">
            <Fruitlist :title="v.title"></Fruitlist>
            </div>
        </div>
        <div class="fruit-right">
        <!-- <router-view></router-view> -->
            
        </div>

        新鲜水果
    </div>
</template>
<script>
import Fruitlist from './fruit/fruitlist'
export default {
    data() {
        return {
            fruitarr:[]
            
        }
    },
    components:{
        Fruitlist
    },
    created() {
        this.axios({
                url:"/link/healer/hdata",//get发送数据方式
                method:"get",
                 //get发送数据方式
            }).then((ok)=>{
                this.fruitarr = ok.data.fruit;
                console.log(this.fruitarr)
                
            })
    },
    
    
}
</script>
<style scoped>
.fruit-left{
    float: left;
}
.fruit-right{
    float: right;

    height: 3rem;
    width: 5.5rem;
    background: aqua;

}

</style>