import React, { useEffect, useState } from 'react';
import './schedule.css';
import Card from '../components/Card';
import { useSearch } from '../context/SearchContext';

function Schedule() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const { searchValue } = useSearch();

  const fetchData = () => {
    fetch('http://localhost:3000/data/movieData.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <section id='schedule' className='schedule'>
      <div className='cointainer-fluid'>
        <div className='row'>
          <h4 className='section-title'>Movie List</h4>
        </div>
        <div className='row'>
          <div className='row mt-5'>
            {searchValue &&
              movies
                .filter((item) => item.title === searchValue)
                .map((movie) => <Card key={movie._id} movie={movie} />)}
          </div>
        </div>

        <div className='row mt-5'>
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Card key={movie._id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;

// .filter((item) => item.title === searchValue)
