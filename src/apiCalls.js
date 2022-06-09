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
  console.log("API", id);
  return fetch(`http://localhost:3001/api/v1/patterns/${id}`)
    .then(res => {
      if (!res.ok) {
      throw new Error("Something went wrong.")
    }
    return res.json();
  })
}


export {fetchAllPatterns, fetchOnePattern}
