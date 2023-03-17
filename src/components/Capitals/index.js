import './index.css'
import {Component} from 'react'

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

class Capitals extends Component {
  state = {activeCapital: countryAndCapitalsList[0].id}

  getFilteredCountry = () => {
    const {activeCapital} = this.state
    const displayedCapital = countryAndCapitalsList.filter(
      eachitem => activeCapital === eachitem.id,
    )
    return displayedCapital
  }

  updateCountry = event => this.setState({activeCapital: event.target.value})

  render() {
    const {activeCapital} = this.state
    const displayedCapital = this.getFilteredCountry()

    return (
      <div className="container">
        <div className="content-container">
          <h1>Countries And Capitals</h1>
          <div className="capital-container">
            <select
              onChange={this.updateCountry}
              value={activeCapital}
              className="capitals"
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country</p>
          </div>
          {displayedCapital.map(eachCountry => (
            <h1>{eachCountry.country}</h1>
          ))}
        </div>
      </div>
    )
  }
}

export default Capitals
