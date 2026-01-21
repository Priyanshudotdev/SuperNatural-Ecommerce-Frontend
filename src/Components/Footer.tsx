import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full flex items-center h-[25rem] bg-n-1 justify-end flex-col ">
      <img
        src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1511904474463-H5WGFU0BNHV2LO5ZAK47/image-asset.gif?format=1500w"
        alt=" FooterImage "
      />
      <span className="w-full h-[5rem] flex items-center justify-center gap-x-10 ">
        <a className="hover:opacity-[0.5]" 
          target="_blank"
          href="https://x.com/Priyanshu_twi">
          <FaXTwitter className="w-8 h-8 cursor-pointer lg:w-10 lg:h-10  " />
        </a>
        <a
          className="hover:opacity-[0.5]"
          target="_blank"
          href="https://github.com/Priyanshudotdev"
        >
          <IoLogoGithub className="w-8 h-8 cursor-pointer lg:w-10 lg:h-10 hover:opacity-[0.5] " />
        </a>
        <a
          className="hover:opacity-[0.5]"
          target="_blank"
          href="https://linkedin.com/in/priyanshukayarkar"
        >
          <IoLogoLinkedin className="w-8 h-8 cursor-pointer lg:w-10 lg:h-10 hover:opacity-[0.5] " />
        </a>
      </span>
      <span className="py-6">
        <h1 className="">
          Build with 💖 by{" "}
          <span className="font-bold relative text-[1rem] md:text-[1.1rem] ">
            PRIYANSHU
          </span>
        </h1>
      </span>
    </footer>
  );
};

export default Footer;
