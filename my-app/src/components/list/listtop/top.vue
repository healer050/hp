<template>
    <div>
       
        <div class="h-top">
            <div class="ha">
                <img src="../../../../static/fruitimg/h-navf1.png" alt="">
            </div>
            <div class="h-box">
                <div class="h-list">
                    <div v-for="(v,i) in toparr" :key="i" class="top-list" @click="nav(v.id)">
                        <Toplist :topimg='v.img' :toptitle="v.title"></Toplist>
                    </div>
                </div>
            </div>
             <!-- <Toplist></Toplist> -->
            <div class="hb">
                <img src="../../../../static/fruitimg/h-shopping.png" alt="">
            </div>
            <div class="hc">
                <img src="../../../../static/fruitimg/h-shaer.png" alt="">
            </div>
        </div>
        <!-- <div class="h-box"></div> -->
    </div>
</template>
<script>
import Toplist from './toplist'
export default {
    
    components:{
        Toplist
    },
    props:{
        toparr:Array
    },
    methods: {
        nav(id){
            console.log(id)
            if(id=="g1"){
                this.$router.push("/list/fruit");
            }else if(id=="g2"){
                this.$router.push("/list/seasonal");
            }else if(id=="g3"){
                this.$router.push("/list/egg");
            }
             
            

        }
    },
}
</script>
<style scoped>
/* .h-box{
    width: 100%;
    height: 2rem;

} */
/* .h-box{
    position: fixed;
    left: 0;
    right: 0;
} */
.h-top img{
    width: .47rem;
    height: .42rem;
}
.top-list{
    width: 1rem;
    height: 1rem;
    margin-top: .1rem;
    margin-left: 0.2rem;
    float: left;
}
.h-list{
    width: 12rem;
    overflow: auto;

}
.h-box{
    /* width: 4rem; */
    width: 70%;
    overflow: auto;
    float: left;

    /* overflow: hidden; */
}
.ha{
    float: left;
}
.ha img{
    vertical-align: middle;

}
.hb{
    float: right;
    margin-right: 0.3rem; 
}
.hc{
    float: right;
    margin-right: 0.2rem;
}
.hc img{
    vertical-align: middle;
}
.hb img{
    vertical-align: middle;
}

</style>