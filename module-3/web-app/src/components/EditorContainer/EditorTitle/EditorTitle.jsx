import React from "react"
import style from "./EditorTitle.module.scss"

const EditorTitle = ({value, onChange}) => 
  <input
    className={style.editorTitle}
    value={value}
    onChange={onChange}
    type="text" 
    name="title" 
    placeholder="Enter your title here..." 
  />

export default EditorTitle
