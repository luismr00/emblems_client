import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { us_regions } from '../../mock/regions/usRegions';
import { characters } from '../../mock/games/characters';

const PlayerFilters = () => {

  const [showRegion, setShowRegion] = useState("d-none");
  const [showState, setShowState] = useState("d-none");
  const [showProvince, setShowProvince] = useState("d-none");
  const [showCharacters, setShowCharacters] = useState("d-none")

  const [countrySelect, setCountrySelect] = useState("All");
  const [regionSelect, setRegionSelect] = useState("All");
  const [stateSelect, setStateSelect] = useState("All");
  const [provinceSelect, setProvinceSelect] = useState("All");
  const [gameSelect, setGameSelect] = useState("All");
  const [characterSelect, setCharacterSelect] = useState("All");
  const [scoreSelect, setScoreSelect] = useState("All");

  const regions = ["Region 1", "Region 2", "Region 3"];

  const changedGame = (e) => {
    if(e.target.value != "All") {
      setShowCharacters("d-block");
    } else {
      setShowCharacters("d-none")
    }
  }

  const changedCountry = (e) => {
    if(e.target.value === "United States") {
        setShowRegion("d-block");
        setShowState("d-block");
        setShowProvince("d-none");
        setProvinceSelect("All");
    } else if(e.target.value === "Canada") {
        setShowProvince("d-block");
        setShowRegion("d-none");
        setShowState("d-none");
        
        setRegionSelect("All");
        setStateSelect("All");
    } else {
        setShowRegion("d-none");
        setShowState("d-none");
        setShowProvince("d-none");
    }
  }

  const changedRegion = (e) => {
    // Add more conditionals for WC, EC, MW, SW, etc.
    // if(e.target.value === "All") {
    //     setShowState("d-block");
    //     setShowProvince("d-none");
    // } else {
    //     setShowState("d-none");
    // }
    setShowState("d-block");
    setShowProvince("d-none");
  }

  return (
    <div>
        <h2>Filters</h2>
        <Form>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Games</Form.Label>
            
            <Form.Select className="mb-3" id="selectForm" controlId="formBasicEmail" value={gameSelect} onChange={(event) => {setGameSelect(event.target.value); changedGame(event);}}>
              <option>All</option>
              <option>Super Smash Bros. Ultimate</option>
              <option>Super Smash Bros. Melee</option>
              <option disabled="disabled">----</option>
              <option disabled="disabled">More games</option>
            </Form.Select>
          </Form.Group>
          
          <Form.Group className={"mb-3 " + (showCharacters)} controlId="formBasicEmail">
            <Form.Label>Character</Form.Label>
            
            <Form.Select className="mb-3" id="selectForm" controlId="formBasicEmail" value={characterSelect} onChange={(event) => setCharacterSelect(event.target.value)}>
              <option>All</option>
              {/* {console.log(characters[gameSelect])} */}
              {gameSelect != "All" ? characters[gameSelect].map((character) => {
                return(
                    <option value={character}>{character}</option>
                );
              }) : 
                <option>All</option>
              }
              {/* <option>Character 1</option>
              <option>Character 2</option>
              <option>Character 3</option> */}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            
            <Form.Select className="mb-3" id="selectForm" controlId="formBasicEmail" value={countrySelect} onChange={(event) => {changedCountry(event); setCountrySelect(event.target.value)}}>
              <option>All</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Other countries</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className={"mb-3 " + (showRegion)} controlId="formBasicEmail" >
            <Form.Label>Region</Form.Label>
            
            <Form.Select className="mb-3" id="selectForm" controlId="formBasicEmail" value={regionSelect} onChange={(event) => {changedRegion(event); setRegionSelect(event.target.value)}}>
              {Object.keys(us_regions).map((region) => {
                return(
                    <option value={region}>{region}</option>
                );
              })}
              
              {/* <option>Region 1</option>
              <option>Region 2</option>
              <option>Region 3</option> */}
            </Form.Select>
          </Form.Group>

          <Form.Group className={"mb-3 " + (showState)} controlId="formBasicEmail">
            <Form.Label>State</Form.Label>
            
            <Form.Select className="mb-3" id="selectForm" controlId="formBasicEmail" value={stateSelect} onChange={(event) => setStateSelect(event.target.value)} >
              <option>All</option>
              {us_regions[regionSelect].map((region) => {
                return(
                    <option value={region}>{region}</option>
                );
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className={"mb-3 " + (showProvince)} controlId="formBasicEmail">
            <Form.Label>Province</Form.Label>
            
            <Form.Select className="mb-3" id="selectForm" controlId="formBasicEmail" value={provinceSelect} onChange={(event) => setProvinceSelect(event.target.value)}>
              <option>All</option>
              <option>Province 1</option>
              <option>Province 2</option>
              <option>Province 3</option>
            </Form.Select>
          </Form.Group>


          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Score</Form.Label>
            
            <Form.Select className="mb-3" id="selectForm" controlId="formBasicEmail" value={scoreSelect} onChange={(event) => setScoreSelect(event.target.value)}>
              <option>All</option>
              <option>Score Tier 1</option>
              <option>Score Tier 2</option>
              <option>Score Tier 3</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  )
}

export default PlayerFilters