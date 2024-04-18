<script setup>
const carouselRef = ref(null)
</script>

<template>
	<Header imgUrl="/kolding-hus.jpg" title="Kolding" />
	<section id="news" class="limit-width">
		<carousel
			ref="carouselRef"
			:items-to-show="1"
			wrap-around
			autoplay="2500"
		>
			<slide :key="1">
				<NewsCard
					imgUrl="/kolding-hus.jpg"
					title="Kolding hus brænder"
					description="Kolding hus er gået i brand efter elektrisk fejl"
				/>
			</slide>
			<slide :key="2">
				<NewsCard
					imgUrl="/koncert.jpg"
					title="Lokal koncert i Kolding"
					description="Lokale artister holder gratis koncert i kolding"
				/>
			</slide>

			<template #addons>
				<pagination />
			</template>
		</carousel>

		<Icon
			name="i-material-symbols-chevron-right-rounded"
			color="black"
			class="right btn"
			@click="carouselRef.next()"
		/>
		<Icon
			name="i-material-symbols-chevron-left-rounded"
			color="black"
			class="left btn"
			@click="carouselRef.prev()"
		/>
	</section>
	<Footer />
</template>

<style scoped>
#news {
	height: 512px;
	margin-top: 50px;
	margin-bottom: 50px;

	position: relative;
}

.btn {
	position: absolute;
	font-size: 4.8rem;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
}

.right {
	right: -50px;
}

.left {
	left: -50px;
}
</style>
