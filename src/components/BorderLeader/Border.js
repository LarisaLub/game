import React from 'react'
import PropTypes from 'prop-types'
import "./Border.css";


const Border = ({ handleClick, children }) => {
    const test = [1, 2, 3, 4, 5]
    return (
        <div className="border">
            <h3> Leader Board</h3>
            {test.map(_ => <div>{_}</div>)}
            <div class="container flex_box">


                <div className="col">
                    User Name
                     </div>

                <div className="col">
                    Date and Time
                 </div>

                <div className="col">
                    User Name
                     </div>

                <div className="col">
                    Date and Time
                 </div> <div className="col">
                    User Name
                     </div>

                <div className="col">
                    Date and Time
                 </div>
                <div className="col">
                    User Name
                     </div>

                <div className="col">
                    Date and Time
                 </div>
                <div className="col">
                    User Name
                     </div>

                <div className="col">
                    Date and Time
                 </div>
            </div>

        </div>




    )
}

Border.propTypes = {
    handleClick: PropTypes.func
}

export default Border