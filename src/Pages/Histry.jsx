import React from 'react';
import Navbar from '../components/Navbar';

const SHOWS = [
  {
    title: 'Heeramandi',
    image: 'Heeramandi.jpeg',
  },
  {
    title: 'Money Heist',
    image: 'Money Heist.jpeg',
  },
  {
    title: 'Breaking Bad',
    image: 'Breaking Bad.jpeg',
  },
  {
    title: 'RRR',
    image: 'rrr.jpeg',
  },
];

const sharedClasses = {
  card: 'flex-shrink-0 w-48',
  image: 'w-full h-auto rounded-lg',
};

const Histry = () => {
  return (
    <div className="bg-background h-screen text-foreground p-4 bg-black/90">
        <Navbar/>
      <h2 className="text-xl font-bold text-white">My List</h2>
      <div className="flex space-x-4 mt-4 overflow-x-auto">
        {SHOWS.map((show, index) => (
          <ShowCard key={index} show={show} />
        ))}
      </div>
    </div>
  );
};

const ShowCard = ({ show }) => {
  return (
    <div className={sharedClasses.card}>
      <img src={show.image} alt={show.title} className={sharedClasses.image} />
      <p className="text-center mt-2">{show.title}</p>
    </div>
  );
};

export default Histry;