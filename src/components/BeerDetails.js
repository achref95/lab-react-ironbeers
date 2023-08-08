import NavBar from '../components/NavBar'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BeerDetails = ({ beers }) => {
  const [beerDetails, setBeerDetails] = useState(null)
  const { beerId } = useParams()

  useEffect(() => {
    const beerDetail = beers.find((beer) => beer._id === beerId)
    setBeerDetails(beerDetail)
  }, [beerId, beers])

  if (!beerDetails) {
    return (
      <div>
        <NavBar />
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div>
      <NavBar />
      <img className="h-24" src={beerDetails.image_url} alt='beer image' />
      <h1>{beerDetails.name}</h1>
      <h2>{beerDetails.tagline}</h2>
      <p>First brewed: {beerDetails.first_brewed}</p>
      <p>Attenuation level: {beerDetails.attenuation_level}</p>
      <p>Description: {beerDetails.description}</p>
      <p>Contributed by: {beerDetails.contributed_by}</p>
    </div>
  )
}

export default BeerDetails
