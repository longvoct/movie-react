import { React, useState } from "react";

function withLoading(Component) {
  return (props) => {
    const [data, setData] = useState([1, 2, 3]);
    if (!data || data.length === 0) return <div>Loading...</div>;
    return <Component data={data} {...props}></Component>;
  };
}
export default withLoading;
//function return function
//High order function: map, filter, some, every, reduce
//[1,2,3].map((item,array)=>{})
// The map is a function  and it also returns another function.
/**
* Grammar:
Another + singular noun
Another + number + plural noun
When using plural nouns, we use other.
- Others use for Objet
Example:
These books are boring. Give me others.
This books are boring. Give me another.
*/
