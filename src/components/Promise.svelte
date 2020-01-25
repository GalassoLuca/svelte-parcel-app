<script>
  import ApolloClient from 'apollo-boost'

  const client = new ApolloClient({
    uri: 'https://swapi.graph.cool/'
  })

  import gql from 'graphql-tag'

  function allPersons (personName) {
    return client.query({
      query: gql`
        query allPerson{
          allPersons (filter: { name_contains: "${personName}" }){
            name
          }
        }`,
      })
  }

  const people = allPersons()
</script>

{#await people}
  Loading...
{:then result}
  {JSON.stringify(result, null, 2)}
{:catch error}
  Error: {error}
{/await}