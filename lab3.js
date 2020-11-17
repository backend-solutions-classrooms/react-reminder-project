// * Production start
// import '../code/node_modules/@testing-library/jest-dom'
// import * as React from '../code/node_modules/react'
// import { render, fireEvent, screen } from '../code/node_modules/@testing-library/react'
// import App from '../code/src/App'
// import List from '../code/src/List'
// * Production end

// * Development start
import '../fcc-react-project-one-at-a-time/node_modules/@testing-library/jest-dom'
import * as React from '../fcc-react-project-one-at-a-time/node_modules/react'
import {
	render,
	fireEvent,
	screen
} from '../fcc-react-project-one-at-a-time/node_modules/@testing-library/react'
import App from '../fcc-react-project-one-at-a-time/src/App'
import List from '../fcc-react-project-one-at-a-time/src/List'
// * Development end

test('Your App.jsx should now show "5 Birthdays Today" where "5" comes from the length of items imported at top', () => {
	render(<App />)
	screen.getByText(/^5 Birthdays Today$/i)
})

test('all people', () => {
	render(<App />)
	screen.getByText('Bertie Yates')
	screen.getByText('Hester Hogan')
	screen.getByText('Larry Little')
	screen.getByText('Sean Walsh')
	screen.getByText('Lola Gardner')
})

test('people prop in list', () => {
	render(
		<List
			people={[
				{
					id: 0,
					name: 'Mehul Mohan',
					age: 22,
					image:
						'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'
				}
			]}
		/>
	)
	screen.getByText('Mehul Mohan')
})
