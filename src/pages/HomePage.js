import { NavLink } from 'react-router-dom'
import beer from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

const HomePage = () => {
  return (
    <div>
      <img src={beer}/>
      <NavLink to="/beers"><h1>All Beers</h1></NavLink>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper scelerisque laoreet. Donec eget lectus pharetra, consequat erat vitae, convallis felis. Praesent dictum leo id placerat consequat. Morbi eu mattis nisl, et faucibus velit. Aliquam tempus dolor ut eros pulvinar aliquam quis vel urna. Nulla sed metus aliquam,</p>
      <img src={newBeer}/>
      <NavLink to="/new-beer"><h1>New Beer</h1></NavLink>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper scelerisque laoreet. Donec eget lectus pharetra, consequat erat vitae, convallis felis. Praesent dictum leo id placerat consequat. Morbi eu mattis nisl, et faucibus velit. Aliquam tempus dolor ut eros pulvinar aliquam quis vel urna. Nulla sed metus aliquam, </p>
      <img src={randomBeer}/>
      <NavLink to="/random-beer"><h1>Random Beer</h1></NavLink>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper scelerisque laoreet. Donec eget lectus pharetra, consequat erat vitae, convallis felis. Praesent dictum leo id placerat consequat. Morbi eu mattis nisl, et faucibus velit. Aliquam tempus dolor ut eros pulvinar aliquam quis vel urna. Nulla sed metus aliquam, </p>
    </div>
  )
}

export default HomePage
