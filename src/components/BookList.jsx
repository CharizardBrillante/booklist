import { Component } from 'react';
import BookCard from './BookCard'
import fantasy from '../data/fantasy.json'

class BookList extends Component {
    render(){
        console.log('renderizzato');
        return (
            <div className="book-container">
                {fantasy.map((book) => (
                    <BookCard 
                        key={book.asin}
                        imgUrl={book.img} 
                        title={book.title} 
                        description={book.category}
                        asin = {book.asin}>
                        
                    </BookCard>))}
            </div>
        )
    }
}

export default BookList;
