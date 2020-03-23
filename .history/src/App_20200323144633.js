import React from 'react';
import './App.css';

function App() {
  return (
    <div classNameName="container">
      <div className="row">
        <div className="col-md-12">
      <form>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label for="validationServer01">First name</label>
            <input type="text" className="form-control is-valid" id="validationServer01" value="Mark" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationServer02">Last name</label>
            <input type="text" className="form-control is-valid" id="validationServer02" value="Otto" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationServerUsername">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend3">@</span>
              </div>
              <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationServer03">City</label>
            <input type="text" className="form-control is-invalid" id="validationServer03" required />
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationServer04">State</label>
            <select className="custom-select is-invalid" id="validationServer04" required>
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid state.
      </div>
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationServer05">Zip</label>
            <input type="text" className="form-control is-invalid" id="validationServer05" required />
            <div className="invalid-feedback">
              Please provide a valid zip.
      </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
            <label className="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
      </label>
            <div className="invalid-feedback">
              You must agree before submitting.
      </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default App;