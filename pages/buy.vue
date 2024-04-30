<script setup>
const route = useRoute()

// Magnus siger fler' billede/andre produker
</script>

<template>
	<Nav />

	<div class="container">
		<section class="limit-width info">
			<img :src="route.query.imgUrl" />

			<div class="text">
				<div>
					<h2>{{ route.query.title }}</h2>
					<p>{{ route.query.description }}</p>
					<p>
						<small>{{ route.query.price }} DKK</small>
					</p>
				</div>
				<select name="size">
					<option>Ekstra Lille</option>
					<option>Lille</option>
					<option>Medium</option>
					<option>Stor</option>
					<option>Din mor størrelse</option>
				</select>

				<a>Køb nu</a>
			</div>
		</section>
	</div>

	<Footer />
</template>

<style scoped>
.info {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	color: black;

	img {
		object-fit: contain;
		width: 100%;
	}

	h2 {
		font-weight: 500;
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
	}

	select {
		width: 50%;
		border: 1px solid black;
		border-radius: 5px;
	}

	a {
		padding: 10px;
		margin: 10px auto 0 0;
		background-color: tomato;
		border-radius: 10px;
		color: white;
		cursor: pointer;
	}
}

.container {
	height: 95vh;
	display: flex;
	align-items: center;
}
</style>
