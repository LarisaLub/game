import React from 'react'
import PropTypes from 'prop-types'
import './Place.css';

const PlacePlay = ({ handleClick, children }) => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    return (
        <div className="operation-button-play">
            {values.map(_ => (<button className="cell" key={_} onClick={() => handleClick(_)}>{_}</button>))}
            {children}
        </div>

    )
}

PlacePlay.propTypes = {
    handleClick: PropTypes.func
}

export default PlacePlay