<template>
	<div class="px-2 py-4 overflow-y-scroll">
		<span class="uppercase">Questions</span>

		<div v-if="activeQuestion" class="mt-4">
			<div class="my-4"><a class="link" @click="viewQuestion(null)">Back to list</a></div>
			<QuestionEditor :question="activeQuestion" />
		</div>
		<div v-else class="mt-8">
			<div class="overflow-x-auto">
				<table class="table">
					<thead>
						<tr>
							<th>Question</th>
							<th class="w-16"></th>
						</tr>
					</thead>
					<tbody v-if="state.questions.length > 0">
						<tr v-for="question in state.questions" :key="question.id">
							<td><a class="link" @click="viewQuestion(question.id)">{{ question.text || '(empty)' }}</a></td>
							<td><button class="btn text-red-500" @click="deleteQuestion(question.id)">X</button></td>
						</tr>
					</tbody>
					<tbody v-else>
						<tr>
							<td colspan="2" class="text-center text-neutral">No questions</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>
								<button class="btn" @click="addQuestion">Add question</button>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
import { nanoid } from 'nanoid';
import { state, activeQuestion } from '@/composables/state';

import QuestionEditor from './Question.vue';

function addQuestion() {
	const id = nanoid()
	state.value.questions.push({
		id,
		text: '',
		multiplier: 1,
		pointsUp: 0,
		answers: [],
	})
	state.value.activeQuestion = id
}

function viewQuestion(id) {
	state.value.activeQuestion = id
}

function deleteQuestion(targetId) {
	const i = state.value.questions.findIndex(({id}) => id === targetId)
	if (i > -1) {
		state.value.questions.splice(i, 1)
	}
}
</script>
