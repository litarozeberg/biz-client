import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { errorMsg, succesMsg } from "../services/feedbacksService";
import { getCard, editCard } from "../services/cardsService";
import { Card } from "../interfaces/Card";
import Navbar from "./Navbar";
import { getIsAdmin, getIsLogged } from "../services/usersService";
interface EditCardProps {}

const EditCard: FunctionComponent<EditCardProps> = () => {
  const { id } = useParams();
  const [card, setCard] = 
    useState({ name: "", address: "", description: "", phone: "", image: "" })

  useEffect(() => {
    getCard(id as string).then((result) => {
      setCard(result.data);
    }).catch((err)=>{
        console.log(err);
        errorMsg(err.message.data);
    });
  }, []);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: card.name,
      address: card.address,
      description: card.description,
      phone: card.phone,
      image: card.image
    },
    enableReinitialize:true,
    validationSchema: yup.object({
        name: yup.string().required().min(2),
        address: yup.string().required().min(2),
        description: yup.string().required().min(2),
        phone: yup.string().required(),
        image: yup.string().required()
    }),
    onSubmit: (values) => {
        let card: Card = { ...values, _id: id as string };
        editCard(card)
          .then((result) => {
            console.log(result.data);
            succesMsg("Card was edited successfully!");
            navigate("/myCards");
          })
          .catch((error) => {
            console.log(error);
            errorMsg("Oops...something went wrong..");
          });
      },
  });

  return (
    <>
     <Navbar isLogged={getIsLogged()} isAdmin={getIsAdmin()} />
      <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
        <h3 className="display-5 text-center">EDIT CARD</h3>
        <div className="mb-3 form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
          />
          <label htmlFor="name">Name</label>
        </div>
        {formik.touched.name && formik.errors.name ? (
          <p className="text-danger">{formik.errors.name}</p>
        ) : null}
         <div className="mb-3 form-floating">
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Address"
          />
          <label htmlFor="address">Address</label>
        </div>
        {formik.touched.address && formik.errors.address ? (
          <p className="text-danger">{formik.errors.address}</p>
        ) : null}
        <div className="mb-3 form-floating">
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Description"
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>
        {formik.touched.description && formik.errors.description ? (
          <p className="text-danger">{formik.errors.description}</p>
        ) : null}
        <div className="mb-3 form-floating">
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Phone"
          />
          <label htmlFor="phone">Phone</label>
        </div>
        {formik.touched.phone && formik.errors.phone ? (
          <p className="text-danger">{formik.errors.phone}</p>
        ) : null}
        <div className="mb-3 form-floating">
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="image"
          />
          <label htmlFor="image">Image</label>
        </div>
        {formik.touched.image && formik.errors.image ? (
          <p className="text-danger">{formik.errors.image}</p>
        ) : null}
        <div>
          <button
            type="submit"
            className="btn btn-secondary w-100"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );

  return <></>;
};

export default EditCard;
