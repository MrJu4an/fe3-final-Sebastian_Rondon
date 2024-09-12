import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContextGlobal()

  return (
    <div className={state.theme === true ? "dark" : ""}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          state.favs.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        }
      </div>
    </div>
  );
};

export default Favs;
