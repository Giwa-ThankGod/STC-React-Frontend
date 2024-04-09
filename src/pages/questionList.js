import React, { useState } from "react";
import Grid from "../components/ui/grid";
import SideBarGrid from "../components/ui/sidebar_grid";
import nanoId from "nano-id";

import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CodeBlock } from '@ckeditor/ckeditor5-code-block';

export const data = [
  {
    id: 1,
    title: "Template does not exist error in python django website.",
    description:
      "I have my templates folder and my hmtl file already, but the template is not displaying.",
    tag: "php python django",
  },
  {
    id: 2,
    title:
      "How can i create an HTML anchor link to redirect user to phoneBook?",
    description:
      "I am trying to create an HTML anchor link to redirect user to phoneBook, i have seen this in most website but don't know to add it.",
    tag: "html js",
  },
  {
    id: 3,
    title: "How to find the lenght of a javascript array.",
    description: " im having issues finding length of arry in javaScript",
    tag: "Javascript",
  },
  {
    id: 4,
    title: "How to find the lenght of a javascript array.",
    description: " im having issues finding length of arry in javaScript",
    tag: "Javascript",
  },
];

let questionTags = [
  "Python",
  "Azure",
  "AWS",
  "Database",
  "Javascript",
  "Go",
  "CSS",
  "HTML",
  "Django",
  "PHP",
];

export default function QuestionList() {
  const [question, setQuestion] = useState({
    title: "",
    body: "",
    tag: [],
  });

  // console.log(question.tag);

  function handleFormChange(event) {
    setQuestion((prevQuestions) => {
      const { name, value } = event.target;
      const prevTag = prevQuestions.tag;

      // Helps to avoid duplicates from the tag array.
      if (
        name === "tag" &&
        prevTag.includes(value.charAt(0).toUpperCase() + value.slice(1))
      ) {
        return { ...prevQuestions };
      }

      // Allows for only tags in the questionTag to be selected.
      if (name === "tag" && !questionTags.includes(value)) {
        if (event.nativeEvent.data === " ") {
          questionTags.push(value.trimEnd()); // remove the space from the end of the value.
          // Eliminate duplicate tags from the array
          questionTags = questionTags.filter(
            (tag, index) => questionTags.indexOf(tag) === index
          );
        }
        return { ...prevQuestions };
      }

      return {
        ...prevQuestions,
        [name]: name === "tag" ? [...prevTag, value] : value,
      };
    });
  }

  function sumbitQuestion(event) {
    event.preventDefault();
    // console.log(question);
  }

  const tags = question.tag.map((tag, index) => {
    return (
      <span key={nanoId()} className="btn btn-light p-1 mx-1">
        {tag} &nbsp; &nbsp;
        <i
          class="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            setQuestion((prevQuestions) => {
              prevQuestions.tag.splice(index, 1);
              return { ...prevQuestions };
            });
          }}
        ></i>
      </span>
    );
  });

  const tagOptions = questionTags.map((option) => {
    return <option value={option}></option>;
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className=" col-lg-7 col-md-12  col-sm-12 ">
          <SideBarGrid key={nanoId()} header="Recent Questions" data={data} />
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 card p-3 border-0 ">
          <h3>Submit a Question</h3>
          <form className="card border-0" onSubmit={sumbitQuestion}>
            <label htmlFor="title">Title:</label>
            <input
              className="form-control mb-2"
              type="text"
              id="title"
              name="title"
              onChange={handleFormChange}
              value={question.title}
            ></input>

            <label htmlFor="title">Body:</label>

            <CKEditor
              editor={ClassicEditor}
              data={question.body}
              // config={ {
              //     plugins: [ CodeBlock ],
              //     toolbar: ['heading', '|', 'codeBlock', '|', 'undo', 'redo'],
              // } }
              // onReady={ editor => {
              //     // You can store the "editor" and use when it is needed.
              //     console.log( 'Editor is ready to use!', editor );
              // } }
              onChange={(event, editor) => {
                console.log(editor.getData());
                setQuestion((prevQuestions) => {
                  return {
                    ...prevQuestions,
                    body: editor.getData(),
                  };
                });
              }}
            />

            <label htmlFor="title" className="my-3">
              Tags:
            </label>
            <div>{tags}</div>
            <input
              className="form-control my-2"
              list="tags"
              id="tag"
              name="tag"
              onChange={handleFormChange}
            ></input>
            <datalist id="tags" onSelect={handleFormChange}>
              {tagOptions}
            </datalist>
            <p className="text-muted">
              <i className="fa fa-info-circle"></i> To add a new tag end it with
              a space.
            </p>
            <button className="btn btn-block btn-success mt-3">Submit</button>
          </form>
        </div>
        <div className="col-md-12">
          <Grid key={nanoId()} header="Top Questions" data={data} />
        </div>
      </div>
    </div>
  );
}

// ====== code for the side nav bar

// .sidebar {
//   position: fixed;
//   top: 51px;
//   bottom: 0;
//   left: 0;
//   z-index: 1000;
//   display: block;
//   padding: 20px;
//   overflow-x: hidden;
//   overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
//   background-color: #f5f5f5;
//   border-right: 1px solid #eee;
//   }
/* <div class="container-fluid"> */

//   <div class="row">
//   <div class="col-sm-3 col-md-2 sidebar">
//   <ul class="nav nav-sidebar">
//       <li class="active"><a href="#">Overview</a></li>
//       <li><a href="#">Reports</a></li>
//       <li><a href="#">Analytics</a></li>
//       <li><a href="#">Export</a></li>
//   </ul>
//   </div>
//   <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
//   <h1 class="page-header">Dashboard</h1>
//   ...

//   </div>
//   </div>
//   </div>
