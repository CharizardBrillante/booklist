import { Component } from 'react';
import BookCard from './BookCard'
import fantasy from '../data/fantasy.json'

class BookList extends Component {
/*   
    getBooks() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'adf2711129msh3534c9c357d9fe1p18a1bbjsn2f7b53f11b17',
                'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com'
            }
        };
        
        fetch('https://bookshelves.p.rapidapi.com/books', options)
            .then(res => res.json())
            .then((res) => { 
                this.setState({books: res.Books});
                console.log('books array: ',this.state.books);
            })
            .catch(err => console.error(err));
    } */
/* 
    componentDidMount() {
        this.getBooks();
    } */
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