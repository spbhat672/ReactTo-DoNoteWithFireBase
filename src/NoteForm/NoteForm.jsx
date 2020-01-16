import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            newNoteContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    // When the user Input Changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
       this.setState({
           newNoteContent: e.target.value,  // the value of the text input
       })
    }

    writeNote(){
        // call a method that sets a noteContent for a note to the value of the input
        this.props.addNote(this.state.newNoteContent)
        
        // set newNoteContent back to an empty string.
        this.setState({
            newNoteContent : '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput" placeholder="Write a new note.."
                value={this.state.newNoteContent} onChange={this.handleUserInput}/>
                <button className="noteButton" onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;