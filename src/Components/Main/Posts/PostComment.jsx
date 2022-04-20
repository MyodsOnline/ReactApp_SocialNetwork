import p from './Posts.module.css'
import userImage from '../../assets/img/user-2.jpeg';

const PostComment = () => {
    return (
        <div className={p.comment_style}>
            <img src={userImage} alt="user avatar"/>
            <div className={p.commentBody}>
                <div className={p.commentBodyTitle}>
                    <h4>Author Name</h4>
                </div>
                <div className={p.commentBodyText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                </div>
            </div>
        </div>
    )
}

export default PostComment