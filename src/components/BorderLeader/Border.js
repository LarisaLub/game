import React from 'react'
import PropTypes from 'prop-types'
import "./Border.css";




const Border = ({ handleClick, children }) => {
    const values = [1]
    return (
        <div className="border">

        </div>
    )
}

Border.propTypes = {
    handleClick: PropTypes.func
}

export default Border