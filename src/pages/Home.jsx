import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getQuinielas, reset } from "../features/quinielas/quinielaSlice";
import QuinielaCard from "../components/QuinielaCard";
import { logout } from "../features/auth/authSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { quinielas, isLoading, isError, message } = useSelector(
    (state) => state.quinielas
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
      dispatch(logout());
      navigate("/login");
    }

    if (!user) {
      navigate("/login");
    } else {
      try {
        dispatch(getQuinielas());
      } catch (error) {
        console.log(`ERROR -> ${error}`);
      }
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  // console.log(user);
  console.log(quinielas);

  return (
    <div className="w-[80%] p-2">
      {quinielas.map((quiniela) => {
        return (
          <QuinielaCard
            key={quiniela._id}
            quiniela={quiniela}
            admin={user._id === quiniela.admin}
          />
        );
      })}
    </div>
  );
};

export default Home;
