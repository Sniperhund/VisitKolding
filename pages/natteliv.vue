<template>
	<Header imgUrl="/kø.jpeg" title="Natteliv" />

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

	<section class="image-text-mix limit-width">
		<article>
			<div>
				<h3>Botanisk Have i Kolding</h3>
				<p>
					Geografisk Have er en 14 hektar stor, botanisk have, hvor
					det geografiske relaterer sig til, at træer, buske og urter
					er plantet sammen efter oprindelsesland.
				</p>
				<p>
					Grundlæggeren Aksel Olsen købte jorden og startede stedet
					som planteskole i 1918. Han havde en stor interesse for
					planter fra hele verden og især fra Østasien. Han testede om
					6000 planter kunne klare sig i vores danske klima og i dag
					er ca. 2000 af dem tilbage i haven. Der findes områder med
					planter fra Kina, Japan, Nordamerika og Europa. Desuden
					findes en række temahaver, et stort Væksthus, legepladser
					samt en populær dyrefold med klappe-geder, høns og kaniner.
				</p>

				<br />
				<h3>Inspirerende haver</h3>
				<p>
					Lad dig inspirere af Naturhaven, Krydderurtehaven, Den
					Økologiske Køkkenhave, Staudehaven og mange andre dejlige
					områder. Den prisbelønnede Rosenhave er især en fantastisk
					duftoplevelse om sommeren med over 5000 moderne roser. I
					Rosariet kan du gå på opdagelse i både historiske og vilde
					roser. I Syvdalen venter spændende og mere vilde
					natureventyr med grotter, bæk og kvidrende fuglesang. Følger
					du den 1,8 km lange Hjertesti med fuglesang, vil du også
					opleve det rige fugleliv, som er med til at give stedet en
					helt særlig stemning.
				</p>
			</div>
			<img src="/natteliv.jpg" />
		</article>
		<article>
			<img src="/by.JPG" />
			<div>
				<h3>Tag børene med</h3>
				<p>
					Haven er et mangfoldigt sted, med plads til gæster i alle
					aldre. Mange bruger Geografisk Have som mødested eller som
					et grønt åndehul. For børn og unge er det særligt populært
					at besøge Havens legepladser, Bambuslunden, Grotterne og
					Dyrefolden med klappegeder, kaniner, høns, klippeegern,
					ponyer og Havens kat.
				</p>
			</div>
		</article>
	</section>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.7681166285765!2d9.473520288784853!3d55.490433278835965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c9f7a5af0cf29%3A0x3047dba13db773ed!2sDen%20Engelske%20Pub%20-%20You&#39;ll%20Never%20Walk%20Alone!5e0!3m2!1sda!2sdk!4v1714074675485!5m2!1sda!2sdk"
		width="600"
		height="450"
		style="border: 0; width: 100%"
		allowfullscreen
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>
	<Footer />
</template>

<style scoped>
body {
	font-family: "Helvetica Neue";
}

img {
	object-fit: cover;
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
