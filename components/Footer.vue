<template>
	<footer>
		<section class="footer-top limit-width">
			<section class="footer-info">
				<div class="footer-title">Visit Kolding</div>
				<p class="footer-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
			</section>
			<section class="footer-nav">
				<div class="footer-nav-group">
					<p class="footer-nav-group-title">Nyttige links</p>
					<ul>
						<li>
							<a
								href="/kontakt"
								aria-label="Link"
								class="footer-nav-group-item"
								>Kontakt os</a
							>
						</li>
						<li>
							<a
								href="/merch"
								aria-label="Link"
								class="footer-nav-group-item"
								>Merch</a
							>
						</li>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
					</ul>
				</div>
				<div class="footer-nav-group">
					<div class="footer-nav-group-title">Nyttige links</div>
					<ul>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
					</ul>
				</div>
				<div class="footer-nav-group">
					<div class="footer-nav-group-title">Nyttige links</div>
					<ul>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
						<li>
							<a
								href=""
								aria-label="Link"
								class="footer-nav-group-item"
								>Link</a
							>
						</li>
					</ul>
				</div>
			</section>
		</section>
		<section class="footer-bottom">
			<ul class="limit-width footer-ul">
				<li>
					<p class="footer-copyright">
						© 2024 VisitKolding All Rights Reserved.
					</p>
				</li>
				<div class="footer-legal">
					<ul>
						<li>
							<a href="#" aria-label="Privacy Policy"
								>Privacy Policy</a
							>
						</li>
						<li>
							<a href="#" aria-label="Terms of Conditions"
								>Terms of Conditions</a
							>
						</li>
					</ul>
				</div>
			</ul>
		</section>
	</footer>
</template>

<style scoped>
footer {
	background-color: var(--footer-bg-color);
	color: white;
	text-align: center;
}

a {
	text-decoration: none;
	cursor: pointer;
}

ul {
	list-style: none;
}

.footer-ul {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.footer-nav-group ul {
	display: flex;
	flex-direction: column;
	list-style: none;
	gap: 20px;
}

.footer-top {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
}

.footer-info {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.footer-nav {
	display: flex;
	width: 632px;
	gap: 7.5px;
}

.footer-nav-group {
	flex: 1;
	min-width: 168px;
}

.footer-nav-group-title {
	font-weight: 500;
	color: var(--footer-title-color);
	margin-bottom: 20px;
}

.footer-nav-group-item {
	display: block;
	transition: cubic-bezier(0.6, 0.6, 0, 1) 0.45s color;
	color: var(--footer-nav-item-color);
}

.footer-title {
	font-size: 3.2rem;
	font-weight: bold;
	text-align: left;
}

.footer-description {
	font-size: 1.6rem;
	font-weight: 300;
	text-align: left;
	max-width: 344px;
}

.footer-bottom {
	background-color: var(--footer-bottom-bg-color);
	padding: 13px 145px;
}

.footer-legal {
	display: flex;
	justify-content: space-between;
}

.footer-legal ul {
	align-items: center;
	display: flex;
	gap: 20px;
}

.footer-legal a {
	font-size: 1.3rem;
	font-weight: bold;
	color: white;
}

.footer-copyright {
	font-size: 1.3rem;
	font-weight: bold;
}
</style>
