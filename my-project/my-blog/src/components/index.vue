<template>
  <div class="index" style="text-align: center;">
    <el-row>
      <el-col>
        <el-carousel :interval="4000" height="500px">
          <el-carousel-item v-for="data in 1" :key='data.index'>
            <div style="margin-top: 150px">
              <h2>
                to-beatus
              </h2>
              <!-- <h3 style="margin-top: 15px">要幸福</h3> -->
            </div>
            <div style="margin-top: 50px">
              <h5>
                These words would be written on my tombstone in the future :
              </h5>
              <h5 style="margin-top: 20px">
                "I guess it comes down to a simple choice:'get busy living or get busy
                dying'." I think i chosen the first one."
              </h5>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/javascript">
var imgdata = [{
    imgname: 'image',
    time: '2001.1.12',
    img: 'http://exp.cdn-hotels.com/hotels/1000000/50000/44000/43999/43999_121_z.jpg'
  },
  {
    imgname: 'image',
    time: '2001.2.12',
    img: 'http://exp.cdn-hotels.com/hotels/1000000/50000/44000/43999/43999_121_z.jpg'
  },
  {
    imgname: 'image',
    time: '2001.3.12',
    img: 'http://exp.cdn-hotels.com/hotels/1000000/50000/44000/43999/43999_121_z.jpg'
  }]
  export default {
    name: 'index',
    data () {
      return {
        imgdata: imgdata
      }
    }
  }
  
</script>