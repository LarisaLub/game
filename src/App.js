import React, { useState, useEffect, useRef } from 'react';
import PlacePlay from './components/Display/PlacePlay';
import Border from './components/BorderLeader/Border';
import Form from './components/Display/Form';
import random from './utils/random';

import './App.css';

function App() {
	const timer = useRef(false);
	const [ mode, setMode ] = useState(0);
	const [ users, setUsers ] = useState([]);
	const [ isStartGame, setStartGame ] = useState(false);
	const [ listPosition, setListPosition ] = useState({});
	const [ result, setResult ] = useState({});
	const [ currentResult, setCurrentResult ] = useState(null);

	const _clearResult = () => {
		setListPosition({});
		setResult({});
	};

	useEffect(
		() => {
			const total = Object.keys(listPosition).length;
			if (isStartGame && total < 25) {
				timer.current = setTimeout(
					(list) => {
						const index = random(list);
						setCurrentResult(index);
						const newList = { ...list, [index]: true };
						setListPosition(newList);
					},
					(3 - mode * 0.5) * 1000,
					listPosition
				);
				return;
			}
		},
		[ isStartGame, listPosition ]
	);
	useEffect(
		() => {
			const total = Object.keys(listPosition).length;
			if (total === 25) {
				setListPosition({});
				setResult({});
				let newUserData = users.slice(0, users.length);
				let index;
				newUserData.forEach((_, i) => {
					if (_.status === 'start') {
						index = i;
					}
				});
				for (let key in result) {
					if (result[key]) {
						newUserData[index].points += newUserData[index].mode;
					}
				}
				newUserData[index].status = 'end';
				setUsers([ ...newUserData ]);
				setStartGame(false);
				setCurrentResult(null);
			}
		},
		[ listPosition, users ]
	);
	useEffect(() => window.clearInterval(timer.current), []);
	return (
		<div className="container flex_box">
			<div className="col">
				<div className="form">
					<Form
						isStartGame={isStartGame}
						setStartGame={setStartGame}
						setUsers={setUsers}
						mode={mode}
						setMode={setMode}
						users={users}
						clearResult={_clearResult}
					/>
				</div>

				<div className="place-play">
					<PlacePlay
						listPosition={listPosition}
						setListPosition={setListPosition}
						result={result}
						setResult={setResult}
						currentResult={currentResult}
					/>
				</div>
			</div>

			<div className="col">
				<Border users={users} />
			</div>
		</div>
	);
}

export default App;
