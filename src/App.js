import React, {useState} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';



const App = () => {

const [checkedList, handleCheckedList] = useState({
  name: false,
  age: false
})
const [filtered, setFilter] = useState(false)

  const handleCheckbox = (e) => {

    
    const rowBack = {
      name: 'age',
      age: 'name'
    }
    const {checked, name} = e.target;
    setFilter(checked)
    handleCheckedList({
      [name]: checked,
      [rowBack[name]]:false
    })
  }

  return (
    <div className="container-fluid">
      <h1 className="main-header">Birthday Records</h1>
      <Filter checkedList={checkedList} handleCheckbox={handleCheckbox} />
      <RecordTable filtered={filtered} checkedList={checkedList}/>
    </div>
  );
};

export default App;
