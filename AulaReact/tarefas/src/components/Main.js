import React, {Component} from 'react';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer café',
      'Beber água',
      'Estudar'
    ]
  };

 handleChange = (e) => {
  this.setState({
    novaTarefa: e.target.value,
  });
 }

  render() {
    const {novaTarefa, tarefas} = this.state;

    return (
    <div className="main">
      <h1>Lista de Tarefas</h1>
      <form action="#" className="form">
        <input
        onChange={this.handleChange}
        type="text"
        value={novaTarefa}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="tarefas">
        {tarefas.map(tarefa => (
          <li key={tarefa}>
            {tarefa}
            <div>
              <button className="edit">
                Check
              </button>
              <button className="delete">
                Delete
              </button>
            </div>
          </li>
        ))}
     </ul>
    </div>
    );
  }
}