<template>
	<div class="dia">
		<el-dialog title="编辑" v-model="aaaaa" size="tiny" v-on:click="dialogclick(this.$el)">
			<slot></slot>
			<span slot="footer" class="dialog-footer">
				<el-button v-on:click="increment">取 消</el-button>
				<el-button type="primary" v-on:click="increment">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	
	import store from '../vuex/store'
	export default {
		name:'dia',
		data(){
			return{
				store:store
			}
		},
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
