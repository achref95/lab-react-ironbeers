import NavBar from '../components/NavBar'

const RandomBeerPage = ({ randomBeer }) => {
  return (
    <div>
      <NavBar />
      <img className="h-24" src={randomBeer.image_url} alt='beer image' />
      <h1>{randomBeer.name}</h1>
      <h2>{randomBeer.tagline}</h2>
      <p>First brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeerPage
