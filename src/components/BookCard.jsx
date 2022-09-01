import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Comments from './Comments'
import NewComment from './NewComment';

class BookCard extends Component {

    state = {
        commentsShown: false,
    }
    render() {
        return (
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imgUrl}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button className="cardBtn" variant="primary">Favourite</Button>
                    <Button className="cardBtn" variant="secondary"
                        onClick={() => this.setState({commentsShown: !this.state.commentsShown})}>Comments</Button>
                </Card.Body>                
            </Card>
            {this.state.commentsShown && <Comments asin={this.props.asin}></Comments>}
            {this.state.commentsShown && <NewComment asin={this.props.asin}></NewComment>}
            </div>
    )}
}

export default BookCard;