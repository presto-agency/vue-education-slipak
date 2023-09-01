<template>
  <div class="w-full">
    <ButtonMain color="pagition" variant-type="outline" name="<<" v-on:click.native="testFunction(1)"></ButtonMain>
    <ButtonMain :variant-type="item==i ? '' : 'outline' " color="pagition" v-for="i in page"  :key="i" :name="i"  v-on:click.native="testFunction(i)" />
    <ButtonMain color="pagition" variant-type="outline" name=">>" v-on:click.native="testFunction(pages)"></ButtonMain>
  </div>
</template>

<script>
import ButtonMain from "./ButtonMain";
export default {
  name: 'pagitionHome',
  data(){
    return {
      page : [1,2,3,4,5]
    }
  },
  methods : {
    testFunction : function(event){
      this.$emit('item', event);
    },
    filtersTest : function (item) {
      this.page = [];
      const min = item +3;
      const  max = this.item - 2 ;
      for (let i = max; i < min; i++){
        if (i>0 && i<=this.pages){
          this.page.push(i);
        }
      }
    },
  },
  watch : {
    item : function () {
      this.filtersTest(this.item);
    },
  },
  created() {

    this.page = this.firstpage;

  },
  components: {
    ButtonMain
  },
  props : ['pages', 'item', 'status', 'species', 'firstpage']

}
</script>