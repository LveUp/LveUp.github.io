<template>
  <div id="app" style="width: 1200px;margin: 0 auto;text-align: center;">
    <el-row id="header" style="background: #eef1f6 ">
      <el-col :span="14">
        <el-col :span="4" style="height: 70px">
          <router-link to="/"><h1 style="line-height: 70px;margin-left: 40px">tobeatus</h1></router-link>
        </el-col>
      </el-col>
      <el-col :span="10">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1"><router-link to="/">home</router-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title">hobbies</template>
            <el-menu-item v-for="(data,index) in navurl" :key='data.index' index="'2-'+index"><router-link :to="data.url"><div>{{data.title}}</div></router-link></el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><router-link to="/demo">demo</router-link></el-menu-item>
          <el-menu-item index="4"><div v-on:click="dialogVis">contact me</div></el-menu-item>
          <el-menu-item index="5"><router-link to="/cv">CV</router-link></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <tzj-dia></tzj-dia>
    <router-view></router-view>
    <el-row id="footer" style="background: #eef1f6; margin-top: 50px;">
      <el-col :span="16">
        <el-col :span="4" style="height: 80px">
          <router-link to="/"><h1 style="line-height: 70px;margin-left: 40px">tobeatus</h1></router-link>
        </el-col>
      </el-col>
      <el-col :span="8" >
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1"><router-link to="/">home</router-link></el-menu-item>
          <el-menu-item index="2"><div v-on:click="dialogVis">contact me</div></el-menu-item>
          <el-menu-item index="3"><router-link to="/demo">demo</router-link></el-menu-item>
          <el-menu-item index="4">CV</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <!-- <el-dialog title="编辑" v-model="dialogVisible" size="tiny">
      <dia>
        {{aaaaa}}
      </dia>
      <span slot="footer" class="dialog-footer">
        <el-button v-on:click="dialogVis">取 消</el-button>
        <el-button type="primary" v-on:click="dialogVis">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>

  var classname = [{
    background: '#D3DCE6'
  },
  {
    background: '#E5E9F2'
  }]
  var friends = [{
    name: 'Jack'
  },
  {
    name: 'Tom'
  },
  {
    name: 'Jim'
  },
  {
    name: 'Lucy'
  },
  {
    name: 'jack'
  },
  {
    name: 'jack'
  },
  {
    name: 'jack'
  },
  {
    name: 'jack'
  }]

  var navurl = [
  {
    title: 'poetry',
    url: './poetry'
  },
  {
    title: 'movie',
    url: './movie'
  },
  {
    title: 'tourism',
    url: './tourism'
  },
  {
    title: 'book',
    url: './book'
  },
  {
    title: 'food',
    url: './food'
  },
  {
    title: 'painting and calligraphy',
    url: './painting'
  },
  {
    title: 'song',
    url: './song'
  },
  {
    title: 'chess',
    url: './chess'
  }]

  import tzjDia from './components/tzj_dia'
  import store from './vuex/store'

  export default {
    name: 'app',
    components: {tzjDia},
    data () {
      return {
        navurl: navurl,
        store:store,
        classname: classname,
        formLabelWidth: '80px',
        edit_task_num: 0
      }
    },
    computed:{
      aaaaa(){
        return this.store.state.aaaaa
      }
    },
    methods:{
      dialogVis(){
        this.store.dispatch('increm')
      }
    }
  }
</script>

