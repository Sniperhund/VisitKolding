<script setup>
const props = defineProps({
	title: String,
	imgUrl: String,
	contain: {
		type: Boolean,
		default: false,
	},
	showTitle: {
		type: Boolean,
		default: true,
	},
})

function getStyle() {
	const size = props.contain == true ? "contain" : "cover"

	return (
		"background-image: url('" +
		props.imgUrl +
		"'); background-size: " +
		size +
		";"
	)
}
</script>

<template>
	<Nav />
	<header :style="getStyle()">
		<div class="title-container" v-if="props.showTitle">
			<p>{{ title }}</p>
		</div>
	</header>
</template>

<style scoped>
header {
	background-position: center;
	background-repeat: no-repeat;

	position: relative;
	width: 100%;
	height: 90vh;
	z-index: -1;

	div {
		height: 100%;
	}

	.title-container {
		position: absolute;
		background-color: white;
		color: black;
		height: 100px;
		min-width: 600px;
		display: flex;
		align-items: center;
		font-size: 4.5rem;
		font-weight: bold;
		padding: 33px;
		bottom: 0;
		left: 145px;
	}

	#header-border {
		position: absolute;
		bottom: -1px;
		width: 100%;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 80%;
	}
}
</style>
