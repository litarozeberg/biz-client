import { FunctionComponent } from "react";
import { getIsAdmin, getIsLogged } from "../services/usersService";
import Navbar from "./Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Navbar isLogged={getIsLogged()} isAdmin={getIsAdmin()} />
      <div
        className="p-5"
        style={{
          backgroundImage: `url(https://stopthelies.my/wp-content/uploads/2021/03/Homepage-Design.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundColor:"parimary",
          height: "35rem",
    
          
        }}
      >
           <h1 className="p-5 p_home display-5 text-center my-3" style={{backgroundColor: "rgba(255, 255, 255, 0.5)" }}> Business Cards</h1>
        <p className="p-5 p_home " style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
       are cards bearing business information about a company
          or individual.They are shared during formal introductions as a
          convenience and a memory aid. A business card typically includes the
          giver's name, company or business affiliation (usually with a logo)
          and contact information such as street addresses, telephone number(s),
          fax number, e-mail addresses and website. Before the advent of
          electronic communication business cards might also include telex
          details.[3] Now they may include social media addresses such as
          Facebook, LinkedIn and Twitter. Traditionally, many cards were simple
          black text on white stock, and the distinctive look and feel of cards
          printed from an engraved plate was a desirable sign of
          professionalism. In the late 20th century, technological advances
          drove changes in style, and today a professional business card will
          often include one or more aspects of striking visual design.
        </p>
      </div>
    </>
  );
};

export default Home;