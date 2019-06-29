import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  deleteSmurf = (e, id) => {
    console.log(id);
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper #2196f3 blue">
            <a href="#" className="brand-logo center">
              Smurf Database
            </a>
          </div>
        </nav>
        <div className="container" style={{ margin: '40px auto' }}>
          <form onSubmit={this.addSmurf}>
            <input
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChanges}
              name="name"
            />
            <input
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChanges}
              name="age"
            />
            <input
              placeholder="Height"
              value={this.state.height}
              onChange={this.handleChanges}
              name="height"
            />
            <button
              style={{ margin: '40px auto' }}
              className="waves-effect #2196f3 blue btn"
            >
              Add Smurf
            </button>
          </form>
        </div>
        <div
          className="container"
          style={{ display: 'flex', flexWrap: 'wrap-reverse' }}
        >
          {this.props.smurfs.map((smurf, index) => (
            <div>
              <div key={index} class="row">
                <div class="col s12">
                  <div class="card #2196f3 blue">
                    <div class="card-content white-text">
                      <span class="card-title">{smurf.name}</span>
                      <p>Age: {smurf.age}</p>
                      <p>Height: {smurf.height}</p>
                    </div>
                    <div class="card-action">
                      <button
                        onClick={e => this.deleteSmurf(e, smurf.id)}
                        className="waves-effect #ff5252 red accent-2 btn"
                      >
                        Delete Smurf
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
