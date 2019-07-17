<template>
    <div>
        <div class="list-top">
        <Toplist :toparr="toparr"></Toplist>

        </div>
        <div class="list-bottom">
        <router-view></router-view>

        </div>
    </div>
</template>
<script>
import Toplist from '../components/list/listtop/top'
export default {
    data() {
        return {
            toparr:[]
        }
    },
    components:{
        Toplist

    },
    created() {
        this.axios({
                url:"/link/healer/hlist",//get发送数据方式
                method:"get",
                 //get发送数据方式
            }).then((ok)=>{
                this.toparr = ok.data;
                console.log(this.toparr)
                
            })
    },
    
}
</script>
<style scoped>
.list-top{
    position: fixed;
    left: 0;
    top: 0;

}
.list-bottom{
    /* margin-top: 1.3rem; */
}
</style>