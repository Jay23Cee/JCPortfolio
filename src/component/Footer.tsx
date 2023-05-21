
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';


export default function Footer() {
  return (
    <div className="bg-gray-800 text-white ">
      <footer className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-base">
              © {new Date().getFullYear()} Jackson's Portfolio
            </p>
          </div>
          <div className="flex gap-4">
            <a target="_blank" rel="noopener noreferrer" href="http://www.twitter.com/jc23_dev" className="hover:text-blue-500">
              <FiTwitter />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/jay23cee" className="hover:text-gray-500">
              <FiGithub />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/jay23cee" className="hover:text-blue-700">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
