<template>
	<div class="dia">
		<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" title="联系方式" v-model="aaaaa" size="tiny">
			<contact-imformation></contact-imformation>
			<span slot="footer" class="dialog-footer">
				<!-- <el-button v-on:click="increment">取 消</el-button> -->
				<el-button type="primary" v-on:click="increment">关闭</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
  	
  	import contactImformation from './contact_information'
	import store from '../vuex/store'
	export default {
		name:'dia',
		data(){
			return{
				store:store
			}
		},
		components:{contactImformation},
		methods:{
			increment() {
				this.store.dispatch('increm')
			},
			dialogclick(e){
				console.log(e);
			}
		},
		computed:{
			aaaaa(){
				return this.store.state.aaaaa
			}
		}
	}
</script>
