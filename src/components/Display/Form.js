import React from 'react';
import PropTypes from 'prop-types'
import "./Form.css";


const Form = () => {

    return (
        <div className="container flex_box">
            <div className="col">
                <div className="mode">
                    <input type="text"
                        value="Pick game mode"
                    />

                    <select id="mode" name="Pick game mode" >
                        <option>hard</option>
                        <option>soft</option>
                    </select>
                </div>
            </div>
            <div className="col">
                <div className="name">
                    <input id="email" class="input" type="text" placeholder="Enter your name" />

                </div>
            </div>
            <div className="col">
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










