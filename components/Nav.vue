<template>
	<div
		style="background-color: white; height: 60px; position: sticky; top: 0"
	>
		<nav class="limit-width">
			<a href="/" id="logo-btn">
				<img src="/logo.png" id="logo" />
			</a>

			<a href="/designby">Kolding som designby</a>
			<a href="/trafik">Trafik</a>
			<a href="/geografisk-have">Geografisk Have</a>

			<a href="/havnen">Havnen</a>
			<a href="/merch">Merch</a>

			<Icon name="i-material-symbols-search" id="search" />
		</nav>
	</div>
</template>

<style scoped>
nav {
	display: flex;
	gap: 50px;

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
	margin-right: auto;
}

#search {
	font-size: 2.4rem;
	color: var(--text-color);
}
</style>
