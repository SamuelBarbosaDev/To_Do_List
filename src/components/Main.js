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
            'Fazer Barra',
            'Elevação de pernas na barra'
        ]
    };

    handleChange = (e) =>{
        this.setState({
            novaTarefa: e.target.value
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) !== -1) return;

        const novasTarefas = [...tarefas];

        this.setState({
            tarefas: [...novasTarefas, novaTarefa],
        });
    }

    handleEdit = (e, index) => {
        
    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];

        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas],
        })
    }

    render(){
        const { tarefas } = this.state;

        return (
            <main>
                <section className='main-content'>
                    <h1>Lista de Tarefas</h1>

                    <form onSubmit={this.handleSubmit} action='#' className='form'>
                        <input onChange={this.handleChange} type='text' />
                        <button type='submit'><FaPlus /></button>
                    </form>
                    <ul className='tasks'>
                        {tarefas.map((tarefa, index) => (
                            <li key={tarefa}>
                                {tarefa}
                                <div className='task-buttons'>
                                    <FaEdit
                                    className='task-button-edit'
                                    onClick={(e) => this.handleEdit(e, index)}
                                    />
                                    <FaWindowClose
                                    className='task-button-delete'
                                    onClick={(e) => this.handleDelete(e, index)}
                                    />
                                </div>
                            </li>
                        )) }
                    </ul>
                </section>
            </main>
        )
    }
}
