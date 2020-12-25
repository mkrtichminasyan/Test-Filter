import React, {useState, useEffect} from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Use this array to render items
const people = [
  {
    name: 'Veronica Mize',
    dob: '11/29/2011'
  }, {
    name: 'Cecilia Olsson',
    dob: '09/16/1992'
  }, {
    name: 'Peter Parker',
    dob: '01/16/1992'
  }, {
    name: 'Jimmy Shergil',
    dob: '12/12/2001'
  }, {
    name: 'Alexander Alfred',
    dob: '02/09/1891'
  }, {
    name: 'Janice Shroyer',
    dob: '12/01/1982'
  }, {
    name: 'Ralph White',
    dob: '11/30/2011'
  }, {
    name: 'Deborah T. Decker',
    dob: '10/31/1999'
  }
];

const RecordTable = ({checkedList, filtered}) => {
  const [peopleArray, setPeopleSorted] = useState(people)

  
  useEffect(() => {
    const peopleSorted = [...peopleArray]
    if(filtered) {
      if(checkedList.age) {
        peopleSorted.sort(function(a,b){
          return new Date(b.dob) - new Date(a.dob);
        });
      } else {
        peopleSorted.sort(function(a, b){
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
          if (nameA < nameB) //sort string ascending
              return -1 
          if (nameA > nameB)
              return 1
          return 0 //default return value (no sorting)
        })
      } 
        setPeopleSorted(peopleSorted)
    } else {
      setPeopleSorted(people)
    }
  }, [filtered, checkedList])


  const RenderPeopleName = () => (<div>
    {peopleArray.map((item, index) => {
    return <div key={index}>{item.name}
        </div>
    })}
  </div>)
  
  const RenderPeopleDateBirthDay = () => (<div>
    {peopleArray.map((item, index) => {
    return <div key={index}>
          {item.dob}
    </div>
    })}
  </div>)

  return (
    <Paper className="width">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-header">Name</TableCell>
            <TableCell className="table-header">Date of Birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>  
          <TableCell >{<RenderPeopleName />}</TableCell>
          <TableCell >git {<RenderPeopleDateBirthDay />}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );}


export default RecordTable;
