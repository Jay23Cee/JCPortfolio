import libraryxpress from '../img/libraryxpress.jpg';
import wworkers from '../img/wworkers2.jpg';
import wworkers1 from '../img/wworkers_adminn.jpg';
import wworkers2 from '../img/wworkers_career.jpg';
import byteit from '../img/byte.jpg';
import nikon from '../img/Nikon2.png';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface CardProps {
  pro_id: string;
  pro_title: string;
  code_link: string;
  pro_link: string;
 
  summary: string;
  obstacles?: string;
  languages: string[];
  features: string[];

}


const imageMap: Record<string, string[]> = {
  'Library Xpress': [libraryxpress],
  'Willing Workers': [wworkers, wworkers1, wworkers2],
  'Byte It': [byteit],
  'Nikon D850 Website': [nikon],
};


function Card({ pro_id, pro_title, code_link, pro_link, summary, obstacles, languages, features,  }: CardProps) {
  const imagePaths = imageMap[pro_title] || []; 
  const handleDemoClick = () => {
    // Redirect to the project link
    window.location.href = pro_link;
  };
console.log(pro_id, obstacles)
  const handleCodeClick = () => {
    // Redirect to the code link
    window.location.href = code_link;
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-2xl my-4 mx-auto w-full xl:justify-start lg:max-w-4xl p-4 border border-gray-300 shadow-lg">
      <div className="xl:w-2/3 flex justify-center ">
      <Carousel showArrows={true} infiniteLoop={true}>
          {imagePaths.map((imagePath, index) => (
            <div key={index}>
              <img className="w-full h-auto" src={imagePath} alt={pro_title} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="xl:w-2/3 flex flex-col justify-start items-start xl:items-stretch px-4">
        <h1 className="text-xl font-bold my-2 xl:text-left text-gray-800">{pro_title}</h1>
        <p className="text-base leading-normal my-2 xl:text-left text-gray-800">{summary}</p>

        {languages.length > 0 && (
          <div className="flex flex-col mt-4">
            <h2 className="font-semibold text-base mb-2">Languages:</h2>
            <ul className="list-disc list-inside text-sm text-gray-800">
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        )}

        {features.length > 0 && (
          <div className="flex flex-col mt-4">
            <h2 className="font-semibold text-base mb-2">Features:</h2>
            <ul className="list-disc list-inside text-sm text-gray-800">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex mt-4">
          {pro_link && (
            <button
              className="font-bold bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded-md mr-4"
              onClick={handleDemoClick}
            >
              Demo
            </button>
          )}
          {code_link && (
            <button
              className="font-bold bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded-md"
              onClick={handleCodeClick}
            >
              View Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
