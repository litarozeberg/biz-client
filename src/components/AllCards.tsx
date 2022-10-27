import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../interfaces/Card";
import { getAllCards } from "../services/cardsService";
import { errorMsg } from "../services/feedbacksService";
import { getIsAdmin, getIsLogged } from "../services/usersService";
import Navbar from "./Navbar";

interface AllCardsProps {}

const AllCards: FunctionComponent<AllCardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  useEffect(() => {
    getAllCards()
      .then((result) => {
        console.log(result.data);
        setCards(result.data)
      })
      .catch((err) => errorMsg(err.message.data));
  });

  return (
    <>
      <Navbar isLogged={getIsLogged()} isAdmin={getIsAdmin()} />
         <div
        className="p-5"
        style={{
          backgroundImage: `url(https://play-lh.googleusercontent.com/HDhZc1410lGkN3OAhZ2lwWBz0ijuIfW_6NEAUw1jOaMVPpIYV1FTq4R4lWH6djvQ3Q=w480-h960)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundColor:"parimary",
          height: "40rem",
        }}
      >
     <h1 className="p-5 p_home display-5 text-center my-3" style={{backgroundColor: "rgba(255, 255, 255, 0.5)" }}>All Cards</h1>
      <div></div>
       <div className="row gap-4 m-4">
        {cards.length ? (
          cards.map((card: Card) => (
            <div
              key={card._id}
              className="card col-md-6 col-12"
              style={{ width: "18rem" }}
            >
              <img src={card.image} alt="Basa" className="card-img-top" />
              <div className="card-body">
                <h6 className="text-secondary">{card.name}</h6>
                <small className="card-title">{card.description}</small>
                <br/><br/>
                <p className="card-text">Address: {card.address}</p>
                <p className="card-text">Phone: {card.phone}</p>
                
</div>
              </div>        
           
                 
          ))
        ) : (
          <p className="text-center">No cards</p>
        )}
        </div>
     
       </div>
    </>
  );
};

export default AllCards;
