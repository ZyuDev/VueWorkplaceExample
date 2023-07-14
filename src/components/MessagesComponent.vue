<template>
<div class="arm-messages">
    <div class="text-info text-right">Сообщения</div>
    <table class="table table-bordered table-hover table-condensed">
        <thead>
            <tr>
                <th>Id</th>
                <th>Период</th>
                <th>Сообщение</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="msg in messages">
                <td>{{ msg.messageId }}</td>
                <td>{{ msg.period }}</td>
                <td>{{ msg.text }}</td>
            </tr>
        </tbody>
    </table>

</div>
</template>

<script>

import UserMessageProvider from './../dataProviders/userMessageProvider';

export default{
    name: "MessagesComponent",
    props:{
        userId:Number
    },
    data() {
        return{
            messages: []

        }
    },
    watch:{
        userId: function(newVal, oldVal){
            var provider = new UserMessageProvider();
            this.messages = provider.getUserMessages(this.userId);
        }

    },
    mounted(){

        var provider = new UserMessageProvider();
        this.messages = provider.getUserMessages(this.userId);

    }
}
</script>