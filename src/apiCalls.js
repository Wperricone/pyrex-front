import React, { Component } from 'react';


const fetchAllPatterns = () => {
  return fetch('http://localhost:3001/api/v1/patterns')
  .then(res => {
    if(!res.ok) {
      throw new Error("Something went wrong")
    }
    return res.json();
  })
}

const fetchOnePattern = (id) => {
  return fetch(`http://localhost:3001/api/v1/patterns/${id}`)
    .then(res => {
      if (!res.ok) {
      throw new Error("Something went wrong.")
    }
    return res.json();
  })
};

const postFavorite = ((id, name, img) => {

  return fetch('http://localhost:3001/api/v1/patterns', {
    method: 'POST',
    body: JSON.stringify ({
      "id": id, "name":name, "img":img
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
});


const deleteFavorite = (id) => {
  return fetch('http://localhost:3001/api/v1/favorites', {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application.json'
    },
    body:JSON.stringify({id})
  })
  .then(res => res.json())
  }



export {fetchAllPatterns, fetchOnePattern, deleteFavorite, postFavorite}
