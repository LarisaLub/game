import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({
	setStartGame,
	clearResult,
	isStartGame,
	users,
	setUsers,
	mode,
	setMode
}) => {
	const [userName, setUserName] = useState('');
	const _hadleSubmit = (evt) => {
		evt.preventDefault();
		setStartGame(true);
		clearResult();
		setUsers([
			...users,
			{
				name: userName,
				mode,
				date: new Date(),
				points: 0,
				status: 'start',
				id: users.length
			}
		]);
		const { gameMode, name } = evt.target;
		name.value = '';
		gameMode.value = '';
	};
	const _handleChangeMode = (evt) => {
		setMode(Number(evt.target.value));
	};
	const _handleChangeName = (evt) => {
		setUserName(evt.target.value);
	};
	return (
		<div className="form">
			<form onSubmit={_hadleSubmit}>
				<select className="gamemode" id="mode" name="gameMode" defaultValue="" onChange={_handleChangeMode}>
					<option id="option" value="" disabled>
						Pick game mode
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<input
					onChange={_handleChangeName}
					className="input"
					type="text"
					name="name"
					placeholder="Enter your name"
				/>
				<button className="play" type="submit" disabled={!userName || isStartGame || !mode}>
					PLAY
				</button>
			</form>
			<div className="message">
				<p> Message here  </p>
			</div>
		</div>
	);
};

Form.propTypes = {
	setStartGame: PropTypes.func,
	isStartGame: PropTypes.bool,
	users: PropTypes.array,
	setUsers: PropTypes.func,
	mode: PropTypes.number,
	setMode: PropTypes.func
};

export default Form;
