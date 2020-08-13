import React from 'react';

class AttendanceBook extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      students: [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
        {id: 3, name: 'C'},
        {id: 4, name: 'D'},
        {id: 5, name: 'E'},
        {id: 6, name: 'F'},
        {id: 7, name: 'G'},
        {id: 8, name: 'H'},
        {id: 9, name: 'I'},
        {id: 10, name: 'J'},
        {id: 11, name: 'K'},
      ]
    }
  }

  render(){
    var {students} = this.state;

    return(
      <ul>
        {students.map((student)=>
          <li key={student.id}>{student.name}</li>
        )}
      </ul>
    )
  }
}

export default AttendanceBook;
