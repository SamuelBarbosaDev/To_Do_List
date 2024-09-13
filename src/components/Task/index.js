import './Task.css';
import React from 'react';
import ProtoTypes from 'prop-types'
import { FaEdit, FaWindowClose } from 'react-icons/fa';

function Task({ tarefas, handleEdit, handleDelete }){
    return (
        <ul className='tasks'>
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <div className='task-buttons'>
                        <FaEdit
                        className='task-button-edit'
                        onClick={(e) => handleEdit(e, index)}
                        />
                        <FaWindowClose
                        className='task-button-delete'
                        onClick={(e) => handleDelete(e, index)}
                        />
                    </div>
                </li>
            )) }
        </ul>
    )
}

Task.propTypes = {
    tarefas: ProtoTypes.object.isRequired,
    handleEdit: ProtoTypes.func.isRequired,
    handleDelete: ProtoTypes.func.isRequired
}

export default Task
