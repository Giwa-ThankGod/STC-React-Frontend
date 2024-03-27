import nanoId from "nano-id";
import React from "react";

import RenderHTML from "./renderHTML";

export default function SideBarGrid(props) {
    const grid = props.data.map((item, i) => {
        if (i >= 3){
            return
        }
        return (
            <div key={nanoId()} className="col-md-12 card border-0 border-muted p-3 mb-2">
                <h5><a href="">{item.title}</a></h5>
                <RenderHTML htmlContent={item.description}/>
                <div className="d-flex justify-content-between align-item-center mt-2">
                    <p className="btn btn-sm btn-dark">Downvote</p>
                    <p className="btn btn-sm btn-light mx-3">Upvote</p>
                </div>
            </div>
        )
    })

    return (
        <div className="m-3">
            <h3 className="text-center border-2 mb-3">{props.header}</h3>
            <div className="row">
                {grid}
            </div>
        </div>
    )
}