import {useGetPostsQuery, useDeletePostMutation} from '../api/api';

export const PostsList = () => {
    const {data, isFetching} = useGetPostsQuery();
    const [deletePost] = useDeletePostMutation();

    if (isFetching) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                data?.map(({id, title, body}) => (
                    <div key={id}>
                        <button onClick={() => deletePost(id)}>Delete</button>
                        <p>{title}</p>
                        <p>{body}</p>
                    </div>
                ))
            }
        </div>
    )
}