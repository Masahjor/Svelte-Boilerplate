<script>
  import { invalidate } from '$app/navigation';
  export let data;

  let newTask = '';

  async function createTask() {
    const form = new FormData();
    form.append('text', newTask);
    await fetch('?/create', { method: 'POST', body: form });
    newTask = '';
    await invalidate(); // Refresh tasks
  }

  async function updateTask(id, done) {
    const form = new FormData();
    form.append('id', id);
    form.append('done', done);
    await fetch('?/update', { method: 'POST', body: form });
    await invalidate();
  }

  async function deleteTask(id) {
    const form = new FormData();
    form.append('id', id);
    await fetch('?/delete', { method: 'POST', body: form });
    await invalidate();
  }
</script>

<h1>Tasks</h1>
<input placeholder="New task" bind:value={newTask} />
<button on:click={createTask}>Add</button>

<ul>
  {#each data.tasks as task}
    <li>
      <input type="checkbox" checked={task.done} on:change={(e) => updateTask(task.id, e.target.checked)} />
      {task.text}
      <button on:click={() => deleteTask(task.id)}>Delete</button>
    </li>
  {/each}
</ul>
