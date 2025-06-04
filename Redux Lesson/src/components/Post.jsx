import { useGetPostByIdQuery } from '../api/api';

export const Post = ({ id }) => {
    const { data, isFetching } = useGetPostByIdQuery(id);

    if (isFetching) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Post id: {data?.id}</h2>
            <p>{data?.title}</p>
            <p>{data?.body}</p>
        </div>
    )
}