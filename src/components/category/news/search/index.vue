<template>
    <van-search class="search" placeholder="查找精彩动态内容" background="#fff"/>
</template>
<script>
export default {
    mounted () {
        this.$nextTick(()=> {
            let $search = document.getElementsByClassName("van-cell");
            for(let i=0;i<$search.length;i++) {
                $search[i].style.backgroundColor = "#eee";
                $search[i].style.borderRadius = "15px";
            }
        })
    }
}
</script>

