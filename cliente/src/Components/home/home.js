import  React ,  {  useState ,  useEffect  } from  "react" ;
import  {  useSelector ,  useDispatch  }  from  "react-redux" ;
import { search } from "../redux/actions";
import { useForm } from "react-hook-form";
import "../../img/alternativa.jpg"
import './home.css'

const Home = () => {
   
    const dispatch = useDispatch()

    const array = useSelector((store) => store.array);
    

    const {
        reset,
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      
      
      function submit(data, e) {
        console.log(data);
        
    
        dispatch(search(data.city));
        e.target.reset();
        reset({ data });
      }  
    

    return (
        <div className='general'>
            <h1>APP PARKING</h1>
        
         <form className="form_search" onSubmit={handleSubmit(submit)}>
          <input
            className="search_a"
            autoComplete="off"
            type="text"
            placeholder="Ingrese un Pais..."
            name="city"
            // onChange={handleInput}
            {...register("city", {
                required: {
                  value: true,
                  message: "Debe seleccionar un pais ",
                },
              })}
          />

          <button className="busca_h" type="submit">
            Search
          </button>
          <span className="err">{errors?.city?.message}</span>
          </form>
        <div className= 'container_search'>
            {array.map((item, index) => (
                <div key={index} className='card_search'>
               <div className='sub_cont1'>
                 <img 
                className="image_search"
                src={item.image}
                alt='No hay Image'                
              />
            </div>
            <div className='sub_cont2'>
                <h5 className='name_card'>{item.name}</h5>
                <h6>City: {item.city}</h6>
                <h6>Address: {item.address}</h6>
                <h6>Rating: {item.rating}</h6>
                <h6>Review Count: {item.review_count}</h6>
                <h6>Score: {item.score}</h6>
                <a href={item.url}>
                <h6>url yelp</h6>
                </a>
                </div>
                </div>
            ))}
        </div>   

        
        </div>

    )
}


export default Home;