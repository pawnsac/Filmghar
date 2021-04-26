import React from "react";
import movieReviews from './Reviews.json';
import axios from "axios";
import { Button } from "react-bootstrap";
import { FaCheck } from 'react-icons/fa';

import { toast } from "react-toastify";

const Star = ({ starId, marked }) => {
  return (
    <span
      star-id={starId}
      role="button"
      style={{ color: "#ff9933", cursor: "pointer" }}
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

// Create an array of 5: Array.from({length: 5}, (v,i) => i)
const StarRating = props => {

  // Manages on Hover selection of a star
  console.log("INSIDE RATING")
  console.log(props)
  const [selection, setSelection] = React.useState(0);

  // Manages rating selection
  const [rating, setRating] = React.useState(0);
  const [existRate, setExistRate] = React.useState(props.movie.rating);
  
  const [userNum, setUserNum] = React.useState(props.movie.num_of_users);

  const hoverOver = event => {
    let starId = 0;
    if (event && event.target && event.target.getAttribute("star-id")) {
      starId = event.target.getAttribute("star-id");
    }
    setSelection(starId);
  };
  const rateVal = event => {
    setRating(event.target.getAttribute("star-id"))
    console.log("RATE VAL",event.target.getAttribute("star-id"))

  }

  const sendRating = () => {
    console.log("Rating recvd",rating)

    var new_rat=rating
    const ext=parseFloat(props.movie.rating.toString()) *props.movie.num_of_users
    var nums=props.movie.num_of_users+1
    const news=(parseFloat(rating)+parseFloat(ext)).toFixed(2);

    new_rat=news/nums
  
    var mov_card=props.movie
    mov_card.rating=new_rat.toFixed(2)
    mov_card.num_of_users=mov_card.num_of_users+1
console.log(mov_card.rating)

    sendr(mov_card)
  }
 
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  
  var csrftoken = readCookie('csrftoken');
  const sendr=(x)=>{

    fetch('/api/updaterating/'+x.id.toString(), {
      method: 'PUT',
      headers: {'Content-Type': 'application/json',
      "X-CSRFToken":csrftoken},
      body: JSON.stringify({
        rating: x.rating,
        num_of_users:x.num_of_users
      })
    })
    .then( data => data.json()
    )
    .then(
      data => {
        console.log(data,props);
       props.toastt()
      }
    )
    }  
  return (
    <div className="row">
      {/* <div className="btn" onCLick={sendRating}>Submit</div> */}
    <div className="col"
      onMouseOver={hoverOver}
      onMouseOut={() => hoverOver(null)}
      onClick={rateVal}
      style={{color:'white'}}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} marked={selection ? selection > i : rating > i} />
      ))}
     {rating}
     <Button className="btn btn-primary someTweaks ml-1" variant="outline-success" onClick={()=>sendRating()} style={{color:'white'}} > Rate </Button>

    </div>
 
    </div>
    
   
  );
};

export default StarRating;
