<script setup>
const props = defineProps({
	imgUrl: String,
	title: String,
	description: String,
	gridName: String,
})

function getStyle() {
	return "background-image: url('" + props.imgUrl + "');"
}
</script>

<template>
	<article :style="getStyle()">
		<div>
			<h3>{{ props.title }}</h3>
			<p>{{ props.description }}</p>
		</div>
	</article>
</template>

<style scoped>
article {
	width: 100%;
	height: 512px;

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	display: flex;
	align-items: end;
}

div {
	color: white;
	padding: 10px;
	width: 100%;
	text-align: start;

	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.75) 0%,
		rgba(0, 0, 0, 0) 100%
	);
}

h3 {
	font-size: 1.8rem;
}

p {
	font-size: 1.4rem;
}
</style>
