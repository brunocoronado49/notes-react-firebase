import "./App.css";
import { Route, Link } from 'wouter';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Notes from './pages/notes/Notes';
import CreateNote from './pages/notes/CreateNote';
import UpdateNote from './pages/notes/UpdateNote';

function App() {
  return (
    <div className="App-notes">
      <Nav/>
      <section className="App-content">
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/notes" component={Notes}/>
        <Route path="/create-note" component={CreateNote}/>
        <Route path="/update-note/:id" component={UpdateNote}/>
      </section>
    </div>
  );
}

export default App;
