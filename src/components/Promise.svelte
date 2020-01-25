<script>
  import Person from "./Person.svelte"

  const { getPeople } = require('../graphql/getPeople')

  let name = 'lu'
  $: people = getPeople(name)
</script>

<div class="pure-form pure-form-stacked">
  <legend>Filter Star Wars people by the given name</legend>

  <label for="name">Name</label>
  <input type="text"  placeholder="Name" bind:value={name}>
</div>

{#await people}
  Loading...
{:then result}
  {#each result.data.people as person}
    <Person {...person} />
  {/each}
{:catch error}
  Error: {error}
{/await}
