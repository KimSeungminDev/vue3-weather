<template>
	<article class="forecast">
		<!-- 시간별 예보 -->
		<section class="forecast__today">
			<strong class="forecast__title">시간별</strong>
			<ul class="week__list">
				<!-- 시간별 예보 상세 아이템 -->
				<li class="week__list__item">
					<span>9시</span>
					<img src="@/assets/images/icons/hail.png" alt="" class="week_icons" />
					<span>18°</span>
				</li>
			</ul>
		</section>
		<!-- 중기 예보 -->
		<section class="forecast__week">
			<strong class="forecast__title">중기예보</strong>
			<ul class="forecast__weekList">
				<!-- 중기 예보 상세 아이템 -->
				<li class="forecast__weekListItem">
					<div class="forecast__itemLeft">
						<strong class="forecast__day">월요일</strong>
						<span class="forecast__date">2024.07.01</span>
					</div>
					<div class="forecast__itemMiddle">
						<strong class="forecast__tmp">32°</strong>
					</div>
					<div class="forecast__itemRight">
						<img
							src="@/assets/images/icons/hail.png"
							alt=""
							class="forecast__weekListImg"
						/>
					</div>
				</li>
			</ul>
		</section>
	</article>
</template>

<script setup></script>

<style lang="scss" scoped></style>
