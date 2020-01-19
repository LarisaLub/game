import React from 'react';
import PropTypes from 'prop-types'
import "./Form.css";


const Form = ({ setStartGame }) => {
    const hadleSubmit = () => { setStartGame(true) }
    return (

        <div className="form">
            <form onSubmit={hadleSubmit}>
                <select id="mode" name="Pick game mode" >
                    <option>Pick game mode"</option>
                    <option>soft</option>
                </select>
                <input className="input" type="text" placeholder="Enter your name" />
                <button type="submit">PLAY</button>
            </form>
            <div className="message">
                <p> Message here </p>
            </div>

        </div >
    )
}

Form.propTypes = {
    handleClick: PropTypes.func
}

export default Form










