var classname = [{background:'#D3DCE6'},{background:'#E5E9F2'}];
		var friends =[
		{
			name:'Jack',
		},
		{
			name:'Tom',
		},
		{
			name:'Jim',
		},
		{
			name:'Lucy',
		},
		{
			name:'jack',
		},
		{
			name:'jack',
		},
		{
			name:'jack',
		},
		{
			name:'jack',
		},

		]

var nav_url = [{title:'tourism',url:'./tourism.html'},{title:'the film',url:'./film.html'},{title:'book',url:'./books.html'},{title:'poetry',url:'./poetry.html'},{title:'food',url:'./food.html'},{title:'painting and calligraphy',url:'./painting.html'},{title:'song',url:'./song.html'},{title:'chess',url:'./chess.html'}]

			var img = [
			{
				title:'image',
				time:'2001.121212.12',
				img:'http://exp.cdn-hotels.com/hotels/1000000/50000/44000/43999/43999_121_z.jpg'
			},
			{
				title:'image',
				time:'2001.121212.12',
				img:'http://exp.cdn-hotels.com/hotels/1000000/50000/44000/43999/43999_121_z.jpg'
			},
			{
				title:'image',
				time:'2001.121212.12',
				img:'http://exp.cdn-hotels.com/hotels/1000000/50000/44000/43999/43999_121_z.jpg'
			},
	// {
	// 	title:'图片四',
	// 	time:'2001.121212.12',
	// 	img:'http://pic.sc.chinaz.com/files/pic/pic9/201611/fpic8336.jpg'
	// },
	
	]
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
	];

	function taskEmpty() {
		var taskEmpty = {
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
	var all_status = [{ text: '等待中', value: '等待中' }, { text: '进行中', value: '进行中' }, { text: '已完成', value: '已完成' }, { text: '已放弃', value: '已放弃' }]
	function statusCheck(task) {
		for (var i = 0; i < task.length; i++) {
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


	var newVue = new Vue({
		el:'#app',
		data: {
			nav_url:nav_url,
			classname:classname,
			friends:friends,
			imgdata:img,
			edit_data_task:task,
			dialogVisible:false,
			formLabelWidth:'80px',
			edit_task_num:0,
			task_edit:taskEmpty(),
			all_status:all_status,
			// statusName:statusCheck(task),
		},
		methods:{
			total:function () {
				for (var i = 0; i < this.edit_data_task.length; i++) {
					this.edit_data_task[i].seem = true;
				}
			},
			// checkStatus:function (check_status) {
			// 	for (var i = 0; i < this.edit_data_task.length; i++) {
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
			deleteTask:function (number) {
				this.$confirm('是否删除?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.edit_data_task.splice(number,1);
					for (var i = 0; i < this.edit_data_task.length; i++) {
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
			newTask:function () {
				this.task_edit = taskEmpty();
				this.task_edit.number = this.edit_data_task.length+1;
				this.dialogVisible = true;
				this.edit_task_num = this.edit_data_task.length;
				this.task_edit.create_time = new data();
			},
			editTask:function (number) {
				this.edit_task_num = number;
				this.task_edit = this.edit_data_task[this.edit_task_num];
				this.dialogVisible = true;
			},
			editTaskYes:function () {
				var task_content = this.task_edit.task_data.task_content
				task_content = task_content.replace(/(^\s+)|(\s+$)/g,"")
				if (task_content.length == 0) {
					this.$message({
						type: 'warning',
						message: '请输入标题!'
					});
					return false;
				};
				if (this.edit_task_num < this.edit_data_task.length) {
					this.edit_data_task[this.edit_task_num] = this.task_edit;
				}else{
					this.edit_data_task.splice(this.edit_task_num,0,this.task_edit);
				};
				this.dialogVisible = false;
			},
			checkStatusType:function (row) {
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
			offset:function (index) {
				if (index == 0) {
					return '4';
				}
				for (var i = 0; i < index; i++) {
					if (index == 0+3*i) {
						return '4';
					}else if (index == 1+3*i) {
						return '2';
					}else if (index == 2+3*i) {
						return '2';
					}
				}
			},
			checkbackground:function (index) {
				if ((index%2) == 0) {
					return this.classname[0];
				}else{
					return this.classname[1];
				}
			}
		}
	});