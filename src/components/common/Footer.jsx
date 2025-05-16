import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { TbMessage2Filled } from "react-icons/tb";

function Footer() {
  return (
    <>
      <section className="bg-zinc-100 flex justify-center pt-20 pb-5 items-center">
        <div className="space-y-4">
          <img width="75px" src="/more/logo1.png" alt="" />
          <h3 className="text-stone-800 text-4xl">Espresso Emporium</h3>
          <p className="text-black max-w-xl">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex items-center gap-3 text-[#331A15]">
            <FaFacebook size={30} />
            <FaSquareXTwitter size={30} />
            <FaInstagram size={30} />
            <FaLinkedin size={30} />
          </div>
          <div className="space-y-4">
            <h3 className="text-stone-800 text-4xl mt-6">Get in Touch</h3>
            <p className="flex items-center gap-2">
              <IoMdCall /> <span>+8801518435512</span>
            </p>
            <p className="flex items-center gap-2">
              <TbMessage2Filled /> <span>shanto22e@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot /> <span>72, Wall street, King Road, Dhaka</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col items-start gap-4">
          <h3 className="text-stone-800 text-4xl mt-6">Contact with Us</h3>
          <input type="text" className="input w-2xs hover:border-yellow-500 hover:shadow-2xl" placeholder="Name" />
          <input type="email" className="input w-2xs hover:border-yellow-500 hover:shadow-2xl" placeholder="Email" />
          <textarea className="textarea hover:border-yellow-500 hover:shadow-2xl" placeholder="Message"></textarea>
          <button className="btn rounded-full hover:border-yellow-500 hover:shadow-2xl border-2 border-stone-800">Send Message</button>
        </div>
      </section>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
