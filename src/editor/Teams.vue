<template>
	<div class="px-2 py-4">
		<span class="uppercase">Teams</span>
		<div class="flex flex-row">
			<div class="flex-1 flex flex-col">
				<div v-for="team in state.teams" :key="team.id" class="flex-1 basis-2/5 flex flex-row">
					<input type="text" v-model="team.name" class="input flex-1 basis-3/5">
					<input type="number" v-model="team.score" class="input flex-1 basis-1/5">
					<button class="btn flex-1 basis-1/5" @click="addPointsTo(team.id)">Add points</button>
				</div>
			</div>
			<div key="score-holder" class="flex-none">
				<div class="stat">
					<div class="stat-title">Question points</div>
					<div class="stat-value">{{ activeQuestion ? activeQuestion.pointsUp : 'NoQ' }}</div>
				</div>
			</div>
			<div key="wrong-buttons" class="flex-none">
				<button class="btn text-red-500" @click="wrongAnswer(1)">X</button>
				<button class="btn text-red-500" @click="wrongAnswer(2)">X</button>
				<button class="btn text-red-500" @click="wrongAnswer(3)">X</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { state, activeQuestion, triggerWrongAnswer, triggerSound } from '@/composables/state';

function addPointsTo(teamId) {
	console.log('addPoints', teamId, activeQuestion.value);
	if (!activeQuestion.value) {
		return
	}

	const team = state.value.teams.find(({id}) => id === teamId)
	if (team) {
		team.score += activeQuestion.value.pointsUp
	}
}

function wrongAnswer(count) {
	triggerWrongAnswer(count)
	triggerSound('wrong')
}
</script>
