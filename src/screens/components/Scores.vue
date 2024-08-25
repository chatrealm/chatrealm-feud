<template>
	<div class="grid grid-cols-[1fr_10%_1fr] grid-rows-1 gap-[10%] justify-center items-center px-[10%]">
		<div style="grid-row: 1; grid-column: 2;">
			<div v-if="activeQuestion" class="bg-base-content text-base-200 aspect-square text-[3vw] rounded-full flex justify-center items-center">
				<TransitionNumber :value="activeQuestion.pointsUp" />
			</div>
		</div>

		<TeamScore v-for="team in state.teams" :key="team.id" :team="team" class="flex-1" />
	</div>

</template>

<script setup>
import { state, activeQuestion } from '@/composables/state';
import TransitionNumber from '@/components/TransitionNumber.vue';
import TeamScore from './TeamScore.vue';


</script>
