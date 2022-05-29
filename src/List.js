const list = [
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


// JavaScript’s spread operator allows us to literally spread all key/value pairs of an object to another
// object. This can also be done in React’s JSX. Instead of passing each property one at a time via
// props from List to Item component as before, we can use JavaScript’s spread operator to pass all the
// object’s key/value pairs as attribute/value pairs to a JSX element:


const List = ({ list }) => (
    <ul>
        {list.map((item) => (
            //<Item key={item.objectID} item={item} />
            <Item key={item.objectID} {...item} />
        ))}
    </ul>
);
const Item = ({ title, url, author, num_comments, points }) => (
    <li>
        <span>
            <a href={url}>{title}</a>
        </span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>
    </li>
);



export default List;