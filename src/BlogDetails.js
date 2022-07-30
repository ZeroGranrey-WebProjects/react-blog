import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog,error,isPending} = useFetch("http://localhost:8000/blogs/"+id)
    const navigate = useNavigate();

    const handleClick = ()=>{
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method:"DELETE"
        })
        .then(()=>{
            navigate('/');
        });
    };
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Writen by {blog.author}</p>
                    <div>{ blog.body }</div>
                    <img className="delete-img" src="https://cdn-icons-png.flaticon.com/128/484/484662.png" onClick={handleClick}/>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;