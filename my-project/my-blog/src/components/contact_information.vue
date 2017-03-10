<template>
	<div class="contact-information">
		<img v-lazy="wechat" style="width: 200px" />
		<h5>扫一扫，加微信</h5>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'contact-information',
		data(){
			return{
				wechat:'/static/images/wechat.png'
			}
		}
	}
</script>