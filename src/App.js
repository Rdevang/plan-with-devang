import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import toursdata from "./tours";
import Refresh from "./components/Refresh";
function App() {
  const [tours, settours] = useState(toursdata);
  function removetour(id) {
    settours(tours.filter((tour) => tour.id !== id));
    settourcount((prev) => prev - 1);
    console.log(tours.length);
  }
  function refresh() {
    settours(toursdata);
    settourcount(toursdata.length);
  }
  const [tourcount, settourcount] = useState(tours.length);

  return (
    <div className="App">
      {tourcount !== 0 ? (
        <Tours tours={tours} removetour={removetour} />
      ) : (
        <Refresh refresh={refresh} />
      )}
    </div>
  );
}

export default App;
