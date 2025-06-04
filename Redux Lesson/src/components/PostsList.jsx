import {useGetPostsQuery} from '../api/api';

export const PostsList = () => {
    const {data, isFetching} = useGetPostsQuery();

    if (isFetching) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                data?.map(({id, title, body}) => (
                    <div key={id}>
                        <p>{title}</p>
                        <p>{body}</p>
                    </div>
                ))
            }
        </div>
    )
}
