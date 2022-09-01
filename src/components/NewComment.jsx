import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class NewComment extends Component {

    state = {
        commentText: '',
    }

    postComment(asin) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGU4MWVkZDY3ODAwMTUwN2Q3MzQiLCJpYXQiOjE2NjIwMjk0NDEsImV4cCI6MTY2MzIzOTA0MX0.V3BZhbimXxKJnE2_CHALYYWFMGvvzYXBcX7sjT60dK4',
            },
            body: JSON.stringify({
                author: `Guest${Math.ceil(Math.random()*1000)}`,
                comment: this.state.commentText,
                elementId: asin
            })
        }
        fetch('https://striveschool-api.herokuapp.com/api/comments/', options)
            .then((res)=> res.json())
            .then((res)=> console.log('comment posted', res))
            .catch(err => console.log('Something went wrong while posting comment', err))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.postComment(this.state.commentText, this.props.asin);

    }

    handleChange(e) {
        this.setState({commentText: e.target.value});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Commenta</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Lascia il tuo commento"
                        value={this.state.commentText} 
                        onChange={this.handleChange} 
                        required />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        )
    }
}

export default NewComment;