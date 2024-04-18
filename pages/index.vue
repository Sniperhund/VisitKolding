<template>
	<header>
		<div>
			<div
				style="
					background-color: white;
					height: 60px;
					position: sticky;
					top: 0;
				"
			>
				<nav class="limit-width">
					<!-- Opdatere til at være det nye logo hvor at højden passer til den hvide stribe på logoet -->
					<a href="/" id="logo-btn">
						<img src="/logo.png" id="logo" />
					</a>

					<a href="/">Hjem</a>
					<a href="/designby">Kolding som designby</a>

					<i class="fa-solid fa-magnifying-glass" id="search"></i>
				</nav>
			</div>
			<main>
				<h1>Kolding</h1>
			</main>
		</div>
		<img src="/mountains.png" id="header-border" />
	</header>
	<section id="news"></section>
	<footer></footer>
</template>

<style scoped>
nav {
	display: flex;
	gap: 10px;

	align-items: center;

	height: 100%;

	color: black;
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
}

header {
	background-image: url("/kolding-hus.jpg");
	background-size: cover;

	position: relative;
	width: 100%;
	height: 100vh;

	margin-bottom: 500px;

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

		height: 70%;
	}
}
</style>
