import {useState} from 'react'
import './App.css'
import {Counter} from "./components/Counter.jsx";
import {PostsList} from "./components/PostsList.jsx";
import {TodosList} from "./components/TodosList.jsx";
import {Post} from './components/Post.jsx';
import {Todo} from './components/Todo.jsx';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Counter/>
            <PostsList/>
            <TodosList/>
            <Post id={1}/>
            <Todo id={1}/>
        </>
    )
}

export default App
