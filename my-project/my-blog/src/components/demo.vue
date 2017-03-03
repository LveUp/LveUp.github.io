<template>
	<div class="demo" style="text-align: left;">
		<el-collapse v-model="activeNames">
			<el-collapse-item title="Demo_1 ： 简易任务管理器" name="1">
				<demo-a></demo-a>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script type="text/javascript">

	import demoA from './vue_element_demo'
	export default{
		name:'demo',
		components:{
			demoA
		},
		data(){
			return{
				activeNames:['1']
			}
		}
	}
</script>