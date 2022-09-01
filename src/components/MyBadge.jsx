import { Component } from 'react';
import { Badge } from 'react-bootstrap';

class MyBadge extends Component {

    render() {
        return (
            <Badge bg={this.props.color}>{this.props.text}</Badge>
        )
    }
}

export default MyBadge