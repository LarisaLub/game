import React from 'react';
import PropTypes from 'prop-types'
import "./Form.css";


const Form = () => {

    return (
        <div className="form">
            <div className="horiz">
                <div className="mode">
                    <input type="text"
                        value="Pick game mode"
                    />
                    <select id="mode" name="Pick game mode" >
                        <option>hard</option>
                        <option>soft</option>
                    </select>
                </div>
                <div className="name">
                    <input type="text"
                        data-type="Enter your name"
                        value="Enter your name"
                    />

                </div>
                <div className="button">
                    <button type="submit">PLAY</button>
                </div>
            </div>

            <div className="message">
                <p> Message here </p>
            </div>
        </div>
    )
}

Form.propTypes = {
    handleClick: PropTypes.func
}

export default Form










