// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
// NOTE: It is required if you want to use .toBeInTheDocument() function
require('@testing-library/jest-dom/extend-expect')

// TODO: can not use `import { render, fireEvent } from '@testing-library/svelte'`
const { render } = require('@testing-library/svelte')
const Title = require('./Title')

test('shows proper heading when rendered', () => {
  const { getByText } = render(Title, { name: 'World' })

  expect(getByText('Hello World!')).toBeInTheDocument()
})
