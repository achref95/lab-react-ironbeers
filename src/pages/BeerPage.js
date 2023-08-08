import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'

const BeerPage = ({ beers }) => {
  if (!beers) {
    return <div>No available beers</div>
  }

  return (
    <div>
      <NavBar />
      {beers.map((beer) => (
        <NavLink to={`/beers/${beer._id}`}>
          <div className="flex mb-4 mx-8 mt-8" key={beer._id}>
            <div className="mr-4">
              <img className="h-24" src={beer.image_url} alt='beer image' />
            </div>
            <div>
              <h1>{beer.name}</h1>
              <h2>{beer.tagline}</h2>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default BeerPage
