<script setup>
const state = reactive({
  tasks: [
    { title: 'Learn Nuxt', done: false },
    { title: 'Learn Vue', done: false },
    { title: 'Learn TypeScript', done: false },
  ],
  createInput: ''
})

function addTask() {
  if (!state.createInput) return

  state.tasks.push({
    title: state.createInput,
    done: false
  })
  state.createInput = ''
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Your tasks for today</h1>
    <br />
    <div>
      <label class="label">
        <span class="label-text">New task</span>
      </label>
      <form @submit.prevent="addTask">
        <input v-model="state.createInput" class="input input-bordered input-primary" placeholder="e.g. teach stuff" />
      </form>
    </div>
    <br />
    <div class="flex flex-col gap-3">
      <div v-for="task in state.tasks" class="bg-primary-content/50 p-3 rounded-md flex items-center gap-4">
        <input type="checkbox" v-model="task.checked" class="checkbox" />
        <span>
          {{ task.title }}
        </span>
      </div>
    </div>
  </div>
</template>
