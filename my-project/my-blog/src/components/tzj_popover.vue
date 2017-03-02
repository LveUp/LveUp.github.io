<template>
	<div class="tzj-popover">
		<el-popover
		ref="popover1"
		placement="bottom"
		title="标题"
		width="200"
		trigger="hover"
		content="">
		<slot></slot>
	</el-popover>
</div>
</template>
<script type="text/javascript">
	export default{
		name:'tzj-popover'
	}
</script>