import nanoId from "nano-id";
import React from "react";
import RenderHTML from "../components/ui/renderHTML";

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
    },
    {
        "id": 4,
        "title": "Business Loan",
        "description": "These are the expenses spent on my final year clearance."
    },
    {
        "id": 5,
        "title": "April's Salary",
        "description": "These are the expenses spent on my final year clearance."
    }
]

export default function ArticleList(){
    const articles = data.map(item => {
        return (
            <div key={nanoId()} className="col-md-12 card border-0 border-muted p-3 mb-2">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>{item.title}</h5>
                    <span>...</span>
                </div>
                <RenderHTML htmlContent={item.description}/>
            </div>
        )
    })

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    {articles}
                </div>
            </div>
        </>
    )
}