import React from "react";
import baseImg from "../assets/images/carousel2.jpg";
import Grid from "../components/ui/grid";
import nanoId from "nano-id";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const data = [
  {
    id: 1,
    title: "Template does not exist error in python django website.",
    description:
      "<p>I have created the templates folder and my hmtl file has been placed inside the folder already, but the template is still not displaying.</p>",
  },
  {
    id: 2,
    title:
      "How can i create an HTML anchor link to redirect user to phoneBook?",
    description:
      "I am trying to create an HTML anchor link to redirect user to phoneBook, i have seen this in most website but don't know to add it.",
  },
];

export default function Home() {
  return (
    <div className="container">
      <div className="card p-5 border-0">
        <div className="row justify-contents-center align-items-center">
          <div className="col-md-6">
            <img width="70%" src={baseImg}></img>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card bg-transparent border-0">
              <p className="display-6">
                SaruTech <span className="display-3">Community</span>
              </p>
              <p className="f-16">Efficiency | Management | Productivity</p>
              <p className="text-muted">
                STC is an online community for sarutech developers to mutally be
                assistance to one another in answering questions, providing
                materials and documents e.t.c.
              </p>
              <a href="" className="btn btn-block btn-warning">
                Get Started
              </a>
            </div>
          </div>
          <Grid key={nanoId()} header="" data={data} />
        </div>
      </div>

     


     

    </div>
  );
}
