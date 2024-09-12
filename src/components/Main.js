import React, { Component } from 'react';
import './Main.css'
export default class Main extends Component {
    state = {
        novaTarefa: ''
    };

    handleChange = (e) =>{
        this.setState({
            novaTarefa: e.target.value
        });
    }
    render(){
        const { novaTarefa } = this.state;

        return (
            <main>
                <section className='main-content'>
                    <h1>{ (!novaTarefa && 'Lista de Tarefas') || (novaTarefa)}</h1>

                    <form action='#'>
                        <input onChange={this.handleChange} type='text' />
                        <button type='submit'>Enviar</button>
                    </form>
                </section>
            </main>
        )
    }
}
