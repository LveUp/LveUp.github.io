<!-- 发送出去后换一个界面接收，循环往复 -->
<template>
	<div class="demo-b">
		<el-row style="text-align: center;">
			<el-col :span="12">
				<div :class="classname.usera">
					<div  class="show-area" v-for="(data,index) in userspeak">
						<el-row style="height: 60px" v-if="index%2 == check">
							<el-col :span="4" :class="classname.useraspeak">
								<img :class="classname.useraimg" src="static/images/usera.png" />
							</el-col>
							<el-col :span="20" :class="classname.useraspeak">
								<span style="text-align: right;">{{data.word}}</span>
							</el-col>
						</el-row>
						<el-row style="height: 60px" v-if="index%2 != check">
							<el-col :span="20" :class="classname.userbspeak">
								<span style="text-align: right;">{{data.word}}</span>
							</el-col>
							<el-col :span="4" :class="classname.userbspeak">
								<img :class="classname.useraimg" src="static/images/userb.png" />
							</el-col>
						</el-row>
					</div>
					<div class="input-area">
						<el-row style="position: absolute;bottom: 0;width:100%;">
							<el-col :span="20">
								<input class="input" type="text" placeholder="输入对话内容" v-on:keyup.13="sendmassage" />
							</el-col>
							<el-col :span="4">
								<el-button type="primary" v-on:click="sendmassage">发送</el-button>
							</el-col>
						</el-row>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'demo-b',
		data(){
			return{
				classname:{
					usera :'user-a',
					userb :'user-b',
					useraspeak :'user-a-speak',
					userbspeak :'user-b-speak',
					useraimg :'user-a-img',
				},
				userspeak:[
					{
						word:'你好，我就是你，很高兴见到你！'
					}
				],
				userbspeak:{
					1:{
						time:new Date(),
						word:'你好'
					}
				},
				chengewindow: 0,
				check:0
			}
		},
		methods:{
			sendmassage(){
				let wordempty = {word:''}
				let inputvalue = document.querySelector('input').value
				console.log(inputvalue);
				inputvalue = inputvalue.replace(/(^\s+)|(\s+$)/g,"")
				if (inputvalue != '') {
					wordempty.word = inputvalue;
					this.userspeak.push(wordempty);
					document.querySelector('input').value = ''
					this.chengewindow = !this.chengewindow;
					if (this.chengewindow==false) {
						this.check = 0;
					}else{
						this.check = 1;
					}
				}
			}
		}
	}
</script>
<style type="text/css">
	.user-a{
		border:1px solid #ddd;
		width: 360px;
		height: 568px;
		margin: 0 auto;
		background: #fff;
		border-radius: 5px;
		position: relative;
		overflow: hidden;
	}
	.user-a-img{
		border-radius: 50%;
	}
	.user-b{
		color:red;
		background: #fff;
	}
	.user-a-speak{
		display: flex;
		flex-direction: middle;
		align-items: center;
		height: 100%;
		padding: 5px;
	}
	.user-b-speak{
		display: flex;
		direction:rtl;
		flex-direction: middle;
		align-items: center;
		height: 100%;
		padding: 5px;
	}
	.input{
		width: 100%;
		height: 34px;
		border-radius: 5px;
		-webkit-appearance: none;
    	-moz-appearance: none;
    	appearance: none;
    	background-color: #fff;
    	background-image: none;
    	border-radius: 4px;
    	border: 1px solid #bfcbd9;
    	box-sizing: border-box;
    	color: #1f2d3d;
    	display: block;
    	font-size: inherit;
    	height: 36px;
    	line-height: 1;
    	outline: none;
    	padding: 3px 10px;
    	transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    	width: 100%;
	}


</style>