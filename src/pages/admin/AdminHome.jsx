import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { user } = useSelector((state) => state.auth);

  const currentPath = location.pathname;

  console.log(currentPath);
  console.log(user);

  useEffect(() => {
    if (!user || !user.admin) {
      navigate("/login");
    } else {
      try {
        // dispatch(getQuinielas());
      } catch (error) {
        console.log(`ERROR -> ${error}`);
      }
    }
  }, [user, navigate, dispatch]);

  return <div>AdminHome</div>;
};

export default AdminHome;
