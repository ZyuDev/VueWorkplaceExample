<template>
<div class="arm-statuses">
    <div class="text-info text-right">Статусы</div>
    <table class="table table-bordered table-hover table-condensed">
        <thead>
            <tr>
                <th>Id</th>
                <th>Статус</th>
                <th class="status-column"></th>
                <th>Водитель</th>
                <th>Номер машины</th>
                <th>Пункт назначения</th>
            
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in statuses" v-on:click="onRowClicked(row)">
                <td>{{ row.id }}</td>
                <td>{{ row.status }}</td>
                <td class="status-column" v-bind:class="{'status-load':row.statusId == 1, 'status-drive':row.statusId == 2, 'status-problem': row.statusId==3}">&nbsp;</td>
                <td>{{ row.person }}</td>
                <td>{{ row.carNumber }}</td>
                <td>{{ row.destination }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>

import StatusRecordProvider from './../dataProviders/statusRecordProvider';

export default{
    name: "StatusesComponent",
    data() {
        return{
            statuses: []

        }
    },
    methods:{

        onRowClicked(row){

            console.log("Row clicked. Selected person: "+row.personId);
            this.$emit('person-selected',row.personId);

        }
    },
    mounted(){

       var provider = new StatusRecordProvider();
       this.statuses = provider.getData();

    }
}

</script>

<style scoped>

.status-column{
    min-width: 40px;
}

.status-load{
    background-color: yellow;
}

.status-drive{
    background-color: green;
}

.status-problem{
    background-color: red;
}

</style>