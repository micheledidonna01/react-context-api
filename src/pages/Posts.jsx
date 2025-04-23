import { useEffect } from "react"
import CardItem from "../components/post/PostItem";
import Footer from "../components/Footer";
import { useContext } from "react";
import ContextPosts from "../context/ContextPosts";


let Posts = () => {

    const {posts} = useContext(ContextPosts);

    useEffect(() => {
        console.log('mount component Posts');

        //viene eseguito allo smontare del componente
        return () => {
            console.log('unmount component Posts');
        }
    }, [])

    return (
        <>
        <ul className="list-group d-flex">
            {posts.map((card)=> <CardItem
            key = {card.id}
            id = {card.id}
            title = {card.title}
            body = {card.body}/>
            )}
        </ul>
        <Footer />
        </>
    )
}


export default Posts