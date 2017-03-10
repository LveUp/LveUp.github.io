<template>
	<div class="demo" style="text-align: left;">
		<el-collapse v-model="activeNames">
			<el-collapse-item title="Demo_1 ： 简易任务管理器" name="1">
				<demo-a></demo-a>
			</el-collapse-item>
			<el-collapse-item title="Demo_2 ： 简(精)易(神)自(分)我(裂)对话器" name="2">
				<demo-b></demo-b>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script type="text/javascript">

	import demoA from './demo_a'
	import demoB from './demo_b'
	export default{
		name:'demo',
		components:{
			demoA,
			demoB
		},
		data(){
			return{
				activeNames:['1','2']
			}
		}
	}
</script>