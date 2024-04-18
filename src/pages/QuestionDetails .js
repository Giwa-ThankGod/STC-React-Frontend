import React, { useState } from "react";
import { data } from "./questionList";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import RenderHTML from "../components/ui/renderHTML";
function QuestionDetails() {
  const [answers, setAnswers] = useState({
    title: "",
    body: "",
    // tag: [],
  });
  const [showAnsw, setshowAnsw] = useState(false);
  console.log(showAnsw);
  const [state, setState] = useState(0);
  const handelUpvote = () => {
    setState(state + 1);
  };

  const handelDownvote = () => {
    if (state > 0) {
      ~setState(state - 1);
    }
  };
  const postAnswer = () => {
    setshowAnsw(true);
  };

  // const editorConfiguration = {
  //   toolbar: {
  //     items: [
  //       "heading",
  //       "|",
  //       "bold",
  //       "italic",
  //       "codeBlock",
  //       "|",
  //       "numberedList",
  //       "bulletedList",
  //       "|",
  //       "link",
  //       "|",
  //       "blockQuote", 
  //       "|",
  //       "imageUpload", 
  //       "|",
  //       "undo",
  //       "redo",
  //     ],
  //   },
  //   language: "en",
  //   image: {
  //     toolbar: [
  //       "imageTextAlternative",
  //       "|",
  //       "imageStyle:full",
  //       "imageStyle:side",
  //       "|",
  //       "imageUpload",
  //     ],
  //     styles: ["full", "side"],
  //   },
  //   codeBlock: {
  //     languages: [
  //       { language: "plaintext", label: "Plain text" },
  //       { language: "javascript", label: "JavaScript" },
  //       { language: "html", label: "HTML" },
  //       { language: "css", label: "CSS" },
  //       { language: "python", label: "Python" },
  //     ],
  //   },
  // };
  // console.log("Editor Configuration:", editorConfiguration);
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
          <div className="col-12 col-md-6 ">
            <p>
              {data[0].description} give sequential time series dataset
              resulting accuracy of 64%. Actually I expect 64-67% accuracy as
              there are some overlapping time series data point. But my doubt is
              why did non sequential time series gives 90% accuracy.
            </p>
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
          </div>
          <div className="col-12 col-md-6 ">
            <div className="col card p-3">
              <code>
                "content: "./pages/**/*.js, ts, jsx, tsx",
                "./components/**/*.js, ts, jsx, tsx", "./app/**/*. js, ts, jsx,
                tsx", ," Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, vel ullam! Ut nisi unde veritatis. Laborum
                inventore, illo alias placeat ad at?
              </code>
            </div>
            <div className="col pt-3 d-flex justify-content-around">
              <p className="btn btn-sm btn-warning mx-3" onClick={handelUpvote}>
                Upvote
              </p>
              <p className="h6">{state}</p>
              <p className="btn btn-sm btn-dark" onClick={handelDownvote}>
                Downvote
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <h4 className="pb-3">
            <u>15 Answers</u>
          </h4>

          {/* total answers */}

        <div className="row  d-flex flex-column flex-md-row   gap-5">
        <div className="col-12 col-md-6">
            {showAnsw ? (
              <div className="  p-3 card border">
                <RenderHTML htmlContent={answers.body} />
              </div>
            ) : (
              "no Answers avaliable for this question"
            )}
            <div className="col pt-3 d-flex justify-content-around">
              <p className="btn btn-sm btn-warning mx-3" onClick={handelUpvote}>
                Upvote
              </p>
              <p>{state}</p>
              <p className="btn btn-sm btn-dark" onClick={handelDownvote}>
                Downvote
              </p>
            </div>
            <hr />
          </div>


          <div className=" col-12 col-md-5 border align-self-end  rounded ">
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
        </div>

          {/* ======== more answers can come in ======= */}
          <h6 className="mb-5">
            <i>more answers can come in..............</i>
          </h6>
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
              data={setAnswers.body}
              editor={ClassicEditor}
              // config={editorConfiguration}
              //               config={{
              //                   toolbar: ['heading', '|', 'bold', 'italic','italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'imageUpload', 'insertTable',
              //      'tableColumn', 'tableRow', 'mergeTableCells', 'mediaEmbed', '|', 'undo', 'redo']

              //  }}

              onChange={(event, editor) => {
                console.log(editor.getData());
                console.log("Editor Instance:", editor);
                setAnswers((prevsetAnswers) => {
                  return {
                    ...prevsetAnswers,
                    body: editor.getData(),
                  };
                });
              }}
            />
          </form>

          <button className="btn btn-warning my-4" type="reset" onClick={postAnswer}>
            post your Your Answer
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetails;
