<template>
	<div>
		<NuxtPage />
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	--text-color: rgb(88, 88, 88);
	--footer-bg-color: #333;
	--footer-title-color: #f4f0ff;
	--footer-bottom-bg-color: #b51817;

	font-family: "Noto Sans", sans-serif;
	font-size: 62.5%;
	color: white;
}

body {
	font-size: 1.6rem;
}

h1 {
	font-size: 7.2rem;
}

h2 {
	font-size: 3.2rem;
}

h3 {
	font-size: 2rem;
	font-weight: 500;
}

a {
	text-decoration: none;
	line-height: 1.3;
	font-weight: 500;
	color: var(--text-color);
}

.limit-width {
	max-width: 1200px;
	margin: 0 auto;
}

.image-text-mix {
	color: black;

	display: flex;
	flex-direction: column;
	gap: 50px;
	margin-bottom: 100px;
	margin-top: 100px;

	article {
		display: grid;
		gap: 50px;

		grid-template-columns: 1fr 1fr;

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 15px;

			height: 100%;

			a {
				color: var(--footer-bottom-bg-color);
			}
		}

		img {
			width: 100%;
			height: 100%;
		}
	}
}

.beskrivelse {
	color: black;

	padding-top: 60px;

	max-width: 600px;
	margin: 0 auto;
}
</style>
