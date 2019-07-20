import React from 'react';
import Monkey from "./assets/monkey.svg";
import Cat from "./assets/cat.svg";
import Dog from "./assets/dog.svg"
import { Card  } from "./Card/Card"
import './App.css';



function App() {

  const state = {
    animalName : ["Monkey", "Cat", "Dog" ],
    animalImg : [Monkey, Cat, Dog],
    animalDetail: [
      "Monkey is a common name that may refer to groups or species of mammals, in part, the simians of infraorder Simiiformes. The term is applied descriptively to groups of primates, such as families of new world monkeys and old world monkeys",

     "The cat is a small carnivorous mammal. It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family.",

     "The domestic dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore."
     ]
  }

  return (
    <div className="App">
     <Card img={state.animalImg[0]} animalDetail={state.animalDetail[0]} animalName={state.animalName[0]} />
     <Card img={state.animalImg[1]} animalDetail={state.animalDetail[1]} animalName={state.animalName[1]} />
     <Card img={state.animalImg[2]} animalDetail={state.animalDetail[2]} animalName={state.animalName[2]} />
    </div>
  );
}

export default App;
