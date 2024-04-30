<template>
	<Nav />
	<section>
		<form class="limit-width">
			<div class="jeg-gider-ikke-livet-mere">
				<label for="name">Navn</label>
				<input type="text" id="name" name="name" required placeholder="Fister Løgsovs">
			</div>
			<div class="jeg-gider-ikke-livet-mere">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required placeholder="fister-løgsovs@gmail.dk">
			</div>
			<div class="jeg-gider-ikke-livet-mere">
				<label for="avatar">Vælg fil</label>
				<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />			</div>
			<div class="jeg-gider-ikke-livet-mere">
				<label for="message">Besked</label>
				<textarea id="message" name="message" rows="6" required placeholder="Besked"></textarea>
			</div>


			<label for="gender">Køn</label>
			<div id="gender-select">
				<div>
					<input type="radio" id="gender1" name="drone" value="skruetrækker" checked />
					<label for="gender1">Skruetrækker</label>
				</div>

				<div>
					<input type="radio" id="gender2" name="drone" value="vaskemaskine" />
					<label for="vaskemaskine">Vaskemaskine</label>
				</div>

				<div>
					<input type="radio" id="nuh-Uh" name="drone" value="nej" />
					<label for="nuh-uh">Nuh-Uh</label>
				</div>
			</div>

			<button type="submit" class="w-full mt-5">Send</button>

		</form>
	</section>

	<Footer />
</template>

<style scoped>
	.jeg-gider-ikke-livet-mere {
		width: 100%;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5rem 0;
		gap: 1rem;
	}

	label {
		color: black;
		font-weight: 600;
		font-size: 1.6rem;
		opacity: 60%;
		text-align: left;
		width: 100%;
	}

	input, textarea {
		background-color: whitesmoke;
		width: 100%;
		border-radius: 5px;
		padding: 1rem;
		color: black;
	}

	button {
		align-self: flex-start;
		padding: 1rem 2rem;
		background-color: var(--footer-bottom-bg-color);
		border-radius: 5px;
		font-weight: bold;
	}

	#gender-select {
		display: flex;
		gap: 1rem;
		font-size: 1.5rem;
		width: 100%;
		justify-content: space-between;
}

	#gender-select label {
		font-size: 1.5rem;
		min-width: 100px;
	}

	#gender-select div {
		display: flex;
		align-items: center;
		gap: 10px;
	}


</style>
