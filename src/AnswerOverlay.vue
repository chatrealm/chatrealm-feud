<template>
	<audio :src="CORRECT_ANSWER_URL" ref="correctAnswerRef" preload="auto"></audio>
	<audio :src="WRONG_ANSWER_URL" ref="wrongAnswerRef" preload="auto"></audio>
	<div  v-if="shownCrosses" class="absolute inset-x-[10vw] inset-y-[10vh] flex flex-row gap-[10vh] justify-center items-center text-center font-bold">
		<div v-if="shownCrosses >= 1" class="border-red-500 text-red-500 border-[1.5rem] p-5 w-[1.2em] h-[30vh] text-[20vh] leading-none">X</div>
		<div v-if="shownCrosses >= 2" class="border-red-500 text-red-500 border-[1.5rem] p-5 w-[1.2em] h-[30vh] text-[20vh] leading-none">X</div>
		<div v-if="shownCrosses >= 3" class="border-red-500 text-red-500 border-[1.5rem] p-5 w-[1.2em] h-[30vh] text-[20vh] leading-none">X</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { onSoundTrigger, onWrongAnswer } from './composables/state';

import CORRECT_ANSWER_URL from '@/assets/correct-answer.mp3?url';
import WRONG_ANSWER_URL from '@/assets/wrong-answer.mp3?url';

const correctAnswerRef = ref()
const wrongAnswerRef = ref()

const shownCrosses = ref(null)

onSoundTrigger((sound) => {
	switch (sound) {
		case 'correct':
			correctAnswerRef.value?.play()
			break;
		case 'wrong':
			wrongAnswerRef.value?.play()
			break;
	}
})

onWrongAnswer((count) => {
	shownCrosses.value = count
	setTimeout(() => {
		shownCrosses.value = null
	}, 2000);
})
</script>
