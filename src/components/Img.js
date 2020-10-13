import React from "react";

const Img = (props) => {
  const {
    largeImageURL,
    likes,
    comments,
    previewURL,
    tags,
    views,
    imageHeight,
    imageWidth,
    downloads,
  } = props.img;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card border-danger">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            {likes + " "}
            <i className="fas fa-thumbs-up mr-4"></i>
            {" " + comments + " "}
            <i className="fas fa-comment"></i>
          </p>
          <p className="card-text">
            {views + " "}
            <i className="fas fa-eye"></i>
          </p>
          <p className="card-text">
            {downloads + " "}
            <i className="fas fa-cloud-download-alt"></i>
          </p>
          <a
            href={largeImageURL}
            target="_BLANK"
            rel="noopener noreferrer"
            className=" btn btn-primary btn-block mt-2"
          >
            Full size ({imageHeight + "x" + imageWidth})
          </a>
        </div>
      </div>
    </div>
  );
};

export default Img;
