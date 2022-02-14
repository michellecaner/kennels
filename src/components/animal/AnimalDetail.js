import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { deleteAnimal, getAnimalById } from '../../modules/AnimalManager';
import './AnimalDetail.css';


export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, [animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteAnimal(animalId).then(() =>
      navigate("/animals")
    );
  };

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <div className="animal__caretaker">Employee: {animal.employee?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    </section>
  );
}

// WHAT??? Immediate properties of an empty object will not break if you try to reference that property but it doesn't actually exist, however nested properties of an empty object will. Use the Optional chaining (?.) operator to prevent nested values from breaking the code. Try replacing "name" with "foo" in the code above ( since location and customer don't have a "foo" property ). Try it with and without the ?. One will cause an error and the other won't.