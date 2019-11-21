import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddResource extends Component {

  render() {

    return (
      <>
        <h1>Add Resource</h1>
        <form>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" placeholder="title"></input>
            <label for="title">Type</label>
            <select>
                <option>Article</option>
                <option>Online Class</option>
                <option>Project</option>
                <option>Meetup</option>
            </select>
            <label for="url">Url</label>            
            <input type="text" name="url" id="url" placeholder="url"></input>
            <label for="url">Description</label>            
            <textarea rows="5" cols="20"></textarea>
            <label for="url">Status</label>            
            <select>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>
            <Link to='/dashboard'>Save</Link>
        </form>
      </>
    );
  }
  
}

export default AddResource;