import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/'
})

import gql from 'graphql-tag'

module.exports.getPeople = (personName = '') => client.query({
  query: gql`
    query getPeople{
      allPersons (filter: { name_contains: "${personName}" }){
        name
      }
    }`,
  })

