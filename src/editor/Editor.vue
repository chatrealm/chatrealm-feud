<template>
	<div class="flex w-screen h-screen overflow-hidden">
		<div class="basis-64 overflow-y-auto">
			<ScreenSwitcher />
		</div>
		<div class="flex-1 flex flex-col overflow-hidden">
			<Teams />
			<Questions class="flex-1" />
		</div>
	</div>
</template>

<script setup>
import ScreenSwitcher from './ScreenSwitcher.vue';
import Teams from './Teams.vue';
import Questions from './Questions.vue';
</script>
