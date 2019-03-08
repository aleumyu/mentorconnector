import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        
        <div><Header/></div>
        
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Be engaged and help others!</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Mentors</a>
              <a href="#" className="btn btn-secondary my-2">Mentees</a>
            </p>
          </div>
        </section>
      
        <div className="text-center">
          <div className="container marketing">
            <div className="row">
              <div className="col-lg-4">
                <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
                <h2>Heading</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>{/*<!-- /.col-lg-4 -->*/}
              <div className="col-lg-4">
                <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
                <h2>Heading</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>{/*<!-- /.col-lg-4 -->*/}
              <div className="col-lg-4">
                <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
                <h2>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>{/*<!-- /.col-lg-4 -->*/}
            </div>{/*<!-- /.row -->*/}


            {/*START THE FEATURETTES*/}

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
              </div>
            </div>

            <hr class="featurette-divider"></hr>

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div classNAme="col-md-5 order-md-1">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
              </div>
            </div>

            <hr className="featurette-divider"/>

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
              </div>
            </div>

            <hr class="featurette-divider"/>
        
            {/*<!-- /END THE FEATURETTES -->*/}
          
          </div>{/*<!-- /.container -->*/}
        </div>
        <div><Footer/></div>
      </div>
    );
  }
}

export default Home;

