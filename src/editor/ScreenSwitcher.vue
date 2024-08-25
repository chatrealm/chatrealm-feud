<template>
	<div class="p-4">
		<p class="mb-4">Screen switcher:</p>
		<button
			class="btn btn-block"
			:class="{'btn-success': state.activeScreen === 'idle'}"
			@click="switchScreen('idle')"
		>Idle</button>
		<button
			class="btn btn-block"
			:class="{'btn-success': state.activeScreen === 'question'}"
			@click="switchScreen('question')"
		>Question</button>
	</div>
</template>

<script setup>
import { state } from '@/composables/state';

function switchScreen(screen) {
	console.log('screen', screen)
	state.value.activeScreen = screen
}
</script>
