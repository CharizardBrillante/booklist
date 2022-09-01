import { Component } from 'react';
import { ListGroup} from 'react-bootstrap';

class Comments extends Component {
    state = {
        comments: [],
    }
    getComments() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGU4MWVkZDY3ODAwMTUwN2Q3MzQiLCJpYXQiOjE2NjIwMjk0NDEsImV4cCI6MTY2MzIzOTA0MX0.V3BZhbimXxKJnE2_CHALYYWFMGvvzYXBcX7sjT60dK4',
            },
        }
        fetch('https://striveschool-api.herokuapp.com/api/comments/'+ this.props.asin, options)
            .then((res)=> res.json())
            .then((res)=> {this.setState({comments: res}); console.log('comments array', this.state.comments)})
            .catch(err => console.log('Something went wrong while fetching comments', err))
    }
    componentDidMount() {
        this.getComments();
    }

    render() {
        return (
            <ListGroup>
            {this.state.comments.map((comment) => (
                <ListGroup.Item key={comment._id}>
                <b>{comment.author}:</b> {comment.comment}
                </ListGroup.Item>
            ))}
            </ListGroup>
        )
    }
}

export default Comments;