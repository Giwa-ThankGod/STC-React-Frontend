import React, { useState } from "react";
import { data } from "./questionList";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function QuestionDetails() {
  const [question, setQuestion] = useState({
    title: "",
    body: "",
    tag: [],
  });
  const [state, setState] = useState(0);
  const handelUpvote = () => {
    // define code for Upvote
  };
  const handelDownvote = () => {
    // define code for Downvote
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12  text-muted ">
          <h3> {data[0].title}</h3>
          <div className="d-flex gap-3">
            <p className="text-muted">
              Asked: <span className="text-dark">today</span>
            </p>
            <p className="text-muted">
              Viewed <span className="text-dark">11 times</span>
            </p>
            <div className="col float-end">
              <div className=" col-md-6 ">
                <img src="" alt="profile pic" />
                <small className="text-muted">
                  <i> user name </i>
                </small>
                <small className="text-muted align-self-end ">
                  asked <i>1min ago</i>
                </small>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className="row d-flex flex-column flex-md-row">
          <div className="col-12 col-md-6 d-flex">
            <img src="" className="col-1" alt=".." />
             <p>
              {data[0].description} give sequential time series dataset
              resulting accuracy of 64%. Actually I expect 64-67% accuracy as
              there are some overlapping time series data point. But my doubt is
              why did non sequential time series gives 90% accuracy.
               <p>
              tags:
              <a href="#">
                <span type="" class="btn btn-light mx-1">
                  php
                </span>
                <span type="" class="btn btn-light mx-1">
                  python
                </span>
              </a>
            </p>
            </p>
           
          </div>
          <div className="col-12 col-md-6 ">
            <div className="col card p-3">
              <code>
              
                  "content: "./pages/**/*.js, ts, jsx, tsx",
                  "./components/**/*.js, ts, jsx, tsx", "./app/**/*. js, ts,
                  jsx, tsx", ," Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aliquid, vel ullam! Ut nisi unde veritatis.
                  Laborum inventore, illo alias placeat ad at?
                
              </code>
            </div>
            <div className="col pt-3 d-flex justify-content-around">
              <p className="btn btn-sm btn-light mx-3" onClick={handelUpvote}>
                Upvote
              </p>
              <p className="h6">1</p>
              <p className="btn btn-sm btn-dark">Downvote</p>
            </div>
          </div>
        </div>

        <div className="row">
          <h4 className="pb-3">
            {" "}
            <u>15 Answers</u>
          </h4>

          {/* total answers */}

          <div className="col-12 col-md-6 ">
            <p>try to check the following: (works for me)</p>
            <li className="py-2">
              <strong>in next.config.js</strong>
            </li>
            <div className="col card p-3">
              <samp>const nextConfig = experimental: appDir: true,</samp>
            </div>

            <li className="py-2">
              <strong>in tailwind.config.js</strong>
            </li>
            <div className="col card p-3">
              <samp>
                module.exports = content: "./app/**/*.js,ts,jsx,tsx",
                "./pages/**/*.js,ts,jsx,tsx", "./components/**/*.js,ts,jsx,tsx",
                , ...
              </samp>
            </div>
            <div className="col pt-3 d-flex justify-content-around">
              <p className="btn btn-sm btn-light mx-3" onClick={handelUpvote}>
                Upvote
              </p>
              <p>1</p>
              <p className="btn btn-sm btn-dark">Downvote</p>
            </div>
            <hr />
          </div>

          {/* ======== more answers can come in ======= */}
          <h6 className="mb-5">
            <i>more answers can come in..............</i>
          </h6>
        </div>

        <div className=" row border rounded ">
          <p className="h5 mt-2"> related questions</p>
          <div className="">
            <div className="col-12 py-3 border-bottom">
              <span>
                <a href="">
                  How to inject future sequential input for multi-step time
                  series
                </a>
                <small className="text-muted ">
                  asked <i>1min ago</i>
                </small>
              </span>
              <i></i>
            </div>
            <div className="col-12 py-3 ">
              <span className="">
                <a href="">
                  Non-linear multivariate time-series response prediction using
                </a>
                <small className="text-muted ">
                  asked <i>1min ago</i>
                </small>
              </span>
            </div>
          </div>
        </div>
        <p className="my-4">
          Know someone who can answer? Share a link to this{" "}
          <a href="">question</a> via <a href=""> email</a>, , or{" "}
          <a href="">Facebook</a>.
        </p>
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-6">
          <label className="h6 py-3" htmlFor="nswer">
            Your Answer:
          </label>

          <form action="" className="card border-0 ">
            <CKEditor
              className="CKEditor"
              editor={ClassicEditor}
              data={question.body}

              // onChange={(event, editor) => {
              //   console.log(editor.getData());
              //   setQuestion((prevQuestions) => {
              //     return {
              //       ...prevQuestions,
              //       body: editor.getData(),
              //     };
              //   });
              // }}
            />
          </form>

          <button className="btn btn-warning my-4">
            post your Your Answer
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetails;
