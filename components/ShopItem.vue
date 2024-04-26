<script setup>
const props = defineProps({
	imgUrl: String,
	title: String,
	description: String,
	price: String,
})
</script>

<template>
	<article>
		<img :src="props.imgUrl" />

		<div>
			<h3>{{ props.title }}</h3>
			<p>{{ props.description }}</p>
			<span>{{ props.price }} kr</span>

			<div class="grid grid-cols-2 gap-2">
				<a
					:href="
						'buy?imgUrl=' +
						props.imgUrl +
						'&title=' +
						props.title +
						'&description=' +
						props.description +
						'&price=' +
						props.price
					"
					>Køb nu</a
				>
				<a
					:href="
						'buy?imgUrl=' +
						props.imgUrl +
						'&title=' +
						props.title +
						'&description=' +
						props.description +
						'&price=' +
						props.price
					"
					>Tilføj til kurv</a
				>
			</div>
		</div>
	</article>
</template>

<style scoped>
article {
	color: black;
	text-align: center;

	div {
		padding: 0 20px;

		span {
			display: block;
		}
	}

	a {
		display: block;
		padding: 10px;
		width: 100%;
		margin: 10px auto 0;
		background-color: tomato;
		border-radius: 10px;
		color: white;
	}
}
</style>
