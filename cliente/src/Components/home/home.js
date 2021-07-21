import  React ,  {  useState ,  useEffect  } from  "react" ;
import  {  useSelector ,  useDispatch  }  from  "react-redux" ;
import { search } from "../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(search());
      }, [dispatch]);

      const array = useSelector((store) => store.array);
    console.log(array)

    return (
        <div>
            <h1>APP PARKING</h1>
        </div>

    )
}


export default Home;