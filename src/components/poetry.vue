<template>
	<div class="poetry">
		<el-row id="header" style="height: 100px; line-height: 100px;border-bottom: 1px solid #ccc">
			<el-col :span="6">
				<a href="./index.html"><h3>诗歌打油</h3></a>
			</el-col>
			<!-- <el-col :span="6" style="border-left: 1px solid #ccc">
				<h3 style="text-align: left;padding-left: 60px;"></h3>
			</el-col> -->
		</el-row>
		<el-row id="container">
			<el-col :span="6">
				<el-row style="margin: 30px 0;"><el-col v-for="data in [{a:'舒心中骚柔'},{a:'感万物变迁'},{a:'叹世事无常'},{a:'问人生何意'},{a:'畅安身侥幸'}]" style="height: 40px;line-height: 20px;padding: 10px 0;">{{data.a}}</el-col></el-row>
				<el-row style="border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
					<el-col style="height: 80px;line-height: 80px" :span="10" >
						<el-button type="text">关于作者</el-button>
					</el-col>
					<el-col style="border-left:1px solid #ccc;height: 80px;line-height: 80px;" :span="14">
						<el-button type="text">留言</el-button>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="18" style="border-left: 1px solid #ccc">
				<el-row v-for="data in edit_data_task" style="border-bottom: 1px solid #ccc;padding: 30px 0 30px 60px;">
					<el-row style="height:40px;line-height: 40px;text-align: left;font-size: 1rem">
						<el-col :span="3"><h4 style="text-align: left;">{{data.number}}</h4></el-col>
					</el-row>
					<el-row style="height:30px;line-height: 30px;color:#999;font-size: 0.8rem">
						<el-col :span="2" style="text-align: left;">
							{{data.task_data.operater}}
						</el-col>
						<el-col :span="2" style="text-align: left;">
							{{data.time}}
						</el-col>
					</el-row>
					<el-row style="text-align: left;margin: 20px 0">
						{{data.task_data.task_content}}
					</el-row>
				</el-row>
				<el-row style="height: 150px;line-height: 150px;">
					<h5>
						No more , Please wait , thanks!
					</h5>
					<el-button type="text">
						<a href="#">返回顶部</a>
					</el-button>
				</el-row>
			</el-col>
		</el-row>	
	</div>
</template>
<script type="text/javascript">
	export default {
	  name: 'poetry',
	  data(){
	  	return {
	  		edit_data_task: task
	  	}
	  }
	}
	var task = [
	{
		number:1,
		time:'2015-10-10',
		img:'http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg',
		delete:false,
		seem:true,
		status:'-1',
		task_data:{
			task_content:'asdasdasdas',
			operater:'小明',
		},
	},
	{
		number:2,
		time:'2015-10-10',
		img:'http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg',
		delete:false,
		seem:true,
		status:'-1',
		task_data:{
			task_content:'asdasdasdasdasdasdasasdas',
			operater:'小红',
		},
	},
	{
		number:3,
		time:'2015-10-10',
		img:'http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg',
		delete:false,
		seem:true,
		status:'0',
		task_data:{
			task_content:'asdasda啊发射点发爱书人他sdas',
			operater:'小李',
		},
	},
	{
		number:4,
		time:'2015-10-10',
		img:'http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg',
		delete:false,
		seem:true,
		status:'1',
		task_data:{
			task_content:'asdasdas阿 df sd   斯达阿萨德啊亲人 2若2das',
			operater:'小asd ',
		},
	},
	{
		number:5,
		time:'2015-10-10',
		img:'http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg',
		delete:false,
		seem:true,
		status:'1',
		task_data:{
			task_content:'asdasdasdas',
			operater:'小asd a明',
		},
	},
	{
		number:6,
		time:'2015-10-10',
		img:'http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg',
		delete:false,
		seem:true,
		status:'0',
		task_data:{
			task_content:'asda asd asd as asqer2w4 tsdasdasdasdasdasasdas',
			operater:'小 e',
		},
	},
	{
		number:7,
		time:'2015-10-10',
		img:'http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg',
		delete:false,
		seem:true,
		status:'2',
		task_data:{
			task_content:'asdasda啊 as as d发射点发爱书人他sdas',
			operater:'小adsas d',
		},
	},
	{
		number:8,
		time:'2015-10-10',
		img:'http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg',
		delete:false,
		seem:true,
		status:'2',
		task_data:{
			task_content:'asdasdasd as   as阿斯达阿萨德啊亲人 2若2das',
			operater:'小as ',
		},
	}
	]
</script>

