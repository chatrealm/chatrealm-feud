import { createEventHook, useStorage } from '@vueuse/core';
import { computed } from 'vue';

export const STATE_STORAGE_KEY = 'chatrealm-feud:state'

export const state = useStorage(
	STATE_STORAGE_KEY,
	() => ({
		format: 1,
		activeScreen: 'idle',
		activeTeam: 0,
		teams: [{id: 1, name: 'team1', score: 0}, {id: 2, name: 'team2', score: 0}],
		shownQuestion: null,
		questions: [],
	}),
	localStorage,
	{
		mergeDefaults: true,
	}
)

export const activeQuestion = computed(() => {
	const {activeQuestion} = state.value
	if (activeQuestion !== null) {
		return state.value.questions.find(({id}) => id === activeQuestion)
	}
})

const soundBus = createEventHook()
export const onSoundTrigger = soundBus.on
export const triggerSound = soundBus.trigger

const wrongBus = createEventHook()
export const onWrongAnswer = wrongBus.on
export const triggerWrongAnswer = wrongBus.trigger
