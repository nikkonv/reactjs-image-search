import React, { Component } from 'react';

class Buscador extends Component {
  state = {  }
  
  search_ref = React.createRef();

  handleData = (e) => {
    e.preventDefault();
    // se toma el valor del input del buscador y se envia a App.js
    this.props.searchData(this.search_ref.current.value);
  }

  render() { 
    return ( 
      <form onSubmit={ this.handleData }>
        <div className="row">
          <div className="form-group col-md-10">
            <input
              ref={ this.search_ref}
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca algo. Por ejemplo: pizza"
            />
          </div>
          <div className="form-group col-md-2">
            <button type="submit" className="btn btn-danger btn-block btn-lg">
              <i className="fa fa-search"></i>
            </button>
          </div>
          

        </div>
      </form>
    );
  }
}
 
export default Buscador; 
