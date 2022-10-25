import React from "react"
import style from "./EditorTitle.module.scss"


const EditorTitle = ({onChange, documentTitle}) => {

  return (
        <div><input
          onChange={onChange} 
          type="text" 
          name="title" 
          placeholder="Enter your title here..." 
        />
        </div>
    )
}

export default EditorTitle
