import React from 'react'
import './styles/main.scss'
import { Button } from './components/Buttons/buttons'


class App extends React.Component {
	render = () => {
		return <div className='p-1'>
			<Button>
				User
			</Button>
		</div>
	}
}


export default App
