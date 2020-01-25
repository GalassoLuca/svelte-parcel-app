<script>
  const { getPeople } = require('../graphql/getPeople')
  let name = ''
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
  {JSON.stringify(result.data.allPersons, null, 2)}
{:catch error}
  Error: {error}
{/await}