import React, { useEffect, useState } from 'react';
import "./Cards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from '@material-ui/core';
import axios from './axios';

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards');

      setPeople(req.data);
    }

    fetchData();
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    //setLastDirection(direction);
  }


  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  }

  return (
    <div className="cards">
        <div className="cards_cardContainer">
        {people.map((person) => (
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => SwipeableDrawer(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}>
                
                <div
                    style={{ backgroundImage: `url(${person.imgUrl})` }}
                    className="card"
                >
                    <h3>{person.name}</h3>

                </div>


            </TinderCard>
            ))}
        </div>
        

    </div>
  )
}

export default Cards