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

	font-family: "Montserrat", sans-serif;
	font-size: 62.5%;
	color: white;
}

body {
	font-size: 1.6rem;
}

h1 {
	font-size: 7.2rem;
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
</style>
