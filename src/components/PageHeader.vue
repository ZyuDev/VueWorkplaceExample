<template>
    <div class="arm-page-header">
        <div class="row">
            <div class="col-sm-12">
                <h3>{{ title }}</h3>
            </div>         
        </div>
        <div class="row">
            <div class="col-sm-12">
                <button class="btn btn-sm btn-outline-primary" v-on:click="onUpdateClick">Обновить</button>
            </div>
        </div>

        <hr/>
    </div>
   
</template>

<script>
export default{
    name: "PageHeader",
    props: {
        title: String
    },
    methods:{
        onUpdateClick(){

            alert("Update click");

        }
    }
}
</script>

<style scoped>

.arm-page-header h3{
    color: navy;
}

</style>