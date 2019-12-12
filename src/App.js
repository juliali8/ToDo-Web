import React, { Component } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import Todo from './Todo';


var apiKey = "2fc5cfd6c686514e3aedca956c97de83f0dfb44be80ad06b6feef025682a3dd4";
var sortAlpha = false;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item: '',
    };
  }


  componentDidMount() {
    console.log("componentdidmount");
    var todos = [];
    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        todos = JSON.parse(this.responseText)
      }
    });
    xhttp.open("GET", "https://api.kraigh.net/todos");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("x-api-key", apiKey);
    xhttp.send();

    this.setState({
      items: todos,
      item: "",
    });
  }

  postItems() {
    return new Promise((resolve, reject) => {
      var text = document.getElementById("new-task").value;
      var data = JSON.stringify({
        "text": text
      });
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var todo = JSON.parse(this.responseText)
          resolve(todo)
        } else if (this.readyState === 4) {
          console.log("Server Error")
          reject('Error')
        }
      }
      xhttp.open("POST", "https://api.kraigh.net/todos", true)
      xhttp.setRequestHeader("Content-type", "application/json")
      xhttp.setRequestHeader("x-api-key", apiKey)
      xhttp.send(data)
    })
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

  
      const newItem = {
        title: this.state.item
      }

      this.postItems()
        .then(newTodo => {
          this.setState(state => ({
            items: [...this.state.items, newItem],
            item: ""
          }))
          return true
        })
        .catch(error => console.log(error))


  };




  handleDelete = (title) => {
    const filteredItems = this.state.items.filter(item =>
      item.title !== title)

    this.setState({
      items: filteredItems
    });
  }


  handleCheck = (e) => {

  }


  handleSort = (e) => {
    sortAlpha = true;
    console.log("handlesort");
    const todos = this.state.items;
    todos.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    })
    this.setState({ items: todos });
  }

  render() {
    return (
      <section id="todo-content">
        <NewTodo item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleSort={this.handleSort} />
        <Todo items={this.state.items} handleDelete={this.handleDelete} handleCheck={this.handleCheck}/>
      </section>
    );
  }

}
export default App;
