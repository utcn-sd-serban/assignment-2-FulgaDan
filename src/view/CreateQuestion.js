import React from 'react'

const CreateQuestion = ({ title, text, author, date, 
                        tags, onCreate, onChange}) => (
    <div>
        <h2>{"Add question"}</h2>
        <div className = "container is-fluid">
            <div className = "notification">
            <label class = "label">Title: </label>
            <input value = {title} onChange ={ e=> onChange("title", e.target.value)} />
            <br />
            <label>Text: </label>
            <input value = {text} onChange = {e => onChange("text", e.target.value)} />
            <br />
            <label>Author: </label>
            <input value = {author} onChange = {e => onChange("author", e.target.value)}/>
            <br />
            <label>Date: </label>
            <input value = {date} onChange = {e => onChange("date", e.target.value)}/>
            <br />
            <label>Tags: </label>
            <input value = {tags} onChange = {e => onChange("tags", e.target.value)} />
            <br />
            <button onClick = {onCreate}>Create!</button>
            <hr />
            </div>                 
        </div>
    </div>
);

export default CreateQuestion;