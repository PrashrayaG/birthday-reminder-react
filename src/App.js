import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople] = useState(data);// accessing and passing data from data.js

  return (
    <main>
      <section className="container">
        <h3>There are {people.length} birthdays today.</h3> {/* checking the length of list of people*/}

         <List people={people}/>  {/* people(prop) = people state value(People)*/}

        {/* // to clear list */}
        <button onClick={()=> setPeople([])}>
          Clear All Birthday
        </button>

      </section>
    </main>
  );
}

export default App;
