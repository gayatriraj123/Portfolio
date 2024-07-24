import logo from "../assets/kevinRushLogo.png"
import { FaMailBulk } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"


const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-7">
    <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-15" src={logo} alt="logo" />
    </div>
    <div className="m-2 flex item-center justify-center gap-4 text-2xl">
        {/* <FaLinkedin/>
        <FaGithub/>
        <FaXTwitter/>
        <FaInstagram/> */}
        <a href="mailto:gayatrirajguru2002@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaMailBulk/>
        </a>

        <a href="https://www.linkedin.com/in/gayatri-rajguru-9a07501b2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/gayatriraj123" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/RajguruGayatri1?t=5jqClKc8R6c_T9t7Y5Yvmw&s=08" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/gayatri.rajguru.17?igsh=emlubDF5cmZjdzk2" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
    </div>
  </nav>
  
}

export default Navbar
