// import m from "./Main.module.css";
import Posts from "./Posts/Posts";
import NewPost from "./Posts/NewPost";
import Cover from "./Cover"

const MainContent = () => {
    return (
        <main>
            {/* <div className="block-1">block-1</div>
            <div className={m.item}>Item-1</div>
            <div className={`${m.item} ${m.active}`}>Item-2</div>
            <div className={m.item}>Item-3</div> */}
            <Cover />
            <NewPost />
            <Posts />
            <Posts />
            <Posts />
        </main>
    );
}

export default MainContent