import React from 'react';
import { connect } from 'react-redux';

const Box = (props) => {
    return (
        <div 
            style={{ backgroundColor: `${props.color}` }} 
            className="box-view"
        >
            <button 
                className="btn-type"
                onClick={() => { props.handleOnClick()}}
            >
                Change Color
            </button>
        </div>
    );
};

export default connect()(Box);