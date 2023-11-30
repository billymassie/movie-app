import React, { useEffect, useState } from 'react';
import './schedule.css';
import Card from '../components/Card';
import { useSearch } from '../context/SearchContext';

function Schedule() {
  const [data, setData] = useState([]);
  const { searchValue } = useSearch();

  const fetchData = () => {
    fetch('http://localhost:3000/data/movieData.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  const filteredMovies = data.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id='schedule' className='schedule'>
      <div className='cointainer-fluid'>
        <div className='row'>
          <h4 className='section-title'>Movie List</h4>
        </div>
        <div className='row'>
          <div className='row mt-5'>
            {data &&
              data.length > 0 &&
              filteredMovies.map((movie) => (
                <Card key={movie._id} movie={movie} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
