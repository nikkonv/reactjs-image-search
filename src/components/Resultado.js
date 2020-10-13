import React, { Component } from 'react';
import Img from './Img'
import Pagination from './Pagination'

class Resultado extends Component {
  show = () => {
    const imgs = this.props.imgs;
    if (imgs.length === 0) return null;
    return (
      <React.Fragment>
        <Pagination 
          previousPage = {this.props.previousPage}
          nextPage = {this.props.nextPage}
        />
        <div className="col-12 p-5 row">
          {imgs.map(image => (
            <Img 
              key={image.id}
              img={image}
            />
          ))}
        </div>
        <Pagination 
          previousPage = {this.props.previousPage}
          nextPage = {this.props.nextPage}
        />
      </React.Fragment>
    )
  }
  render() { 
    return ( 
      <React.Fragment>
        {this.show()}
      </React.Fragment>
    );
  }
}
 
export default Resultado;