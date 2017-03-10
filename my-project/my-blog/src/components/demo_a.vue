<template>
	<div class="demo-a" style="width: 100%;">
		<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
			<el-menu-item index="6"><div v-on:click="newTask">新建标题</div></el-menu-item>
		</el-menu>
		<el-table v-bind:data="edit_data_task" v-model="edit_data_task" border style="width: 100%" >
			<el-table-column prop="number" label="序号" width="100"></el-table-column>
			<el-table-column prop="task_data.task_content" label="标题" width="auto"></el-table-column>
			<el-table-column prop="task_data.operater" label="执行人" width="150"></el-table-column>
			<el-table-column prop="status" label="状态" width="150" :filters="all_status" :filter-method="filterTag">
				<template scope="scope">
					<el-tag :type="checkStatusType(scope.row)" close-transition>{{scope.row.status}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="操作" fixed="right" width="150">
				<template scope="scope">
					<el-button v-on:click="editTask(scope.$index)" type="text" size="small">编辑</el-button>
					<el-button v-on:click="deleteTask(scope.$index)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog title="编辑" v-model="dialogVisible" size="tiny">
			<el-form v-bind:model="taskEdit">
				<el-form-item label="标题" v-bind:label-width="formLabelWidth">
					<el-input v-model="taskEdit.task_data.task_content" placeholder="请填写标题" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="执行人" v-bind:label-width="formLabelWidth">
					<el-input v-model="taskEdit.task_data.operater" placeholder="请填写执行人" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="状态" v-bind:label-width="formLabelWidth">
					<el-select v-model="taskEdit.status" placeholder="请选择状态">
						<el-option v-for="(model,index) in all_status" :key="model.index" v-bind:label="all_status[index].value" v-bind:value="all_status[index].value"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button v-on:click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" v-on:click="editTaskYes">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
	let task = [
	{
		number:1,
		delete:false,
		seem:true,
		status:'-1',
		task_data:{
			task_content:'任务一',
			operater:'小明',
		},
	},
	{
		number:2,
		delete:false,
		seem:true,
		status:'-1',
		task_data:{
			task_content:'任务二',
			operater:'小红',
		},
	},
	{
		number:3,
		delete:false,
		seem:true,
		status:'0',
		task_data:{
			task_content:'任务三',
			operater:'小李',
		},
	},
	{
		number:4,
		delete:false,
		seem:true,
		status:'1',
		task_data:{
			task_content:'任务四',
			operater:'小白',
		},
	},
	{
		number:5,
		delete:false,
		seem:true,
		status:'1',
		task_data:{
			task_content:'任务五',
			operater:'小刚',
		},
	},
	{
		number:6,
		delete:false,
		seem:true,
		status:'0',
		task_data:{
			task_content:'任务六',
			operater:'小红',
		},
	},
	{
		number:7,
		delete:false,
		seem:true,
		status:'2',
		task_data:{
			task_content:'任务七',
			operater:'小芳',
		},
	}
	];

	function taskEmpty() {
		let taskEmpty = {
			number:'',
			delete:false,
			seem:true,
			status:'等待中',
			task_data:{
				task_content:'',
				operater:'',
			},
		};
		return taskEmpty;
	}
	let all_status = [{ text: '等待中', value: '等待中' }, { text: '进行中', value: '进行中' }, { text: '已完成', value: '已完成' }, { text: '已放弃', value: '已放弃' }]
	function statusCheck(task) {
		for (let i = 0; i < task.length; i++) {
			switch(task[i].status){
				case '0':
				task[i].status = all_status[0].value;
				break;
				case '1':
				task[i].status = all_status[1].value;
				break;
				case '2':
				task[i].status = all_status[2].value;
				break;
				case '-1':
				task[i].status = all_status[3].value;
				break;
				default:
				break;
			}
		}
		return task;
	}
	statusCheck(task)
	console.log(task);


	export default{
		name:'demoA',
		data(){
			return {
				edit_data_task:task,
				dialogVisible:false,
				formLabelWidth:'80px',
				editTaskNum:0,
				taskEdit:taskEmpty(),
				all_status:all_status,
			}
		},
		methods:{
			total() {
				for (let i = 0; i < this.edit_data_task.length; i++) {
					this.edit_data_task[i].seem = true;
				}
			},
			// checkStatus(check_status) {
			// 	for (let i = 0; i < this.edit_data_task.length; i++) {
			// 		if(this.edit_data_task[i].status == check_status){
			// 			this.edit_data_task[i].seem = true;
			// 		}else{
			// 			this.edit_data_task[i].seem = false;
			// 		}
			// 	}
			// },
			filterTag(value, row) {
				return row.status === value;
			},
			deleteTask(number) {
				this.$confirm('是否删除?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.edit_data_task.splice(number,1);
					for (let i = 0; i < this.edit_data_task.length; i++) {
						this.edit_data_task[i].number = i+1;
					}
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					return;      
				});
			},
			newTask() {
				this.taskEdit = taskEmpty();
				this.taskEdit.number = this.edit_data_task.length+1;
				this.dialogVisible = true;
				this.editTaskNum = this.edit_data_task.length;
				console.log(this.editTaskNum);
			},
			editTask(number) {
				this.editTaskNum = number;
				this.taskEdit = this.edit_data_task[this.editTaskNum];
				this.dialogVisible = true;
			},
			editTaskYes() {
				let task_content = this.taskEdit.task_data.task_content
				task_content = task_content.replace(/(^\s+)|(\s+$)/g,"")
				if (task_content.length == 0) {
					this.$message({
						type: 'warning',
						message: '请输入标题!'
					});
					return false;
				};
				if (this.editTaskNum < this.edit_data_task.length) {
					this.edit_data_task[this.editTaskNum] = this.taskEdit;
				}else{
					this.edit_data_task.splice(this.editTaskNum,0,this.taskEdit);
				};
				this.dialogVisible = false;
			},
			checkStatusType(row) {
				switch(row.status){
					case all_status[0].value:
					return 'primary';
					break;
					case all_status[1].value:
					return 'danger';
					break;
					case all_status[2].value:
					return 'success';
					break;
					case all_status[3].value:
					return '';
					break;
					default:
					break;
				}	
			},
		}
	}
</script>
