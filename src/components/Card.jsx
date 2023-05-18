import React from 'react'
import IconDice from '../assets/Icon-dice'

import classes from './Card.module.css'
import Pattern from '../assets/Pattern-divider-desktop.svg'
const Card = () => {
	return (
		<div className={classes.container}>
			<h1>advice</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum incidunt exercitationem ipsum nostrum
				perspiciatis et doloribus laboriosam sequi asperiores.
			</p>
			<img src={Pattern} />
			<button>
				<IconDice className={classes['icon-dice']} />
			</button>
		</div>
	)
}

export default Card
