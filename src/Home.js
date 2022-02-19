import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "./components/animal/AnimalSpotlight"
import { getRandomId } from "./modules/AnimalManager"

export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
    </>
  );
};

// Line 26: This is a common approach to conditional rendering. The <AnimalSpotlight> will only be rendered if the spotlightId variable is "truthy" (as opposed to "falsy"). The value of 0 is falsy any other number is truthy.