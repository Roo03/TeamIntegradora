import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return(
      <footer className="flex items-center justify-between p-5 bg-[#06060A] text-white">
      
      <div className="flex items-center ml-20">
        <span className="mr-2">©</span>
        <p>Todos los derechos reservados a AquaClean</p>
      </div>

      
      <div className="flex space-x-4 mr-20">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-500"
        >
          <FaFacebookF className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-blue-400"
        >
          <FaTwitter className="text-2xl" />
        </a>
      </div>
    </footer>
  
    );
}