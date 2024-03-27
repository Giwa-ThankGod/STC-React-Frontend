import React, { useState } from "react";
import Grid from "../components/ui/grid"
import SideBarGrid from "../components/ui/sidebar_grid"
import nanoId from "nano-id";
import RenderHTML from "../components/ui/renderHTML";

import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CodeBlock } from '@ckeditor/ckeditor5-code-block';

const data = [
    {
        "id": 1,
        "title": "Template does not exist error in python django website.",
        "description": "<p>I have my templates folder and my hmtl file already, but the template is not displaying.</p>"
    },
    {
        "id": 2,
        "title": "How can i create an HTML anchor link to redirect user to phoneBook?",
        "description": "I am trying to create an HTML anchor link to redirect user to phoneBook, i have seen this in most website but don't know to add it."
    },
    {
        "id": 3,
        "title": "How to find the lenght of a javascript array.",
        "description": ""
    }
]

export default function QuestionList() {
    const [question, setQuestion] = useState({
        'title': '',
        'body': '',
        'tag': []
    })

    // console.log(question.tag);

    function handleFormChange(event) {
        setQuestion(prevQuestions => {
            const {name, value} = event.target
            const prevTag = prevQuestions.tag

            console.log(event);

            if (name == 'tag' && prevTag.includes(value)){
                return {...prevQuestions}
            }
            return {
                ...prevQuestions,
                [name]: name === 'tag' ? [...prevTag, value] : value
            }
        })

    }

    function sumbitQuestion(event){
        event.preventDefault()
        console.log(question);
    }

    function removeTag(tag){
        setQuestion(prevQuestions => {
            print(prevQuestions.tag)
            return
        })
    }

    const tags = question.tag.map(tag => {
        return (
            <span key={nanoId()} className="btn btn-light p-1 mx-1">
                {tag} &nbsp; &nbsp;
                <i class="fa fa-times" aria-hidden="true" onClick={removeTag(tag)}></i>
            </span>)
    })

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <SideBarGrid key={nanoId()} header="Recent Questions" data={data}/>
                </div>
                <div className="col-md-6 card p-3 border-0 mb-5">
                    <h3>Submit a Question</h3>
                    <RenderHTML htmlContent={question.body}/>
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
                            editor={ ClassicEditor }
                            data={question.body}
                            // config={ {
                            //     plugins: [ CodeBlock ],
                            //     toolbar: ['heading', '|', 'codeBlock', '|', 'undo', 'redo'],
                            // } }
                            // onReady={ editor => {
                            //     // You can store the "editor" and use when it is needed.
                            //     console.log( 'Editor is ready to use!', editor );
                            // } }
                            onChange={ ( event, editor ) => {
                                console.log( editor.getData() );
                                setQuestion(prevQuestions => {
                                    return {
                                        ...prevQuestions,
                                        'body': editor.getData()
                                    }
                                })
                            } }
                        />

                        <label htmlFor="title" className="my-3">Tags:</label>
                        <div>
                            {tags}
                        </div>
                        <input
                            className="form-control my-2" 
                            list="tags" 
                            id="tag" 
                            name="tag"
                            onChange={handleFormChange}
                            value=""
                        ></input>
                        <datalist id="tags" onSelect={handleFormChange}>
                            <option value={"Python"}></option>
                            <option value={"HTML"}></option>
                            <option value={"CSS"}></option>
                            <option value={"PHP"}></option>
                            <option value={"MySQL"}></option>
                            <option value={"Javascript"}></option>
                            <option value={"Django"}></option>
                            <option value={"Database"}></option>
                            <option value={"React"}></option>
                            <option value={"Flutter"}></option>
                            <option value={"Ionic"}></option>
                        </datalist>
                        <button className="btn btn-block btn-success mt-3">Submit</button>
                    </form>
                </div>
                <div className="col-md-12">
                    <Grid key={nanoId()} header="Questions" data={data}/>
                </div>
            </div>
        </div>
    )
}