import { AiFillEye } from "react-icons/ai";
import { IoPencil } from "react-icons/io5";
import { LuTrash } from "react-icons/lu";

function PopularCard() {
  return (
    <div className="max-w-2xl bg-stone-300/20 flex justify-between items-center flex-col sm:flex-row">
      <img width="185px" src="./1.png" alt="" />
      <div className="flex items-center flex-col px-5 sm:flex-row">
        <div className="text-left space-y-2 mr-10">
          <p>
            <span className="font-bold">Name: </span>Americano Coffee
          </p>
          <p>
            <span className="font-bold">Taste: </span>Sweet and Hot
          </p>
          <p>
            <span className="font-bold">Price: </span>890tk
          </p>
        </div>
        <div className="flex flex-row my-5 sm:flex-col  mr-9 gap-2">
          <button className="btn px-2 bg-primary/80">
            <AiFillEye color="white" size={18} />
          </button>
          <button className="btn px-2 bg-neutral-700/80">
            <IoPencil color="white" size={18} />
          </button>
          <button className="btn px-2 bg-red-500/80">
            <LuTrash color="white" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularCard;
