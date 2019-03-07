import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';


class Footer extends Component {



  render() {
    return (
      <div className="App">
        
        <div className="body">

       

          <footer className="footer">
            <div className="container">
              <span className="text-muted">Place sticky footer content here.</span>
            </div>
          </footer>

        </div>

      </div>

    );
  }
}

export default Footer;