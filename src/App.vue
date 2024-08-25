
<template>
  <section class="h-screen w-screen overflow-hidden flex flex-col">
    <ScreenManager class="flex-1" />
    <div v-if="!controllerWindow" class="alert alert-error"><span>Open the controller from button:</span></div>
    <footer class="flex-none flex gap-4 justify-center p-2 opacity-20 hover:opacity-100">
      <button class="btn btn-sm" @click="openController">Open Controller</button>
      <button class="btn btn-sm" @click="resetData">Reset data</button>
    </footer>
    <Teleport v-if="controllerTarget" :to="controllerTarget">
      <Editor />
    </Teleport>
    <AnswerOverlay />
  </section>
</template>

<script setup>
import { onUnmounted, ref, shallowRef } from 'vue';
import { useEventListener } from '@vueuse/core';
import { STATE_STORAGE_KEY } from './composables/state';

import Editor from './editor/Editor.vue';
import ScreenManager from './ScreenManager.vue';
import AnswerOverlay from './AnswerOverlay.vue';

import stylesUrl from '@/assets/main.css?url'

const controllerWindow = shallowRef(null)
const controllerTarget = ref(null)

function closeCurrentControllerWindow(expected) {
  if (controllerWindow.value && (!expected || controllerWindow.value === expected)) {
    controllerWindow.value.close()
    controllerWindow.value = null
    controllerTarget.value = null
  }
}

function openController() {
  closeCurrentControllerWindow()

  const win = window.open('', '', 'width=1400,height=800')
  win.document.write('<html data-theme="light"><head><title>Chatrealm Feud Controller</title></head><body></body></html>')
  controllerWindow.value = win
  controllerTarget.value = win.document.body

  // Attach styles
  const styleEl = win.document.createElement('link')
  styleEl.href = stylesUrl
  styleEl.rel = 'stylesheet'
  win.document.head.appendChild(styleEl)

  win.addEventListener('beforeunload', () => {
    closeCurrentControllerWindow(win)
  })
}
onUnmounted(() => {
  closeCurrentControllerWindow()
})
useEventListener(window, 'beforeunload', () => {
  closeCurrentControllerWindow()
})

function resetData() {
  if (!confirm('Delete all data?')) {
    return
  }

  localStorage.removeItem(STATE_STORAGE_KEY)
  location.reload()
}
</script>
