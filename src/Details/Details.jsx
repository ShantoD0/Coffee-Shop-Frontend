import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

function Details() {
  return (
    <section className="mx-auto max-w-4xl">
      <Link to='/' className="my-8 btn btn-ghost text-slate-800 hover:btn-primary">
        <FaArrowLeftLong />
        <span className="text-2xl my-12">Back to Home</span>
      </Link>

      <div className="w-full bg-stone-300/20 flex justify-around mb-28 items-center flex-col sm:flex-row">
        <img width="350px" src="/1.png" alt="" />
        <div className="flex items-center flex-col sm:mr-44 px-5 sm:flex-row">
          <div className="text-left space-y-2 text-nowrap">
            <p>
              {" "}
              <h3 className="text-stone-800 text-4xl mb-8">Niceties</h3>
              <span className="font-bold">Name: </span>Americano Coffee
            </p>
            <p>
              <span className="font-bold">Price: </span>Mr. Matin Paul
            </p>
            <p>
              <span className="font-bold">Supplier: </span>Cappu Autharizer
            </p>
            <p>
              <span className="font-bold">Taste: </span>Sweet and Hot
            </p>
            <p>
              <span className="font-bold">Category: </span>Americano
            </p>
            <p>
              <span className="font-bold">Details: </span>Espresso with hot water
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
