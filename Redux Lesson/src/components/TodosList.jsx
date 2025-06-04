import {useGetTodosQuery, useDeleteTodoMutation} from '../api/api';

export const TodosList = () => {
    const {data: todos, isLoading, error} = useGetTodosQuery();
    const [deleteTodo] = useDeleteTodoMutation();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error... Failed to load todos.</div>
    }

    return (
        <div>
            <h2>Todos</h2>
            <ul>
                {todos?.map(({id, title, completed}) => (
                    <li key={id}>
                        <button onClick={() => deleteTodo(id)}>Delete</button>
                        <span>{title}</span> - <strong>{completed ? '✅' : '❌'}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};