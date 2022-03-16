import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="file-cont">
          <div className="container">
            <h1>Import File!</h1>
            <input
              className="input-field"
              type="file"
              name="input"
              placeholder={null}
            />
            <br />
            <button type="button" className="button-field">
              Upload now
            </button>
          </div>
        </div>
      </>
    )
  }
}
export default Home
