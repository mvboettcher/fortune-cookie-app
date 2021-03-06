import React from 'react'
import fortuneCookie from 'fortune-cookie'
import style from './app.css.js'

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max))
}

const App = props => {
	const state = props.state
	const setState = props.setState

	const getFortune = () => {
		const number = getRandomInt(fortuneCookie.length - 1)
		return {
			fortune: fortuneCookie[number]
		}
	}

	return (
		<div style={style.root}>
			<h1>Fortune Cookie App</h1>
			<h3 className="mh2 ba pa4 br2 bg-light-blue">{state.fortune}</h3>
			<button
				style={style.button}
				onClick={() => {
					setState(getFortune)
				}}
			>
				Get Fortune
			</button>
			<p className="instructions">Click button to get fortune</p>
		</div>
	)
}

export default App
