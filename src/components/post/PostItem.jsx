import SinglePost from "../../pages/posts/SinglePost"
import { Link } from "react-router-dom"
function CardItem({ id, title, lengthPosts }) {

    return <li className="list-group-item">
        <h3 className="text-uppercase">{title}</h3>
        {/* <p>{body}</p> */}
        <p>{lengthPosts}</p>
        <Link to={`/posts/${id}`}>Link dettaglio post</Link>
    </li>
}

export default CardItem