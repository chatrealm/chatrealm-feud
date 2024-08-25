<template>
	<span>{{ output }}</span>
</template>

<script setup>
import { TransitionPresets, useTransition } from '@vueuse/core';
import { useTrunc } from '@vueuse/math';
import { toRefs } from 'vue';

const props = defineProps({value: Number})
const propRefs = toRefs(props)

const output = useTrunc(useTransition(propRefs.value, {
	duration: 1000,
	transition: TransitionPresets.easeInOutCubic,
}))
</script>