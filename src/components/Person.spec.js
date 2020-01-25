// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
// NOTE: It is required if you want to use .toBeInTheDocument() function
require('@testing-library/jest-dom/extend-expect')

// TODO: can not use `import { render, fireEvent } from '@testing-library/svelte'`
const { render } = require('@testing-library/svelte')
const Person = require('./Person')

test('shows 👱‍♂️ for MALE gender', () => {
  const { getByText } = render(Person, { gender: 'MALE', name: 'male' })

  expect(getByText('👱‍♂️')).toBeInTheDocument()
  expect(getByText('male')).toBeInTheDocument()
})

test('shows 👱‍♀️ for FEMALE gender', () => {
  const { getByText } = render(Person, { gender: 'FEMALE', name: 'shemale' })

  expect(getByText('👱‍♀️')).toBeInTheDocument()
  expect(getByText('shemale')).toBeInTheDocument()
})
