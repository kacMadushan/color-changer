import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators  from '../actions';
import Box from '../component/Box';

const BoxContainer = (props) => {
    return (
        <div className="box-container">
            <Box 
                handleOnClick={props.loadColor}
                color={props.color} 
            />
        </div>
    );
};

const mapStateToprops = (state) => {
    return state
}

export default connect(mapStateToprops, actionCreators)(BoxContainer);