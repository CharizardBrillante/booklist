import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList';
import MyNav from './components/MyNav'; 
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <BookList></BookList>
      <Comments></Comments>
    </div>
  );
}

export default App;
