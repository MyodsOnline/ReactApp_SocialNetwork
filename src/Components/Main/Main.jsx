// import m from "./Main.module.css";
import Posts from "./Posts/Posts";
import NewPost from "./Posts/NewPost";
import Cover from "./Cover"

const MainContent = () => {

    let postsData = [
        {id:1, author: "Bengamin Button", likes: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"},
        {id:2, author: "Markus Tied", likes: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"},
        {id:3, author: "Frank Movent", likes: 7, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!"}
    ]

    let postDataItem = postsData.map(post => <Posts text={post.text} author={post.author} likes={post.likes} key={post.id} />)

    return (
        <main>
            {/* <div className="block-1">block-1</div>
            <div className={m.item}>Item-1</div>
            <div className={`${m.item} ${m.active}`}>Item-2</div>
            <div className={m.item}>Item-3</div> */}
            <Cover />
            <NewPost />
            {postDataItem}
            {/* <Posts likes="3"/>
            <Posts likes="7"/>
            <Posts likes="1"/> */}
        </main>
    );
}

export default MainContent