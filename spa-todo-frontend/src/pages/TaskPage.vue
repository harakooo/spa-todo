<template>
  <div>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add Task" />
    <ul>
      <li v-for="Task in Tasks" :key="Task.id">
        <input type="checkbox" v-model="Task.is_done" @change="updateTask(Task)" />
        {{ Task.title }}
        <button @click="deleteTask(Task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useTaskStore } from '../stores/TaskStore';

const store = useTaskStore();
const newTask = ref('');

const addTask = async () => {
  if (!newTask.value) return;
  await store.addTask(newTask.value);
  newTask.value = '';
};

const updateTask = async (Task: any) => {
  await store.updateTask(Task);
};

const deleteTask = async (id: number) => {
  await store.deleteTask(id);
};

onMounted(() => {
  store.fetchTasks();
});

const Tasks = store.tasks;
</script>
