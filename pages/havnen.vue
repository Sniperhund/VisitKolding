<template>
	<Header imgUrl="/havnen.jpg" title="Havnen" />

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

	<main class="havn-indhold limit-width">
		<img src="/boat.jpg" class="havn-billede" />

		<section class="havn-info">
			<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
			<p>
				Etiam bibendum, eros dignissim faucibus iaculis, arcu magna
				lacinia nisi, nec consequat leo metus vel diam. Aliquam erat
				volutpat. Integer eu ornare est, eget vehicula velit. Duis eget
				feugiat erat, eu blandit nisi. Nulla efficitur felis purus, quis
				varius dui bibendum id. Aliquam euismod suscipit lectus, vel
				maximus urna malesuada eget. Etiam ac aliquet dolor. Donec in
				aliquam dui, sed venenatis enim. Maecenas gravida nunc eget leo
				bibendum, id luctus felis commodo. Aenean ornare et metus ac
				efficitur. Quisque consectetur arcu rhoncus finibus aliquet.
				Pellentesque nec nisl ut est sodales dictum. Praesent dictum
				viverra gravida. Sed tempus placerat elit sit amet fringilla.
				Cras consectetur lorem volutpat varius lacinia. Quisque sit amet
				erat lorem. Nulla eget auctor eros. Phasellus ipsum sem,
			</p>
		</section>

		<section class="havn-info">
			<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
			<p>
				Etiam bibendum, eros dignissim faucibus iaculis, arcu magna
				lacinia nisi, nec consequat leo metus vel diam. Aliquam erat
				volutpat. Integer eu ornare est, eget vehicula velit. Duis eget
				feugiat erat, eu blandit nisi. Nulla efficitur felis purus, quis
				varius dui bibendum id. Aliquam euismod suscipit lectus, vel
				maximus urna malesuada eget. Etiam ac aliquet dolor. Donec in
				aliquam dui, sed venenatis enim. Maecenas gravida nunc eget leo
				bibendum, id luctus felis commodo. Aenean ornare et metus ac
				efficitur. Quisque consectetur arcu rhoncus finibus aliquet.
				Pellentesque nec nisl ut est sodales dictum. Praesent dictum
				viverra gravida. Sed tempus placerat elit sit amet fringilla.
				Cras consectetur lorem volutpat varius lacinia. Quisque sit amet
				erat lorem. Nulla eget auctor eros. Phasellus ipsum sem,
			</p>
		</section>

		<img src="/ka.avif" class="havn-billede" />
	</main>

	<Footer />
</template>

<style scoped>
body {
	font-family: "Helvetica Neue";
}

.beskrivelse {
	color: black;
	padding: 60px 0;
	max-width: 600px;
	margin: 0 auto;
}

.havn-info {
	color: white;
	padding: 50px;
	background-color: var(--footer-bottom-bg-color);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.havn-info h3 {
	font-size: 3rem;
	line-height: 3.2rem;
	font-weight: bold;
}

.havn-info p {
	font-size: 1.8rem;
	line-height: 3.2rem;
	text-align: left;
	margin: 0 auto;
}

.havn-indhold {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 600px);
}

.havn-billede {
	object-fit: cover;
	width: 100%;
	height: 100%;
}

.havn-indhold :nth-child(1),
.havn-indhold :nth-child(2) {
	grid-column: span 1;
}

.havn-indhold :nth-child(3),
.havn-indhold :nth-child(4) {
	grid-row: span 1;
}
</style>
