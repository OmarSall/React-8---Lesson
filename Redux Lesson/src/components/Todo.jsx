import { useGetTodoByIdQuery } from '../api/api';

export const Todo = ({ id }) => {
    const { data, isLoading, error } = useGetTodoByIdQuery(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Failed to load todo</div>;
    }

    return (
        <div>
            <h3>Todo #{data.id}</h3>
            <p>Title: {data.title}</p>
            <p>Status: {data.completed ? '✅ Completed' : '❌ Not Completed'}</p>
        </div>
    );
};