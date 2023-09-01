<template>
  <div class="max-w-screen-2xl mx-auto  flex flex-wrap">
    <input class="w-full rounded-lg p-4 m-4" placeholder="Search Character Name .. " type="text" v-model="search">
    <CardMain page="character"  v-for="item in filterSearch" :key="item.id" :id="item.id" :images="item.image" :title="item.name" :status="item.status" :species="item.species" />
    <PagitionHome @item="item=$event" :pages="pagition" :item="item" :firstpage="[1,2,3,4,5]"></PagitionHome>
  </div>
</template>

<script>

import axios from "axios";
import CardMain from "../components/elements/CardMain";
import PagitionHome from "../components/elements/PagitionHome";
export default {
  name: 'CharacterPage',
  data(){
    return {
      item : 1,
      list : null,
      pagition : null,
      search: ""
    }
  },
  methods: {
    getData : function (event){
      axios.get('https://rickandmortyapi.com/api/character?page='+event).then(response => this.list = response.data.results);
    },
    listPage : function () {
      axios.get('https://rickandmortyapi.com/api/character?page='+event).then(response => this.pagition = response.data.info.pages);
    },

  },
  computed : {
    filterSearch : function (){
     if (this.search){
       return this.list.filter(lists=> {
         return  lists.name.toLowerCase().includes(this.search.toLowerCase());
       })
     }else {
       return this.list;
     }
    }
  },
  watch : {
    item : function (){
      this.getData(this.item);
    }
  },
  components : {
    PagitionHome,
    CardMain
  },created() {
    this.getData(this.item);
    this.listPage();
  }
}
</script>