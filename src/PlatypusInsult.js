import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class PlatypusInsult extends Component {
  state = {
    insult: generateInsult(),
    showInsult: false
  }

  onButtonClickHandler = () => {
    this.setState({insult: generateInsult(), showInsult: true})
  };

  render() {
    return(<div>
      <Button variant="contained" onClick={this.onButtonClickHandler}>Insult Me!</Button>
      {this.state.showInsult && <h2>{this.state.insult}</h2>}
    </div>);
  }
}

var insults = [
  'thick-furred',
  'knuckle-walking',
  'duck-billed',
  'beaver-tailed',
  'otter-footed',
  'carnivorous',
  'egg-laying',
  'stomach-lacking',
  'nipple-less',
  'leathery-egged',
  'venomous',
  'short-limbed',
  'toothless',
  'semi-aquatic',
  'electrolocating',
  'ugly',
  'swimming'
]

var nouns = [
  'mammal',
  'mammal',
  'mammal',
  'platypus',
  'platypus',
  'platypus',
  'extant monotreme',
  'hoax of an animal',
  'hoax of an animal'
]

function generateInsult(){
  var insult_index_1 = Math.floor(Math.random() * insults.length)
  var insult_index_2 = Math.floor(Math.random() * insults.length)

  while (insult_index_1 == insult_index_2){
    insult_index_2 = Math.floor(Math.random() * insults.length)
  }

  var article = 'a'
  console.log(insults[insult_index_1][0])
  if (is_vowel(insults[insult_index_1][0])){
    article = 'an'
  }

  var random_noun_index = Math.floor(Math.random() * nouns.length)
  var insult = 'You\'re ' + article + ' ' +
    insults[insult_index_1] + ', ' +
    insults[insult_index_2] + ' ' +
    nouns[random_noun_index]

  return insult
}

function is_vowel(c){
  if(c == "a" || c == "e" || c == "i" || c == "o" || c == "u" ) {
      return true;
  }
  return false
}
