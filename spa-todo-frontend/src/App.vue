<template>
  <div>
    <h1>task App</h1>

    <form @submit.prevent="add">
      <input v-model="newTitle" placeholder="新しいタスク" />
      <button type="submit">追加</button>
    </form>

    <ul>
      <li v-for="task in store.tasks" :key="task.id">
        {{ task.title }}
        <button @click="remove(task.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useTaskStore } from './stores/TaskStore';

export default defineComponent({
  setup() {
    const store = useTaskStore();
    const newTitle = ref('');
    onMounted(() => {
      store.fetchTasks();
    });

    const add = async () => {
      if (!newTitle.value.trim()) return;
      await store.addTask(newTitle.value);
      newTitle.value = '';
    };

    const remove = async (id: number) => {
      await store.deleteTask(id);
    };

    return { store, newTitle, add, remove };
  }
});
</script>
