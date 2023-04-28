<template>
<div>
  <ul class="product-listing">
    <li v-for="product in allProducts" :key="product.id">
    {{ product.title }} | {{ product.price }}
    </li>
  </ul>
</div>
</template>

<script> 
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Products-data',
  methods:{
    ...mapActions(["getProducts"])
  },
  computed: mapGetters(["allProducts"]),
  created(){
    this.getProducts();
  }
  
}
</script>


<style scoped>

</style>
