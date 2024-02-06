CODE till 2nd episode in app js file 
import React from "react";
import ReactDOM from "react-dom";

// React.createElement => Object =>(render method)=> HTML Element
const heading = React.createElement('h1' , {id : "heading 1"} ,'Namaste React');

// JSX Element -> not html inside javasciript
// it is html/XML like syntax 
const jsxHeading = <h1 id="heading" className="head">Namaste React using JSX🚀</h1>;

// React Component -> class based(OLD) and 
//functional component(NEW) = just a function that returns some JSX 
const HeadingComponent = ()=>{
    return (
        <h1>This is a Functional component</h1>
    )
}

const HeadingComponent2 = () =><h2>Also functional component</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<HeadingComponent/>);
------------------------------------------------------
hook is a normal js function that react give to us for a specific purpose 
--------------------------------------------
// use effect is called everytime header component is rendered (if it does not have a dependency array )

// only callback function is mandatory inside the useEffect function 

// if no dependency array -> useeffect called on every component render

// on adding the dependency array 

// if empty dependency array -> useeffect is called only on initial render
// if dependency array has btnName -> every time btnName changes -> use effect called
--------------------------------------------------------

Link tag is using better since it refreshes the component only whereas using anchor tag will result in reloading the entire page .

----------------------------------------------------------------
class based component is a js class only 
class xyz extends React.component{
    // here extends React.Component tells react that this is a class based component
}
React.Component(is a class) comes from 'react'
class based component has render method
render method returns some jsx 
props received in constructor function of class based component 
we have to right super(props) // mandatory (why? -> HW)
whenever a new instance of class is created -> constructor is called then
Now we can use prop anywhere in the class

what does it means "creating an instance of class" ? 
loading a class based component onto the webpage or our app
whenever we do this constructor is called.  (Best place to create a state variable :. we create state variable inside the constructor)
we create state by 
this.state={

}

state varible is modified in class component by this.setstate , this object will contain the updated value of the state variable 

Cycle of how a component is mounted on the UI 