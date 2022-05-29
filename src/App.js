import List from './List'
//import Search from './Search'
import { useState } from 'react';

function getTitle(title) {
  return title;
}
const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  //The status is now in App component, IMPORTANT.
  const [searchTerm, setSearchTerm] = useState('React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      {/* list is a HTML attribute */}
      <List list={searchedStories} />
    </div>
  );
}

// const Search = (props) => {
//   const { search, onSearch } = props;
//   return (
//     <div>
//       <label htmlFor="search">Search: </label>
//       <input
//         id="search"
//         type="text"
//         value={search}
//         onChange={onSearch}
//       />
//     </div>
//   );
// };


const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch}
    />
  </div>
);


export default App;


//Lifting State in React

// Now the Search component doesn’t manage the
// state anymore, but only passes up the event to the App component via a callback handler after the
// text is entered into the HTML input field.