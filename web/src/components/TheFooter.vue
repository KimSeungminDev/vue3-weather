<template>
	<footer class="footer">
		<ul class="footer__list">
			<li class="footer__item">
				<RouterLink>
					<span class="material-symbols-outlined footer_icons"> home </span>
				</RouterLink>
			</li>
			<li>
				<RouterLink>
					<span class="material-symbols-outlined footer_icons">
						stacked_line_chart
					</span>
				</RouterLink>
			</li>
			<li>
				<RouterLink>
					<span class="material-symbols-outlined footer_icons"> search </span>
				</RouterLink>
			</li>
		</ul>
	</footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped></style>
