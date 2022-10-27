import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../interfaces/Card";
import { deleteCard, getMyCards } from "../services/cardsService";
import { errorMsg, succesMsg } from "../services/feedbacksService";
import { getIsAdmin, getIsLogged } from "../services/usersService";
import Navbar from "./Navbar";

interface MyCardsProps {}

const MyCards: FunctionComponent<MyCardsProps> = () => {
  const [isChanged,setIsChanged] = useState<boolean>(false)
  const [myCards, setMyCards] = useState<Card[]>([]);
  useEffect(() => {
    getMyCards()
      .then((result) => setMyCards(result.data))
      .catch((err) => errorMsg(err.message.data));
  },[isChanged]);

  const handleDelete = (card: Card) => {
    if (window.confirm(`Are you sure you want to delete ${card.name}?`)) {
      deleteCard(card)
        .then((result) => {
          setIsChanged(!isChanged);
          succesMsg(result.data);
        })
        .catch((err) => errorMsg(err));
    }
  };

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
          height: "35rem",
        }}
      >
 <h1 className="p-5 p_home display-5 text-center my-3" style=
 {{backgroundColor: "rgba(255, 255, 255, 0.5)" }}>My Cards</h1>

       <div className="row gap-4 m-4">
        {myCards.length ? (
          myCards.map((card: Card) => (
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

                {getIsAdmin() ? (
                  <>
                    <Link to={`/mycards/${card._id}`} className="btn btn-success mx-1">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <a
                      onClick={() => {
                        handleDelete(card);
                      }}
                      className="btn btn-danger mx-1"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </a>
                    
                  </>
                ) : null}
              </div>
            </div>
            
          ))
        ) : (
        <p className="p-1 p_home display-8 text-center my-3" style=
 {{backgroundColor: "rgba(255, 255, 255, 0.5)" }}>No Cards</p>
        )}
      </div>

      </div>
    </>
  );
};

export default MyCards;
