import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

function NotFound() {
  return (
    <section className="mx-auto max-w-4xl">
      <Link to='/' className="my-8 btn btn-ghost text-slate-800 hover:btn-primary">
        <FaArrowLeftLong />
        <span className="text-2xl my-12">Back to Home</span>
      </Link>
      <img className="w-full" src="/404/404.gif" alt="" />
    </section>
  );
}

export default NotFound;
