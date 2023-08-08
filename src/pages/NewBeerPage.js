import { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

const NewBeerPage = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleTaglineInput = (e) => setTagline(e.target.value);
  const handleFirstBrewedInput = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTipsInput = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevelInput = (e) => setAttenuationLevel(e.target.value);
  const handleContributedByInput = (e) => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: Number(attenuationLevel),
      contributed_by: contributedBy,
    }

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        console.log(response)
        // Reset the state
        setName("");
        setTagline("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel("");
        setContributedBy("");
    
      })
      console.log("Submitted", newBeer)
  };


  return (
    <>
    <NavBar />
    <div className="flex items-center justify-center">
    
    <form onSubmit={handleSubmit} className="border rounded-lg p-6">
      <div className="flex mb-4">
        <label className="w-1/3 pr-4 text-right">Name:</label>
        <input type="text" name="Name" value={name} onChange={handleNameInput} className="border p-2 w-2/3" />
      </div>

      <div className="flex mb-4">
        <label className="w-1/3 pr-4 text-right">Tagline:</label>
        <input type="text" name="Tagline" value={tagline} onChange={handleTaglineInput} className="border p-2 w-2/3" />
      </div>

      <div className="flex mb-4">
        <label className="w-1/3 pr-4 text-right">First brewed:</label>
        <input type="text" name="FirstBrewed" value={firstBrewed} onChange={handleFirstBrewedInput} className="border p-2 w-2/3" />
      </div>

      <div className="flex mb-4">
        <label className="w-1/3 pr-4 text-right">Brewers tips:</label>
        <input type="text" name="BrewersTips" value={brewersTips} onChange={handleBrewersTipsInput} className="border p-2 w-2/3" />
      </div>

      <div className="flex mb-4">
        <label className="w-1/3 pr-4 text-right">Attenuation level:</label>
        <input type="number" name="AttenuationLevel" value={attenuationLevel} onChange={handleAttenuationLevelInput} className="border p-2 w-2/3" />
      </div>

      <div className="flex mb-4">
        <label className="w-1/3 pr-4 text-right">Contributed by:</label>
        <input type="text" name="ContributedBy" value={contributedBy} onChange={handleContributedByInput} className="border p-2 w-2/3" />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">ADD NEW</button>
    </form>
  </div>
  </>
  );
};

export default NewBeerPage;