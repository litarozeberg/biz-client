import { FunctionComponent } from "react";

interface CardsProps {
 isActive: boolean;
}

const Cards: FunctionComponent<CardsProps> = ({isActive}) => {
const cardsArr: any = [
        {Number:1, BusinessName: "bizz", BusinessDescription:"lalala", BusinessAdress:"ahhhhh"},
        {Number:2, BusinessName: "bizz", BusinessDescription:"lalala", BusinessAdress:"laahs1llala"},
        {Number:3, BusinessName: "bizz", BusinessDescription:"lalala", BusinessAdress:"44444"},
        {Number:4, BusinessName: "bizz", BusinessDescription:"lalala", BusinessAdress:"44444"},

];

    return (
    <>
    {isActive ? (
        cardsArr.map((cards: any) => (
            <div key={cards.Number}>
    <div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">{cards.BusinessName}</h5>
    <p className="card-text">{cards.BusinessDescription}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">{cards.BusinessAdress}</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
</div>
        ))
        ) : (
            <p>No Cards were found</p>
        )}
    </>  
    )    
}

 
export default Cards;