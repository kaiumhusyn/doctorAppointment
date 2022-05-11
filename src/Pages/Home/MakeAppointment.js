import React from "react";
import doctor from "./../../assets/images/doctor.png";
import appointment from "./../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an appointment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem
          vero excepturi officiis quas libero repellendus a molestiae adipisci
          consequuntur, perferendis eveniet laboriosam culpa repudiandae odit
          assumenda qui expedita optio aperiam obcaecati, asperiores dolor
          laborum voluptatum illum? Voluptatum, dolore fuga!
        </p>
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
