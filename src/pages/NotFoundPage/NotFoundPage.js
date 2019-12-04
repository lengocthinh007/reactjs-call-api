import React, { Component } from 'react';
class HomePage extends Component {
  render() {
    return (

      <div className="container">

        <div className="alert alert-info">
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          <strong>404!</strong> Không tìm thấy
        </div>
      </div>


    );
  }
}

export default HomePage;
