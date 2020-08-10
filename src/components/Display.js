import React from 'react';
import PropTypes from 'prop-types';

export const Display=(props)=>{
    return(
        <div>
            {props.message}
        </div>
    )
};
Display.propTypes={
    message:PropTypes.number.isRequired
}
