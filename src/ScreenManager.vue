<template>
	<main class="flex flex-col overflow-hidden text-base-content" style="--bc: 79.8% 0.1707 72.2265">
		<component :is="shownScreen" class="flex-none basis-full" />
	</main>
</template>

<script setup>
import { computed } from 'vue';
import { state } from "@/composables/state";

import IdleScreen from './screens/Idle.vue';
import QuestionScreen from './screens/Question.vue';

const shownScreen = computed(() => {
	switch (state.value.activeScreen) {
		case 'question':
			return QuestionScreen
		case 'idle':
		default:
			return IdleScreen
	}
})
</script>
