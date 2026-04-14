import React from "react";
import TeamCard from "./TeamCard"

const Team = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h3 className="heading">
        MEET Our Expert <span className="text-red-600">Chefs</span>{" "}
      </h3>
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
        <TeamCard image="/images/t1.jpg" name="John Doe" position="kitech porter" />
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300" > 
        <TeamCard image="/images/t2.jpg" name="July Pradhan" position="Executive Chef" />
        </div>
     <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300" >
     <TeamCard image="/images/t3.jpg" name="Jonas Grider" position="Head Chef" />
     </div>
      
      </div>
    </div>
  );
};

export default Team;
