import React, { useState } from 'react';

import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    if (!savedList.includes(movie)) {
      setSavedList( [...savedList, movie] )
    } else {
      setSavedList(savedList.filter((movieToRemove) => movieToRemove.id  !== movie.id))
    }
 
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}  />
      <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
