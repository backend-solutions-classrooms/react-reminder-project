// * Production start
import '../code/node_modules/@testing-library/jest-dom'
import * as React from '../code/node_modules/react'
import { render, fireEvent, screen } from '../code/node_modules/@testing-library/react'
import App from '../code/src/App'
// * Production end

// * Development start
// import '../fcc-react-project-one-at-a-time/node_modules/@testing-library/jest-dom'
// import * as React from '../fcc-react-project-one-at-a-time/node_modules/react'
// import {
// 	render,
// 	fireEvent,
// 	screen
// } from '../fcc-react-project-one-at-a-time/node_modules/@testing-library/react'
// import App from '../fcc-react-project-one-at-a-time/src/App'
// * Development end

test('one h3 is present', () => {
	const { container } = render(<App />)
	expect(container.querySelector('h3')).toBeInTheDocument()
})

test('h3 contains correct text', () => {
	const { container } = render(<App />)
	expect(container.querySelector('h3').textContent).toEqual('0 birthdays today')
})

test('List should be rendered', () => {
	const { container } = render(<App />)
	expect(container.querySelector('h2').textContent).toEqual('list component')
})
