import { defineStore } from 'pinia';
import axios from 'axios';

export interface task {
  id: number;
  title: string;
  is_done: boolean;
}

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as task[],
  }),
  actions: {
    async fetchTasks() {
      const res = await axios.get('/api/tasks');
      this.tasks = res.data;
    },
    async addTask(title: string) {
      console.log('in')
      const res = await axios.post('/api/tasks', { title });
      this.tasks.push(res.data);
    },
    async updateTask(task: task) {
      const res = await axios.put(`/api/tasks/${task.id}`, task);
      const index = this.tasks.findIndex(t => t.id === task.id);
      this.tasks[index] = res.data;
    },
    async deleteTask(id: number) {
      await axios.delete(`/api/tasks/${id}`);
      this.tasks = this.tasks.filter(t => t.id !== id);
    }
  }
});
