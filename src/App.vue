<template>
  <div id="app">
    <PageHeader title="Пример АРМ"></PageHeader>

    <div class="row">
      <div class="col-sm-6">
        <StatusesComponent v-on:person-selected="onPersonSelected"></StatusesComponent>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <MessagesComponent v-bind:user-id="selectedPersonId"></MessagesComponent>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PageHeader from './components/PageHeader.vue'
import MessagesComponent from './components/MessagesComponent.vue';
import StatusesComponent from './components/StatusesComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PageHeader,
    MessagesComponent,
    StatusesComponent
  },
  data(){
    return {
      selectedPersonId: 0

    }
  },
  methods: {
    onPersonSelected(personId){

      console.log("Cathc person selected: "+personId);
      this.selectedPersonId = personId;

    }
  }
}
</script>

<style>
#app {
  

}
</style>
