import React from 'react';

import axios from 'axios';

import Form from './components/add-item.js';
import Items from './components/items.js';
import { Container, Navbar } from 'react-bootstrap';

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    await axios.post(`${API_SERVER}/items`, item);
    this.getItems();
  }

  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    this.getItems();
  }

  updateItem = async (item) => {
    await axios.put(`${API_SERVER}/items/${item._id}`, item);
    this.getItems();
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    this.setState({items});
  }

  async componentDidMount() {
    await this.getItems();
  }

  render() {
    return (
      <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#">Our Items</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-4 mb-4">
        <Form handleAddItem={this.addItem} />
        <hr />
        {/* pass updateItem as props */}
        <Items handleDelete={this.deleteItem} itemsList={this.state.items} handleUpdate={this.updateItem}/>
      </Container>
      </>
    );
  }
}

export default App;
