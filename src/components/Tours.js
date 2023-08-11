
import Cards from "./Cards"
function Tours(props) {
    const tours = props.tours
    const removetour = props.removetour;
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan with Devang</h2>
      </div>
          <div className="cards">
              {
                  tours.map((tour, index) =>
                  { 
                      return <Cards key={index} tour={tour} removetour={removetour} />
                    
                  })
              }
          </div>
    </div>
  );
}
export default Tours;
