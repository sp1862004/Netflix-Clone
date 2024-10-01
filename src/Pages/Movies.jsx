
import React from 'react';
import Navbar from '../components/Navbar';

const Movies = () => {
  const movies = [
    { title: 'ULAJH', added: 'Recently added', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVS69aKR9_b2EFDQOW1EbIy1lh9UU1oukCg&s' },
    { title: 'Lappataa Ladies', added: 'Recently added', imgSrc: 'Lappataa Ladies.jpeg' },
    { title: 'Sector 36', added: 'Recently added', imgSrc: 'sec36.jpeg' },
    { title: 'Shehzada', added: '', imgSrc: 'Shehzada.jpeg' },
    { title: 'Jaane Jaan', added: '', imgSrc: 'Jaane Jaan.jpeg' },
    { title: 'Khushi', added: '', imgSrc: 'Khushi.jpeg' },
    { title: 'Maharaja', added: '', imgSrc: 'Maharaja.jpeg' },
    { title: 'Intern', added: '', imgSrc: 'Intern.jpeg' },
    { title: 'Shitty Polishetty', added: '', imgSrc: 'm1.jpeg' },
    { title: 'Dream City 2', added: '', imgSrc: 'Dream City 2.jpeg' },
    
  ];

  return (
        
         
          <div className="bg-background h-screen p-4 bg-black/90">
              <Navbar/>
            <h2 className="text-2xl font-bold text-foreground pb-6 text-white	">Movies</h2>
            <div className="flex justify-between items-center mb-4">
              <select className="bg-input text-foreground p-3  rounded ">
                <option >Genres</option>
                {/* Add more genres here */}
              </select>
              <span className="text-muted-foreground text-white">Suggestions For You</span>
            </div>
            <div className="flex overflow-x-auto space-x-4">
              {movies.map((movie, index) => (
                <div key={index} className="relative w-48">
                  <img
                    src={movie.imgSrc}
                    alt={movie.title}
                    className="w-full h-auto rounded-lg shadow-lg" 
                  />
                  {movie.added && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 rounded">
                      {movie.added}
                    </span>
                  )}
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{movie.title}</h3>
                </div>
              ))}
            </div>
          </div>
  );
};

export default Movies;


