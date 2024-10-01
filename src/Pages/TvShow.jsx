import Navbar from "../components/Navbar";

const TvShow = () => {
    const shows = [
      { title: "Great Indian Kitchen", status: "New Season", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741497/netflix/x1exvotvvqyseceeoxux.jpg" },
      { title: "King the Land", status: "", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741497/netflix/rz8wunpsom9ov7egamzw.jpg" },
      { title: "Love Next Door", status: "New Episode", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741498/netflix/b1fdpj0rfxzrdhf4vudd.jpg" },
      { title: "Queen of Tears", status: "", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741499/netflix/adwfnwpxdaxmipxtaydl.jpg" },
      { title: "Crash Landing on You", status: "Watch Now", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741496/netflix/ufc2nwcfngxkgw2zsdlw.jpg" },
      { title: "Mismatched", status: "", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741498/netflix/yfqqk0skylj0c9ccqnyf.jpg" },
      { title: "Business Proposal", status: "", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741497/netflix/cerlmhmvvtrylraeyndi.jpg" },
      { title: "My Demon", status: "", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741498/netflix/anfs27m6wurfdgjqgxv0.webp" },
      { title: "Guardian", status: "", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741497/netflix/fie40ctwmm26grdx7fae.jpg" },
      { title: "Heeramandi", status: "", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741498/netflix/byevk2xwxrqikljymqts.jpg" },
      { title: "Fame Game", status: "", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741497/netflix/yj7e2kbf9ibwlupror0q.jpg" },
      { title: "Money Heist", status: "", imgSrc: "https://res.cloudinary.com/diyqncua4/image/upload/v1727741498/netflix/oodjp82bjq7tzzc0mnd1.jpg" },
    ];
  
    return (
      <div className="bg-background text-foreground p-4 bg-black/90">
        <Navbar/>
        <h1 className="text-2xl font-bold text-white">TV Shows</h1>
        <div className="flex justify-between items-center mt-4">
          <span className="text-muted">Genres</span>
          <button className="bg-secondary text-secondary-foreground p-2 rounded text-white">Suggestions For You</button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {shows.map((show, index) => (
            <div key={index} className="relative">
              <img src={show.imgSrc} alt={show.title} className="w-full h-auto rounded"  style={{height:"800px",width:"400px"}}/>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                <h2 className="font-semibold">{show.title}</h2>
                {show.status && <span className="text-sm">{show.status}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default  TvShow;