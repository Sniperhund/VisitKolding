<script setup>
const props = defineProps({
	title: String,
	imgUrl: String,
})

function getStyle() {
	return "background-image: url('" + props.imgUrl + "');"
}
</script>

<template>
	<div
		style="background-color: white; height: 60px; position: sticky; top: 0"
	>
		<nav class="limit-width">
			<!-- Opdatere til at være det nye logo hvor at højden passer til den hvide stribe på logoet -->
			<a href="/" id="logo-btn">
				<img src="/logo.png" id="logo" />
			</a>

			<a href="/">Hjem</a>
			<a href="/designby">Kolding som designby</a>

			<Icon name="i-material-symbols-search" id="search" />
		</nav>
	</div>
	<header :style="getStyle()">
		<div>
			<main>
				<h1>{{ title }}</h1>
			</main>
		</div>
		<img src="/mountains.png" id="header-border" />
	</header>
</template>

<style scoped>
nav {
	display: flex;
	gap: 10px;

	align-items: center;

	height: 100%;

	color: black;
	z-index: 500;
}

#logo {
	height: 54px;
}

#logo-btn {
	display: flex;
	align-items: center;
	margin-right: 30px;
}

#search {
	margin-left: auto;
	font-size: 2.4rem;
	color: var(--text-color);
}

header {
	background-size: cover;

	position: relative;
	width: 100%;
	height: 95vh;
	z-index: -1;

	div {
		height: 100%;
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
