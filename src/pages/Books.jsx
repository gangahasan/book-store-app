import React,{useState,useEffect} from 'react'
import "../styles/books.css"

const Books = () => {
    const [books,setBooks] = useState();
    const[isLoding,setIsLoading] = useState(true)
    const [page,setPage] =useState(1);
    const [category,setCategory] = useState("");
    console.log(category,"category")
    const[limit] = useState(5);

    useEffect(()=>{
        getBooks();
    },[page,limit ,category])

    const getBooks =()=>{
    
        fetch(`https://bitter-season-mastodon.glitch.me/books?page=${page}&limit=5`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data,"books")
            setIsLoading(false)
            setBooks(data.books)
             })
          .catch((error) => console.error(error))
          .finally(() => console.log("Fetching  books"));
    }
    
    const handleCategory=(e)=>{
        console.log("selected")
        setCategory(e.target.value);
        console.log(category,"category");
        fetch(
          'https://bitter-season-mastodon.glitch.me/books?category=${category}'
        )
         .then((response) => response.json())
         .then((data) => {
            console.log(data,"books")
            setIsLoading(false)
            setBooks(data.books)
             })
        .catch((error) => console.error(error))
        .finally(() => console.log("Fetching  books"));

    }
    const handleDelete=(id)=>{
        console.log(id,"id")
        fetch(`https://bitter-season-mastodon.glitch.me/books/${id}`, {
            method: 'DELETE',
        })
       .then((response) => response.json())
       if(response.data.status = 200){
         console.log("Book deleted successfully");
         getBooks();
       }

    }
    const handlePrev = ()=>{
        if(page>1){
            setPage(page-1);
        }
    }
    const handleNext = ()=>{
        setPage(page+1);
    }
  return (
    <div>
      <h1 style={{ color: "teal" }}>Book Store</h1>
      {isLoding && <p>Loading...</p>}

      <select onChange={handleCategory}>
        <option value="">Select Category</option>
        <option value="">All</option>
        <option value="Fiction">Fiction</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Productivity">Productivity</option>
        <option value="Technology">Technology</option>
        <option value="History">History</option>
        <option value="Business">Business</option>
      </select>
      <div className="bookscont">
        {books &&
          books.map((book) => {
            return (
              <div key={book.id} className="book">
                <h3>Name:{book.name}</h3>
                <p>Category:{book.category}</p>
                <p>Price:{book.price}</p>
                <p>Author:{book.author}</p>
                <button onClick={()=>handleDelete(book.id)} style={{backgroundColor:"red",color:"white" ,border:"none"}}>Delete</button>
              </div>
            );
          })}
      </div>
      <button onClick={handlePrev} disabled={page <= 1}>
        Previous
      </button>
      {""} {page} {""}
      <button onClick={handleNext} disabled={books?.length < limit * page}>
        Next
      </button>
    </div>
  );
}

export default Books