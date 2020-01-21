import React from 'react';
import PropTypes from 'prop-types';
import './Place.css';

const PlacePlay = ({ listPosition, result, setResult, currentResult }) => {
	const _handleClick = (index) => {
		if (!result[index] && currentResult === index) {
			const newList = { ...result, [index]: true };
			setResult(newList);
		}
	};

	let cells = [];
	for (let i = 0; cells.length < 25; i++) {
		cells[i] = i;
	}

	return (
		<div className="operation-button-play">
			{cells.map((_) => {
				let statusName = '';
				const status = result[_];
				if (status) {
					statusName = ' green'
				}
				if (listPosition[_] && !result[_]) {
					statusName = ' red';
				}
				if (currentResult === _ && !result[_]) {
					statusName = ' blue';
				}
				return (
					<button
						className={`cell${statusName}`}
						key={_}
						onClick={() => _handleClick(_)}
					/>
				);
			})}
		</div>
	);
};

PlacePlay.propTypes = {
	listPosition: PropTypes.object,
	result: PropTypes.object,
	setResult: PropTypes.func,
	currentResult: PropTypes.number
};

export default PlacePlay;
