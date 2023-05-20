import React, { useEffect, useState } from 'react'
import IconDice from '../assets/Icon-dice'
import classes from './Card.module.css'
import Pattern from '../assets/Pattern-divider-desktop.svg'

const Card = () => {
	const [advice, setAdvice] = useState({ id: null, text: null })
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false)
	const fetchAdviceHandler = async () => {
		try {
			const response = await fetch('https://api.adviceslip.com/advice')
			if (!response.ok) {
				throw new Error('Failed to fetch advice.')
			}
			const { slip } = await response.json()
			setAdvice({ id: slip.id, text: slip.advice })
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			setError(true)
		}
	}

	useEffect(() => {
		fetchAdviceHandler()
	}, [])

	return (
		<div className={classes.container}>
			{error ? (
				<p className={classes.error}>Failed to fetch advice.</p>
			) : (
				<>
					<h1>advice #{advice.id}</h1>
					{isLoading ? <p>Loading advice...</p> : <p>{advice.text}</p>}
					<img src={Pattern} alt="Pattern" />
				</>
			)}

			<button onClick={fetchAdviceHandler}>
				<IconDice className={classes['icon-dice']} />
			</button>
		</div>
	)
}

export default Card
