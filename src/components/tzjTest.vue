<template>
	<div class="tzj-test">
	<slot></slot>
		<h1>{{test + '-测试-test'}}</h1>
	</div>
</template>
<script type="text/javascript">
import store from '../vuex/store'
	export default {
		name:'tzj-test',
		data(){
			return{
				store:store,
			}
		},
		computed:{
			test(){
				return this.store.getters.aaaaa
			}
		}
	}
</script>
