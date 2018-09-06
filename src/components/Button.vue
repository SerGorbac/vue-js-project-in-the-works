<template>
	<div class="button">
		<button class="button__sbutton">
			<slot></slot>
		</button>
	</div>
</template>
<script>
export default {
	name: 'Button'
}
</script>
<style lang="scss">
	.button {
		&__sbutton {
			background-color: #3252E5;
			color: white;
			height: 48px;
			min-width: 170px;
			font-size: 14px;
			text-transform: uppercase;
			border-radius: 6px;
			transition: .2s ease;
			opacity: 1;
			&:hover {
				cursor: pointer;
			}
		}
	}
</style>