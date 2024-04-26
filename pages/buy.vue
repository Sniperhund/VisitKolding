<script setup>
const route = useRoute()

console.log(route.query)
</script>

<template>
	<Nav />

	<section class="limit-width">
		<img :src="route.query.imgUrl" />

		<div>
			<h2>{{ route.query.title }}</h2>
		</div>
	</section>

	<Footer />
</template>

<style scoped>
section {
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	img {
		object-fit: contain;
		width: 100%;
	}
}
</style>
