import nanoId from "nano-id";
import React from "react";
import { Link } from "react-router-dom";
import RenderHTML from "./renderHTML";

export default function SideBarGrid(props) {
  const grid = props.data.map((item, i) => {
    if (i >= 3) {
      return;
    }
    return (
      <div
        key={nanoId()}
        className="col-md-12 card border-0 border-muted p-3 mb-2"
      >
        <div className="row d-flex  ">
          <div className="col-md-2 d-flex flex-row flex-md-column flex-lg-column">
            <p className="px-2 px-md-0"> 0 views</p>
            <p className="px-2 px-md-0"> 0 vote</p>
            <p className="px-2 px-md-0"> 0 answers</p>
          </div>
          <div className="col-md-10">
            <h5>
              <a href="">
                <Link to="/questionDetails" className="nav-link">
                  {item.title}
                </Link>
              </a>
            </h5>
            <p className="pt-3">
              <RenderHTML htmlContent={item.description} />
            </p>

           
            <small 
            >
              tags :{item.tag}
            </small>
      \
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="m-3">
      <h3 className="text-center border-2 mb-3">{props.header}</h3>
      <div className="row">{grid}</div>
    </div>
  );
}
