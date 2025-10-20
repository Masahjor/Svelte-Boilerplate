<script>
  import { invalidate } from '$app/navigation';
  let email = '';
  let error = '';

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async function handleSubmit() {
    if (!validateEmail(email)) {
      error = 'Please enter a valid email address.';
      return;
    }
    error = '';
    // Submit form data here (could be a fetch to an API)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="email" bind:value={email} placeholder="Email" />
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
  <button type="submit">Submit</button>
</form>
