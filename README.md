# Test-Filters

React test for filtering table data

## Installation

Use standard npm for package management

```bash
npm install
npm start
```
## Task Description

### Make a filtering logic.

* Render people's array into RecortTable. Columns should contain Name and DOT accordingly 
* If Name field is checked the items in <RecordTable> should be filtered alphabetically ascending from a-z. 
* If Age field is checked the items in <RecordTable> should be filtered by age in a descending manner (ascending by date of birth).
* The user can't have both of those optiones checked at the same time. So it should work similar to Radio Buttons.

## Notes


```js
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
```

Use peoples array in RecordTable file for rendering the table values and testing data

```jsx
    <div className="container-fluid">
        <h1 className="main-header">Birthday Records</h1>
        <Filter></Filter>
        <RecordTable/>
    </div>
```

<RecordTable/> and <Filter /> should be sibling components

> Additionally use PropTypes whenever you pass values to components
