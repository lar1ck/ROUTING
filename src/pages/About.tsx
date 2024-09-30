// import React from 'react'
// import Aboutimg from "../assets/about.jpg"
import "./About.css";
// import { GoArrowRight } from "react-icons/go";
import Card from "../components/Card";

const About = () => {
  return (
    <div className="mn h-screen">
      <div className="px-24 pt-14">
        {/* <img src={Aboutimg} alt="" /> */}

        <h1 className="text-3xl font-mono font-bold text-gray-600">
          Discover More About us
        </h1>
        <p className="pr-28 mt-5 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          obcaecati similique id, velit alias modi eveniet accusamus suscipit
          dignissimos quas debitis ipsam beatae impedit! Rem cupiditate ratione
          nisi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
          aspernatur? Quibusdam quam optio quos et quia! Officiis vitae quasi
          maiores.
        </p>
      </div>
      <div className="flex grid-rows-3 space-x-6 justify-center">
        <Card
          title="First one"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          dolore ut id quo quidem dolores quasi corrupti saepe commodi autem."
          btcontent="Read more"
        />
        <Card
          title="Second one"
          content="ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          dolore ut id quo quidem dolores quasi corrupti saepe commodi autemupt."
          btcontent="Read more"
        />
        <Card
          title="Third one"
          content="sit amet consectetur adipisicing elit. Quibusdam
          dolore ut id quo quidem dolores commode"
          btcontent="Read more"
        />
        
      </div>
    </div>
  );
};

export default About;
