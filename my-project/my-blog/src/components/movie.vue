<template>
  <div class="movie">
    <el-row style="border-bottom: 1px solid #ccc">
      <el-col style="margin: 30px 0;"><h3>movies</h3></el-col>
    </el-row>
    <el-row class="attention" style="padding: 30px 0"  v-for="(item, index) in showData" :key='item.index'>
      <el-col :span="4" :offset="2">
        <el-card :body-style="{ padding: '0px' }">
          <img v-bind:src="item.images.large" class="image" height="auto" width="100%">
          <div style="padding: 14px;">
            <div>
              {{ item.title }}
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16" :offset="2">
        <h5 style="text-align: left;">观看时间：{{index + 1}}</h5>
        <br/>
        <h5 style="text-align: left;">感想：</h5>
      </el-col>
    </el-row>
    <el-row style="margin: 30px 0;">
      <el-col>
        <div class="block">
          <el-pagination
          v-on:size-change="handleSizeChange"
          v-on:current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="sizeChange"
          layout="total, prev, pager, next, jumper"
          :total="250">
        </el-pagination>
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script type="text/javascript">
  import { Loading } from 'element-ui'
  let initialData = {
    startData : 0,
    firstCurrentPage : 1,
    pageSizes : [10,20,50],
    startsize : 10,
  }

  export default {
    name: 'movie',
    data () {
      return {
        showData: [],
        realData: [],
        startData:initialData.startData,
        endData:initialData.startsize,
        currentPage:initialData.firstCurrentPage,
        sizeChange:initialData.startsize,
        pageSizes:initialData.pageSizes,
      };
    },
    created() {
      this.resource()
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        let this_ = this ;
        this_.currentPage = 1;
        this_.startData = 0;
        this_.endData = val;
        this_.sizeChange = val;

        this_.showData = this_.realData.slice();
        this_.showData = this_.showData.slice(this_.startData,this_.endData)
      },
      handleCurrentChange(val) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        console.log(`当前页: ${val}`);
        let this_ = this ;
        this_.currentPage = val;
        this_.startData = (val-1)*this_.sizeChange ;
        this_.endData = this_.startData + this_.sizeChange;

        if (this_.realData[this_.startData] == undefined) {
          let loadingInstance
          this_.$http.jsonp('https://api.douban.com/v2/movie/top250',{
            before(){                                            
              loadingInstance = Loading.service({ fullscreen: true, text: '正在加载，请稍候~'});
            },
            params:{start:this_.startData,count:this_.sizeChange},
            method:'GET',
            // credentials: false,
            emulateJSON: true
          }).then(function(res) {
            // 处理正确的回调
            this_.showData = res.data.subjects.slice();
            loadingInstance.close();

            for (var i = 0; i < res.data.subjects.length; i++) {
              this_.realData[this_.startData+i] = res.data.subjects[i];
            }
          }, function(res) {
            // 处理错误的回调
            console.log(res)
          });
        }else{
          this_.showData = this_.realData.slice();
          this_.showData = this_.showData.slice(this_.startData,this_.endData)
        }
      },
      resource(){
        let this_ = this; 
        let loadingInstance;
        this_.$http.jsonp('https://api.douban.com/v2/movie/top250',{
          before(){
            loadingInstance = Loading.service({ fullscreen: true, text: '正在加载，请稍候~'});
          },
          params:{count:this_.sizeChange},
          method:'GET',
          // credentials: false,
          emulateJSON: true
        }).then(function(res) {
          // 处理正确的回调

          
          this_.showData = res.data.subjects.slice(this_.startData,this_.endData);
          loadingInstance.close();
          this_.realData = res.data.subjects;

        }, function(res) {
          // 处理错误的回调
          console.log(res)
        });
      }
    }
  }
</script>