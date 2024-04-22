<script setup>
useSeoMeta({
	title: "Visit Kolding - Trafik",
})
</script>

<template>
	<Header imgUrl="/bybus.jpg" title="Trafik" />

	<section class="beskrivelse">
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit.
			Perferendis eos accusamus harum enim ipsa alias quis iure debitis?
			Reiciendis laudantium corporis dignissimos doloremque ratione
			voluptas in mollitia magnam. Incidunt consequuntur, adipisci labore
			sit earum numquam velit placeat provident at animi dignissimos iure
			in officia necessitatibus, beatae consectetur quod corrupti
			pariatur.
		</p>
	</section>

	<section class="offentligt-transport limit-width">
		<article>
			<div>
				<h2>Offentligt Transport</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quas, atque voluptatem laboriosam alias aliquam officia!
					Perferendis iusto omnis deleniti repellendus distinctio?
					Quod, illo, eius numquam doloribus, nostrum possimus
					assumenda libero deserunt porro dolorum expedita tempora
					fugit delectus. Beatae asperiores aspernatur fugit!
					Inventore necessitatibus tempora nobis.
				</p>
			</div>
			<img src="/bybus-2.jpg" />
		</article>
		<article>
			<img src="/cykel.jpg" />
			<div>
				<h2>Cykel</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quas, atque voluptatem laboriosam alias aliquam officia!
					Perferendis iusto omnis deleniti repellendus distinctio?
					Quod, illo, eius numquam doloribus, nostrum possimus
					assumenda libero deserunt porro dolorum expedita tempora
					fugit delectus. Beatae asperiores aspernatur fugit!
					Inventore necessitatibus tempora nobis.
				</p>
				<a href="https://cykelkolding.dk/udlejning-af-cykler/"
					>Lån en cykel hos Cykel Kolding</a
				>
			</div>
		</article>
	</section>

	<p class="credit">
		Alle billeder af offentligt transport er taget af Sydtrafik
	</p>
	<Footer />
</template>

<style scoped>
.credit {
	color: black;
	font-size: 1rem;
	padding-left: 5px;
}

h2 {
	font-size: 3.2rem;
}

.beskrivelse {
	color: black;

	padding: 60px 0;

	max-width: 600px;
	margin: 0 auto;
}

.offentligt-transport {
	color: black;

	display: flex;
	flex-direction: column;
	gap: 50px;
	margin-bottom: 100px;

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
</style>
