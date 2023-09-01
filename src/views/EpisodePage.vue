<template>
  <div class="max-w-screen-2xl mx-auto  flex flex-wrap">
    <CardMain v-for="item in list" page="episode" :status="item.episode" :title="item.name" :species="item.air_date"  :key="item.index" />
    <PagitionHome @item="item=$event" :item="item" :pages="pagition" :firstpage="[1,2,3]"/>
  </div>
</template>

<script>
import axios from "axios";
import CardMain from "../components/elements/CardMain";
import PagitionHome from "../components/elements/PagitionHome";
export default {
  name:"EpisdePage",
  data(){
    return {
      item : 1,
      list:null,
      pagition : null
    }
  },
  methods : {
    getData : function (event){
      axios.get('https://rickandmortyapi.com/api/episode?page='+event).then(response => this.list = response.data.results);
    },
    listPage : function () {
      axios.get('https://rickandmortyapi.com/api/episode').then(response => this.pagition = response.data.info.pages);
    },
  },watch: {
    item : function () {
      this.getData(this.item);
    }
  },
  components : {
    PagitionHome,
    CardMain
  },
  mounted() {
    this.getData(this.item);
    this.listPage();
  }
}
</script>