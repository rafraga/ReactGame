import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends_original from "./friends.json";
import "./App.css";


var friends_new_order = [];
var order = [1,2,3,4,5,6,7,8,9,10,11,12];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

order = shuffle(order);

order.forEach(shuffled_id => {
  friends_original.forEach(friend => {
    if(shuffled_id == friend.id){
      friends_new_order.push(friend);
    };
  });
});


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: "",
    count: 0,
    friends: friends_new_order,
    maxcount : 0,
    clicked_ids : []
  };
 
  ClickCard = id => {
    
    let friends_new_order = [];
    order = shuffle(order);
    order.forEach(shuffled_id => {
      friends_original.forEach(friend => {
        if(shuffled_id == friend.id){
          friends_new_order.push(friend);
        };
      });
    });
    this.setState({ friends: friends_new_order });

    //let friends = this.state.friends.filter(friend => friend.id !== id);
    //console.log(friends);
    var total_matches = 0;
    for(var i in this.state.clicked_ids){
      if (String(this.state.clicked_ids[i]) == String(id)){
        total_matches += 1;        
      };
    };

    if(total_matches > 0){
      //you lost
      this.setState({ count: 0,  message: "MAX SCORE: " + this.state.maxcount , clicked_ids : []});
     }else{
       //you scored
       if((this.state.count + 1) > this.state.maxcount){
        this.state.maxcount = this.state.count + 1;
       };
       this.state.clicked_ids.push(id);
       this.setState({ count: this.state.count + 1,  message: "MAX SCORE: " + this.state.maxcount });
     };
    
    if(this.state.clicked_ids.length == 0){
      this.state.clicked_ids.push(id);
      //you scored
      if((this.state.count + 1) > this.state.maxcount){
        this.setState({ maxcount: this.state.count });
      };
      this.setState({ count: this.state.count + 1,  message: "MAX SCORE: " + this.state.maxcount });
    };
    
    };
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <center>
        <h3>Sponge Bob Clicky Game</h3>
        <h4>Click on an image to earn points, but don't click on any more than once</h4>
        <h1></h1>
        </center>
        <Title>
          <p>CURRENT SCORE: {this.state.count}</p>
          <p>{this.state.message}</p>
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard    
            ClickCard={this.ClickCard}
            id={friend.id}
            image={friend.image}
          />  
        ))}
      </Wrapper>
    );
  }
}



export default App;

