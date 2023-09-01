<template>
  <div class="home">
    <div id="home bg-black">
      <section class="text-center  relative flex justify-center my-18 md:my-24 flex-wrap" >
        <h1 class="m-0 hidden lg:flex sm:flex-wrap text-[#5DFF18] text-white font-extrabold text-5xl 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl  items-center">
          {{title}}
        </h1>
        <h2 class="m-1 w-full text-tahiti text-5xl items-center">{{titleSecondary}}</h2>
        <div class="test-api w-full">
          <ul class="flex flex-wrap">

            <li v-for="item in list" :key="item.id" class="text-white hover:text-bubble-gum text-center flex items-center flex-col w-1/5 mb-8">
              <img :src="item.image" alt="">
              <span>{{ item.name }}</span><br>
              <span>{{ item.status }}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: 'HomePage',
  data(){
    return {
      item: 1,
      list : 2,
      pagition : null,
      search: "",
      title: 'Hi ths text for vue education',
      titleSecondary: 'api Rick And Morty',
      url_link: 'rickandmortyapi.com/documentation/#rest',
    }
  },
  components: {},
  mounted() {
    // axios.get('https://rickandmortyapi.com/api/character').then(response => this.list = response.data.results);
  },
  methods: {
    getData : function (){
      axios.get('https://rickandmortyapi.com/api/character/?page=7').then(response => this.list = response.data.results);
    },
    gotoCharsertD(event){
      this.$router.push({ name: 'Character Detail', params:{id:event} })
    },
  },
  computed : {},
  watch : {
    list : function (){
      this.getData(this.list);
    },

  },
  created() {
    this.getData(this);
  }
}
</script>
