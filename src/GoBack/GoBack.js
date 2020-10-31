import React from 'react';
import './GoBack.css';

export default function GoBack(props) {
    return (
      <div>
        <button 
          className="goback-button"
          onClick={() => props.history.goBack()}
        >
          Go Back
        </button>
      </div>
    );
  }

  GoBack.defaultProps = {
    history: {
      goBack: () => {}
    }
  }