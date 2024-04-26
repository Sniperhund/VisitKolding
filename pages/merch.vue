<template>
	<Header imgUrl="/webshop.jpg" title="Webshop" />

	<article class="beskrivelse">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, vitae
		porro doloribus harum, quae ipsa saepe sequi officiis rerum voluptatibus
		deleniti laudantium, distinctio incidunt! Adipisci perferendis
		repudiandae a architecto, laudantium modi. Minima obcaecati deserunt
		eaque nihil consequatur veniam, fugiat cumque voluptatibus perferendis
		saepe nam impedit cupiditate amet quaerat iusto doloribus!
	</article>

	<section class="limit-width">
		<ShopItem
			v-for="n in 6"
			:key="n"
			imgUrl="tshirt.jpeg"
			title="T-Shirt"
			description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			price="100"
		/>
	</section>

	<Footer />
</template>

<style scoped>
section {
	margin-top: 60px;
	margin-bottom: 60px;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 25px;
}
</style>
