<template>
    <div>
        {{val}}
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                val:'vue项目后台管理系统'
            }
        }
    }
</script>

<style scoped>

</style>