import React, { Component } from 'react';
import ListContacts from './ListContacts';

// const contacts = [
//   {
//     "id": "karen",
//     "name": "Karen Isgrigg",
//     "handle": "karen_isgrigg",
//     "avatarURL": "http://localhost:5001/karen.jpg"
//   },
//   {
//     "id": "richard",
//     "name": "Richard Kalehoff",
//     "handle": "richardkalehoff",
//     "avatarURL": "http://localhost:5001/richard.jpg"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "handle": "tylermcginnis",
//     "avatarURL": "http://localhost:5001/tyler.jpg"
//   }
// ];


const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};


class App extends Component {
  render() {


    let favoritedMovies = [];
    let unFavoriteMovies = [];


Object.values(movies).map(data=>{
 

let foundMovie=profiles.filter(item=>{return parseInt(item.favoriteMovieID)===data.id});

if(foundMovie.length>0){

  foundMovie.map((item)=>{
    let username=users.filter(usr=>{return usr.id===parseInt(item.userID)});
    console.log(username)
    favoritedMovies.push({name:data.name,username:username[0].name})
  })

 }else{
   unFavoriteMovies.push({name:data.name});
 }
})

console.log(favoritedMovies,unFavoriteMovies)


    return (
      <div>
        {/* <ListContacts contacts={contacts} /> */}







      </div>
    );
  }
}

export default App;
