# Description
Basic Svelte App

## Usage
Install dependences with `npm install` and run the server with `npm start`

## Resources
https://swapi.graph.cool/
https://svelte.dev/tutorial

# Dev Requirements
[ ] support sass
[ ] clear and easy to maintainance
[ ] easy to write test

## Goals
[ ] Create different components
[ ] Create e clear file structure
[ ] Make an api call

## Issues

### require()
Can not use require for components

OK:  import Title from "./components/Title.svelte"
KO:  const Title = require('./Title.svelte')

### sass/scss
With Parcel it is not easy to support sass and have the same Svelte behaviour
