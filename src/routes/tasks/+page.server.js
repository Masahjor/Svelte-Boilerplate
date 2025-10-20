// src/routes/tasks/+page.server.js
let tasks = [
  { id: 1, text: 'Learn SvelteKit', done: false },
  { id: 2, text: 'Build CRUD app', done: false }
];

// Load tasks (Read)
export function load() {
  return { tasks };
}

// Handle CRUD actions
export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const text = data.get('text');
    if (!text) return { error: 'Task text required' };
    const newTask = { id: Date.now(), text, done: false };
    tasks.push(newTask);
    return { success: true };
  },
  update: async ({ request }) => {
    const data = await request.formData();
    const id = Number(data.get('id'));
    const done = data.get('done') === 'true';
    tasks = tasks.map(t => (t.id === id ? { ...t, done } : t));
    return { success: true };
  },
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = Number(data.get('id'));
    tasks = tasks.filter(t => t.id !== id);
    return { success: true };
  }
};
