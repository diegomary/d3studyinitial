import React, { Component } from 'react';
import * as d3 from "d3";
import logo from './logo.svg';
import './App.css';
import { CardModel, CardHelper } from './cardmodel'

class Graphic extends Component {

  constructor(props) {
  super(props);   
  this.state = { temp:false, temp1:0 };
  this.minimum = 1;
  this.maximum= 54;
  this.pickedCard = 0;
  this.results  = [];
  this.cards= {
      'hearts': Array.from(new Array(13), (x,i) => i + 1),
      'spades': Array.from(new Array(13), (x,i) => i + 14),
      'clubs':  Array.from(new Array(13), (x,i) => i + 27),
      'diamonds': Array.from(new Array(13), (x,i) => i + 40),
      'jokers' : Array.from(new Array(2), (x,i) => i +53)
   };
   this.getFace = (cardnumber) => {
     let faces = {
       '11':'Jack of',
       '12':'Queen of',
       '13':'King of',
       '1':'Ace of'
     }
     return (faces[cardnumber.toString()] || null);
   }

 
 this.createCardPicker = () => {
       return () => {
             let suits = Object.getOwnPropertyNames(this.cards);
             this.pickedCard = Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum;             
             for (let suit of suits) {
             let pos = this.cards[suit].indexOf(this.pickedCard);
             if(pos > -1) {              
               let cardNumber:number = pos + 1;
               if(suit === 'jokers') return ('Joker' );
               let isFace = this.getFace(cardNumber)
               if(isFace) return (isFace + ' ' + suit );
               else return (cardNumber + ' of ' + suit );}}}     
   }
 }

  componentWillUnmount() {}; 
  componentDidMount() {  };

  pick = () => {
    
    for(let i = 0; i < 25000; i++ ) {
        let entry = new CardModel((this.createCardPicker())(),this.pickedCard)
        this.results.push(entry);
      }

     this.results.sort((x, y) => { return (x.cardNumber) - (y.cardNumber);});
     let cardNumbers = [];
     for (let n = 0; n < 54; n ++) { cardNumbers.push(new CardHelper("", n + 1,0));}
     let c = 0, q = 0;
     for (let res of this.results) {
        q = res.cardNumber;
        if( q === cardNumbers[c].cn ) {
           cardNumbers[c].pick = res.pick;
           cardNumbers[c].count ++ ;
           continue;
          }
        cardNumbers[c+1].count ++;
        c++;
     }
     // let relevantValues = cardNumbers.map( (x) => {
     //    return x.count;
     // });
     console.log(cardNumbers)
     //console.log(relevantValues);
   }   
   
  render() {
    return (
      <div>
      <button onClick = {this.pick}>PICK</button>
        HELLO
      </div>
    );
  }
}

export default Graphic;
