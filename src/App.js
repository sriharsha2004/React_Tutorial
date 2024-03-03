// import components
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./Home";
import Create from "./create";
import { BrowserRouter , Route ,Switch } from 'react-router-dom';
import Blogdetails from "./blogdetails";
import Notfound from "./Notfound";

// if version of react-router-dom is below 6 then Switch works , if the version above 6 , their
// are many changes like insteard of Switch use Routes from react-router-dom and many others
// hence while installing use this command --> npm install react-router-dom@5.2.0
// to directly install the version5.2 and no problems arise while programming

// function name should start with capital letter
function App() {
  // var age = 214;
  // var m = ()=>{
  //   console.log("Wsdfghj");
  // }
  // var obj = {
  //   name : "harhsa",
  //   age : "19"
  // }
  // var link = "https://www.google.com/"
  return (
    <BrowserRouter>
      <div className="App">
        {/* we can import components in two ways either by specifying the open tag and closed tag
        or using self closing tags
         */}
        {/* <Navbar></Navbar> */}
        <Navbar/>
        {/* ti understand abiout button compnent you can uncomment this component and 
        go to button compnent and understand the concepts of hooks properly */}
        {/* <Buttons/> */}
        {/* Navbar,foooter is common for all the pages so we add other routes into the switch*/}

        {/* we can also define route as <Route path='/' element={<Home/>} /> */}
        <div className="content">
            <Switch>
              <Route path="/" exact> <Home/> </Route>
              <Route path="/create"> <Create/> </Route>
              <Route path="/blogs/:id"> <Blogdetails/> </Route>
              <Route path="*"> <Notfound/></Route>
            </Switch>
        </div>
        {/* observe that we used an exact in the route , if we dont use that then when the
        route is /create then the react looks for a match for this route and stops at / (slash)
        thinking that it is a match , to prevent it we used exact , which only renders a 
        particular template if the complete route matches*/}

        {/* Note : When ever we request a page like add blog from /create then it sends 
        the request to server and react-router will not intercept it beacuse we used 
        anchor tag to navigate , for the react-router to come into the picture we make 
        should make use of Link tag insteard of anchor tag
        refer nav bar component */}

        {/* Noltice that for the blogdetails route we defined a route parameter(dynamic route)
        and inorder to access that route parameter inside the component we used useParams 
        state inside blog-details componenet */}

        <Footer/>
        {/* we can add javascript inside jsx using curly braces { } */}
        {/* below we are printing the value of age */}
        {/* <div>My age is { age }</div> */}
        {/* we can also invoke the methds like this */}
        {/* <div>{ m() }</div>         */}
        {/* any thing we render will be renderd as string */}
        {/* <div> { [1,2,3,4,5]} </div> */}
        {/* we cannot get the access to the objects and booleans using curly braces as above */}
        {/* <div>{obj}</div> */}
        {/* we can also place the link dynamically */}
        {/* <a href={link}>Link to google</a> */}
        {/* we can also include a compnonent insied it just like we included a component inside index.js
         */}
      </div>
    </BrowserRouter>
  );
}

export default App;
