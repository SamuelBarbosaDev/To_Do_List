import './Main.css'
import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa'
import { FaEdit, FaWindowClose } from 'react-icons/fa'


export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [
            'Estudar Javascript',
            'Treinar',
            'Ler a Bíblia',
            'Estudar Espanhol',
            'Fazer alongamentos',
            'Fazer Barras',
            'Elevação de pernas na barra'
        ]
    };

    handleChange = (e) =>{
        this.setState({
            novaTarefa: e.target.value
        });
    }
    render(){
        const { novaTarefa, tarefas } = this.state;

        return (
            <main>
                <section className='main-content'>
                    <h1>{ (!novaTarefa && 'Lista de Tarefas') || (novaTarefa)}</h1>

                    <form action='#' className='form'>
                        <input onChange={this.handleChange} type='text' />
                        <button type='submit'><FaPlus /></button>
                    </form>
                    <ul className='tasks'>
                        {tarefas.map(tarefa => (
                            <li key={tarefa}>
                                {tarefa}
                                <div className='task-buttons'>
                                    <FaEdit className='task-button-edit'/>
                                    <FaWindowClose className='task-button-delete'/>
                                </div>
                            </li>
                        )) }
                    </ul>
                </section>
            </main>
        )
    }
}
