<template>
	<div>
		<div class="flex flex-row gap-4">
			<label class="flex-1 form-control w-full">
				<div class="label">
					<span class="label-text">Question</span>
				</div>
				<input type="text" class="input input-bordered w-full" v-model="question.text">
			</label>
			<label class="flex-initial form-control w-32">
				<div class="label">
					<span class="label-text">Multiplier</span>
				</div>
				<input type="number" class="input input-bordered w-full" min="1" v-model="question.multiplier">
			</label>
			<label class="flex-initial form-control w-32">
				<div class="label">
					<span class="label-text">Points up</span>
				</div>
				<input type="number" class="input input-bordered w-full" min="1" v-model="question.pointsUp">
			</label>
		</div>

		<div class="mt-8">
			<div class="overflow-x-auto">
				<table class="table">
					<thead>
						<tr>
							<th>Answer</th>
							<th class="w-32">Score</th>
							<th class="w-16">Revealed</th>
							<th class="w-16">Answer</th>
							<th class="w-16"></th>
						</tr>
					</thead>
					<tbody v-if="question.answers.length > 0">
						<tr v-for="(answer, i) in question.answers" :key="i">
							<td><input type="text" class="input w-full" v-model="answer.text" placeholder="Answer text"></td>
							<td><input type="number" class="input w-full" v-model="answer.score" min="0"></td>
							<td><input type="checkbox" class="checkbox" v-model="answer.revealed" @input="visibleChanged" /></td>
							<td><button class="btn" :class="{'btn-primary': !answer.revealed}" @click="scoreAnswer(i)">Answer</button></td>
							<td><button class="btn text-red-500" @click="deleteAnswer(i)">X</button></td>
						</tr>
					</tbody>
					<tbody v-else>
						<tr>
							<td colspan="5" class="text-center text-neutral">No answers</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>
								<button class="btn" @click="addAnswer">Add answer</button>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>

	</div>
</template>

<script setup>
import { triggerSound } from '@/composables/state';

const props = defineProps({
	question: Object
})

function addAnswer() {
	props.question.answers.push({
		text: '',
		score: 0,
		revealed: false
	})
}

function deleteAnswer(i) {
	props.question.answers.splice(i, 1)
}

function scoreAnswer(i) {
	const {question} = props
	const answer = question.answers[i]
	if (answer) {
		question.pointsUp += question.multiplier * answer.score
		answer.revealed = true
		triggerSound('correct')
	}
}

function visibleChanged(e) {
	if (e.target.checked) {
		triggerSound('correct')
	}
}
</script>