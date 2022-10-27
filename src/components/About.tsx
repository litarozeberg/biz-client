import { FunctionComponent, useEffect, useState } from "react";
import { User } from "../interfaces/User";
import { errorMsg } from "../services/feedbacksService";
import { getIsAdmin, getUser, getIsLogged } from "../services/usersService";
import Navbar from "./Navbar";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    biz: false,
  });

  useEffect(() => {
    getUser()
      .then((result) => setUser(result.data))
      .catch((err) => errorMsg(err.response.data));
  }, []);
  return (
    <>
      <Navbar isLogged={getIsLogged()} isAdmin={getIsAdmin()} />
           <div
        className="p-5"
        style={{
          backgroundImage: `url(https://weblium.com/blog/wp-content/uploads/2021/05/19-Best-About-Me-Page-Examples-and-How-to-Write-a-Killer-About-Me-Page-1-1-1.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundColor:"parimary",
          height: "35rem",
    
          
        }}
      >
       <h1 className="p-5 p_home display-5 text-center my-3" style={{backgroundColor: "rgba(255, 255, 255, 0.5)" }}>YOUR PROFILE</h1>
      <div className="container" style={{backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
        <img src="https://www.hablax.com/includes/img/profile.png" width="100" alt="img"/>
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
        <h4>
          {user.biz ? (
            <>
              Business: <i className="fa-solid fa-user-check"></i>
            </>
          ) : (
            <>
              Business:<i className="fa-solid fa-user-xmark"></i>
            </>
          )}
        </h4>
        </div>
      </div>
    </>
  );
};

export default About;
