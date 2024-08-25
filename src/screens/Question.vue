<template>
	<div class="container mx-auto py-[5vh] flex flex-col">
		<Scores class="basis-[20vh]" />
		<Transition name="fade">
			<div v-if="activeQuestion" class="flex-1 flex flex-col items-center gap-[5vh]">
				<div class="border-icecold border-8 h-[20vh] bg-black text-[3.5vh] py-4 px-8 flex flex-col justify-center text-center font-handwriting w-full">
					<p class="line-clamp-3">{{ activeQuestion.text }}</p>
				</div>

				<div class="w-[50vw] grid gap-4 grid-cols-2 grid-rows-5 grid-flow-col">
					<div v-for="(answer, i) in activeQuestion.answers" :key="i" class="h-[6vh]" :class="{'swap-active': answer.revealed}">
						<Transition name="flip" mode="out-in">
							<div v-if="answer.revealed" key="revealed-answer" class="border-icecold border-4 w-full h-full flex">
								<div class="flex-1 bg-black py-2 px-4 flex flex-col justify-center text-center text-[2.5vh]">
									<p class="line-clamp-1">{{ answer.text }}</p>
								</div>
								<div class="flex-none w-[7vh] bg-icecold text-white text-[4vh] leading-[5vh] font-bold text-center pl-1">
									{{ answer.score }}
								</div>
							</div>
							<div v-else key="hidden-answer" class="bg-icecold w-full h-full text-white flex items-center justify-center">
								<span class="w-[5vh] h-[5vh] text-[4vh] bg-black/25 text-center rounded-full leading-[4.5vh] font-bold">{{ i + 1 }}</span>
							</div>
						</Transition>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup>
import Scores from './components/Scores.vue';
import { activeQuestion } from '@/composables/state';

</script>
