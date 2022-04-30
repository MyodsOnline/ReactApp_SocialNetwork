// import m from "./Main.module.css";
import Posts from "./Posts/Posts";
import NewPost from "./Posts/NewPost";
import Cover from "./Cover"

const MainContent = ({data}) => {

    let postDataItem = data.map(post => <Posts text={post.text} author={post.author} likes={post.likes} key={post.id} />)

    return (
        <main>
            <Cover />
            <NewPost />
            {postDataItem}
        </main>
    );
}

export default MainContent