import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

function UpdateCoffee() {
  return (
    <div className="bg-[url('/more/11.png')]">
      <section className="mx-auto max-w-4xl">
        <Link to='/' className="my-8 btn btn-ghost text-slate-800 hover:btn-primary">
          <FaArrowLeftLong />
          <span className="text-2xl my-12">Back to Home</span>
        </Link>
        <div className=" mx-auto space-y-8 mb-8 bg-stone-100 py-16 2xl:px-28 lg:px-16 px-8">
          <h3 className="text-4xl text-center">Update Existing Coffee Details</h3>
          <p className="max-w-2xl text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form className="sm:grid sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <label>Name</label>
              <br />
              <input
                type="text"
                className="hover:outline focus:outline-yellow-500 input w-full hover:outline-yellow-500 hover:shadow-2xl"
                placeholder="Enter coffee name"
              />
              <br />
              <label>Supplier</label>
              <br />
              <input
                type="text"
                className="hover:outline focus:outline-yellow-500 input w-full hover:outline-yellow-500 hover:shadow-2xl"
                placeholder="Enter coffee supplier"
              />
              <br />
              <label>Category</label>
              <br />
              <input
                type="text"
                className="hover:outline focus:outline-yellow-500 input w-full hover:outline-yellow-500 hover:shadow-2xl"
                placeholder="Enter coffee category"
              />
            </div>
            <div className="space-y-4">
              <label>Price</label>
              <br />
              <input
                type="text"
                className="hover:outline focus:outline-yellow-500 input w-full hover:outline-yellow-500 hover:shadow-2xl"
                placeholder="Enter coffee price"
              />
              <br />
              <label>Taste</label>
              <br />
              <input
                type="text"
                className="hover:outline focus:outline-yellow-500 input w-full hover:outline-yellow-500 hover:shadow-2xl"
                placeholder="Enter coffee taste"
              />
              <br />
              <label>Details</label>
              <br />
              <input
                type="text"
                className="hover:outline focus:outline-yellow-500 input w-full hover:outline-yellow-500 hover:shadow-2xl"
                placeholder="Enter coffee details"
              />
            </div>
            <div className="col-span-2">
                <label>Photo</label>
            <br />
            <input
              type="text"
              className="hover:outline focus:outline-yellow-500 input w-full hover:outline-yellow-500 hover:shadow-2xl"
              placeholder="Enter photo url"
            />
            </div>
            <button
              type="submit"
              className="btn btn-primary text-slate-900 font-light mt-4 text-xl border border-black col-span-2 w-full"
            >
             Update Coffee Details
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default UpdateCoffee;
