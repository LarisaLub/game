import React from 'react'
import PropTypes from 'prop-types'
import './Place.css';

const PlacePlay = ({ listPosition }) => {
    const handleClick = () => { }
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    return (
        <div className="operation-button-play">
            {values.map(_ => {
                const name = listPosition[_] ? " red" : " blue"
                return <button className={`cell${name}`} key={_} onClick={() => handleClick(_)}></button>
            })}

        </div>

    )
}

PlacePlay.propTypes = {
    handleClick: PropTypes.func
}

export default PlacePlay