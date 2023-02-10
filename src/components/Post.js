import './Post.css'
function Post (props) {
    const {id, userId, title, body} = props;

    return (
        <div className='post'>
        <title>{title}</title>
        <h1>User ID:{userId}</h1>
        <p>{body}</p>
        <h3>Post №{id}</h3>

       </div>
    

        )

}

export default Post;