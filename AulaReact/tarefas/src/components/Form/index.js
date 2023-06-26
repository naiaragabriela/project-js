import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

export default function Form(handleChange, handleSubmit, novaTarefa) {
  return(
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        Add
      </button>
    </form>
  )
}

Form.defaultProps = {
  novaTarefa: ''
}

Form.PropTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
