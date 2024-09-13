import './Form.css'
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import ProtoTypes from 'prop-types'

function Form({ handleSubmit, handleChange, novaTarefa}){
    return(
        <form onSubmit={handleSubmit} action='#' className='form'>
            <input onChange={handleChange} type='text' value={novaTarefa}/>
            <button type='submit'><FaPlus /></button>
        </form>
    )
}

// Form.defaultProps = {
//     novaTarefa: 'Valor padrão'
// };

Form.propTypes = {
    handleSubmit: ProtoTypes.func.isRequired,
    handleChange: ProtoTypes.func.isRequired,
    novaTarefa: ProtoTypes.string.isRequired,

}

export default Form
