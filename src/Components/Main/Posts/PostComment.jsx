import p from './Posts.module.css'
import userImage from '../../assets/img/user-2.jpeg';

const PostComment = (proops) => {
    return (
        <div className={p.comment_style}>
            <img src={userImage} alt="user avatar"/>
            <div className={p.commentBody}>
                <div className={p.commentBodyTitle}>
                    <h4>Author Name</h4>
                </div>
                <div className={p.commentBodyText}>
                    <p>{proops.message}</p>
                </div>
            </div>
        </div>
    )
}

export default PostComment