import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { next, previous, search } from "../redux/actions";
import { useForm } from "react-hook-form";
import { FaBeer, FaStar, FaCar } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component'
import "../../img/alternativa.jpg";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();

  const array = useSelector((store) => store.array);

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function submit(data, e) {
    dispatch(search(data.city));
    e.target.reset();
    reset({ data });
  }

  return (
    <div className="general">
      <h1><FaCar /> PARKING APP <FaCar /> </h1>

      <form className="form_search" onSubmit={handleSubmit(submit)}>
        <input
          className="search_a"
          autoComplete="off"
          type="text"
          placeholder="Enter city name..."
          name="city"
          {...register("city", {
            required: {
              value: true,
              message: "You must enter a city",
            },
          })}
        />

        <button className="buttom_h" type="submit">
          Search
        </button>
        <span className="err">{errors?.city?.message}</span>
      </form>

      <div className="container_search">
        {array.map((item, index) => (
          <div key={index} className="card_search">
            <div className="sub_cont1">
              <img
                className="image_search"
                src={item.image}
                alt="Nothing to show"
              />
            </div>
            <div className="sub_cont2">
              <h5 className="name_card">{item.name}</h5>
              <span className='star'>
                <ReactStars className='star' value={item.rating} />
              </span>
              <h6>
                City: <span>{item.city}</span>
              </h6>
              <h6>
                Address: <span>{item.address}</span>
              </h6>
              <h6>
                Review Count: <span>{item.review_count}</span>
              </h6>
              <h6>
                Score: <span>{item.score.toFixed(2)}</span>
              </h6>
              <a href={item.url}>
                <h6>url yelp</h6>
              
              </a>
            </div>
          </div>
        ))}
      </div>
      {array && array.length > 0 ? (
        <div className="div_btn">
          <button onClick={() => dispatch(previous())} className="buttom_h">
            {" "}
            Previous
          </button>

          <button onClick={() => dispatch(next())} className="buttom_h">
            {" "}
            Next
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
