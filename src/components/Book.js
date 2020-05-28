import React, { Component } from 'react';

import {Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';


class Book extends Component {
    render() {
        const {book} = this.props;
        return (
            <Card style={{ width: '15rem', margin: "1rem" }} className="text-center">
                <Card.Img variant="top" src={book.cover} />
                <Card.Body>
                    <Card.Title> {book.title} </Card.Title>
                    <Card.Text>
                        {book.description}
                    </Card.Text>
                    <Button variant="primary">Buy now</Button>
                </Card.Body>
            </Card>
        );
    }
}

Book.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
}

export default Book;