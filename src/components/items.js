import React from 'react';

import UpdateForm from './update-item';
import { Card, Button, CardGroup } from 'react-bootstrap';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>
        <CardGroup>
        {/* change .forEach to .map */}
        {
          this.props.itemsList.map( (item,idx) =>

            <Card key={idx} style={{ width: '18rem' }} className="m-2">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <p>{item.description}</p>
                  <blockquote>{item.notes}</blockquote>
                </Card.Text>
                <UpdateForm item={item} handleUpdate={this.props.handleUpdate} />
                <Button variant="primary" data-testid={`delete-button-${item.name}`}
                onClick={ () => this.props.handleDelete(item._id) }>Delete Item</Button>
              </Card.Body>
            </Card>

          )
        }
        </CardGroup>
      </section>
    );
  }
}

export default Items;
