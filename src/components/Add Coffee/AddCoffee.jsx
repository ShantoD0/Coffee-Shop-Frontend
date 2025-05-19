import { FaArrowLeftLong } from "react-icons/fa6";

function AddCoffee() {
  return (
    <div className="bg-[url('/more/11.png')]">
      <section className="mx-auto max-w-4xl">
        <button className="flex items-center gap-3">
          <FaArrowLeftLong />
          <span className="text-2xl my-12">Back to Home</span>
        </button>
        <div className=" mx-auto space-y-8 mb-8 bg-stone-100 py-16 2xl:px-28 lg:px-16 px-8">
          <h3 className="text-4xl text-center">Add New Coffee</h3>
          <p className="max-w-2xl text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form className="sm:grid sm:grid-cols-2 gap-x-4">
            <div w-full>
              <label>Name</label>
              <br />
              <input type="text" className="input w-full" />
              <br />
              <label>Name</label>
              <br />
              <input type="text" className="input w-full" />
              <br />
              <label>Name</label>
              <br />
              <input type="text" className="input w-full" />
            </div>
            <div>
              <label>Name</label>
              <br />
              <input type="text" className="input w-full" />
              <br />
              <label>Name</label>
              <br />
              <input type="text" className="input w-full" />
              <br />
              <label>Name</label>
              <br />
              <input type="text" className="input w-full" />
            </div>

            <label>Photo</label>
            <br />
            <input type="text" className="input col-span-2 w-full" />
            <button
              type="submit"
              className="btn btn-primary text-slate-900 font-light mt-4 text-xl border border-black col-span-2 w-full"
            >
              Add Coffee
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddCoffee;
