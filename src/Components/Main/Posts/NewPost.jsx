import p from './Posts.module.css';
import userImage from '../../assets/img/user-1.jpeg';

const NewPost = () => {
    return (
        <div className={p.newPost}>
            <img src={userImage} alt="user avatar" />
            <form className={p.postForm}>
                <input type="text" className={p.formControl}></input>
                <button className={p.formButton}>Send</button>
            </form>
        </div>
    )
}

export default NewPost