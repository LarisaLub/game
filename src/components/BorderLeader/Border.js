import React from 'react';
import PropTypes from 'prop-types';
import getDate from '../../utils/getDate';
import './Border.css';

const Border = ({ users }) => {
	return (
		<div className="border">
			<h3> Leader Board</h3>
			{users
				.sort((a, b) => b['points'] - a['points'])
				.map(({ name, date, points, status }, index) => {
					const time = getDate(date);
					return (
						<div className="container flex_box" key={index}>
							<div className="col">
								User Name: {name} {status === 'end' ? `(${points})` : ''}
							</div>

							<div className="col">Date and Time:{time}</div>
						</div>
					);
				})}
		</div>
	);
};

Border.propTypes = {
	users: PropTypes.array
};

export default Border;
