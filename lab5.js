// * Production start
import '../code/node_modules/@testing-library/jest-dom'
import * as React from '../code/node_modules/react'
import { render, fireEvent, screen } from '../code/node_modules/@testing-library/react'
import App from '../code/src/App'
import List from '../code/src/List'
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
// import List from '../fcc-react-project-one-at-a-time/src/List'
// * Development end

test('clear all button', () => {
	render(<App />)
	screen.getByText('Clear All')
})

test('all people', () => {
	render(<App />)
	screen.getByText('Bertie Yates')
	screen.getByText('Hester Hogan')
	screen.getByText('Larry Little')
	screen.getByText('Sean Walsh')
	screen.getByText('Lola Gardner')
})

test('clear all button', () => {
	render(<App />)
	screen.getByText('Bertie Yates')
	screen.getByText('Hester Hogan')
	screen.getByText('Larry Little')
	screen.getByText('Sean Walsh')
	screen.getByText('Lola Gardner')
	fireEvent.click(screen.getByText('Clear All'))

	let fail = false
	try {
		screen.getByText('Bertie Yates')
		fail = true
	} catch (err) {
		// okie
	}

	if (fail) throw 'fail'
})
