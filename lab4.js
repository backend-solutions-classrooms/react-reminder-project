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

test('article should be rendered', () => {
	const { container } = render(
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
	expect(container.querySelector('article')).toBeInTheDocument()
})

const person = {
	id: 0,
	name: 'Mehul Mohan',
	age: 22,
	image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'
}

test('article img should be rendered', () => {
	const { container } = render(<List people={[person]} />)
	expect(container.querySelector('article > img').getAttribute('src')).toEqual(person.image)
	expect(container.querySelector('article > img').getAttribute('alt')).toEqual(person.name)
})

test('h4  should be rendered', () => {
	const { container } = render(<List people={[person]} />)
	expect(container.querySelector('article > div > h4').textContent).toEqual(person.name)
})

test('p  should be rendered', () => {
	const { container } = render(<List people={[person]} />)
	expect(container.querySelector('article > div > p').textContent).toContain(person.age)
})
