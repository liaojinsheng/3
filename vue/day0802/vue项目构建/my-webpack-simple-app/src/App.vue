<template>
  <div id="app" class="vm">
    
    <h1>{{title}}</h1>
    
    <test-com></test-com>
    
  </div>
</template>

<script>
import test from './test.vue'	
	
export default {
  data () {
    return {
    	title: 'hello vue'
    }
  },
  components: {
  	'test-com': test
  }
}
</script>

<style>
h1{
	font-size: 30px;
	color: red;
}

</style>
