import React from 'react'
import CardSlider from "./CardSlider"

//react.memo is used when props are not going to be changed. memo used for code optimsation
export default React.memo(function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  }
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20, 30)} />
      <CardSlider title="Popular on Netflix" data={getMoviesFromRange(30, 40)} />
      <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
    </div>
  )
})