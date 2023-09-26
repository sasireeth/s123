import {Component} from 'react'
import State from '../State'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {cap: countryAndCapitalsList[0]}

  capit = event => {
    const r = countryAndCapitalsList.filter(
      each => each.capitalDisplayText === event.target.value,
    )
    this.setState({cap: r})
  }

  render() {
    const {cap} = this.state
    const {country} = cap
    console.log(cap)
    return (
      <div className="bg">
        <div className="con">
          <h1>Countries and Capitals</h1>
          <div className="c1">
            <select id="sel" onChange={this.capit}>
              {countryAndCapitalsList.map(each => (
                <State key={each.id} sandt={each} />
              ))}
            </select>
            <p>is Capital of which country?</p>
          </div>
          <p id="sup">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
