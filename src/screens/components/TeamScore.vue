<template>
	<div class="border-4 border-base-content">
		<div class="bg-base-content text-base-200 px-4 py-2 text-center text-[1.2vw] font-handwriting line-clamp-1">{{ props.team.name }}</div>
		<div class="px-4 py-2 text-[1.4vw] text-center line-clamp-1"><TransitionNumber :value="props.team.score" /></div>
	</div>
</template>

<script setup>
import TransitionNumber from '@/components/TransitionNumber.vue';

const props = defineProps({
	team: Object,
})

</script>
