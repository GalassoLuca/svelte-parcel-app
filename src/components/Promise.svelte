<script>
  const { getPeople } = require('../graphql/getPeople')
  let people = getPeople()
  let name = ''

  const handleChange = () => {
    people = getPeople(name)
  }
</script>

<div class="pure-form pure-form-stacked">
  <legend>Filter Star Wars people by the given name</legend>

  <label for="name">Name</label>
  <input type="text"  placeholder="Name" bind:value={name} on:change={handleChange}>
</div>

{#await people}
  Loading...
{:then result}
  {JSON.stringify(result.data.allPersons, null, 2)}
{:catch error}
  Error: {error}
{/await}