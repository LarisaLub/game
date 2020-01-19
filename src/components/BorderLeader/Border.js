import React from 'react'
import PropTypes from 'prop-types'
import "./Border.css";


const Border = ({ users = [] }) => {

    return (
        <div className="border">
            <h3> Leader Board</h3>

            {users.map(user => (<div className="container flex_box" key={user}>


                <div className="col">
                    User Name: {user.name}
                </div>

                <div className="col">
                    Date and Time:{user.date}
                </div>


            </div>))}

        </div>




    )
}

Border.propTypes = {
    handleClick: PropTypes.func
}

export default Border