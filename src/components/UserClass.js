import React from "react"


class UserClass extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name : "Dummy",
                Location:"Dummy",
                avatar_url:"https://dummyurl.com"

            }
      
        }
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Patnana-Harsha");
    const json = await data.json();

    this.setState({
        userInfo:json,
    });
    this.timer = setInterval(() => {console.log("Nameste React")}, 1000);
    
};
componentDidUpdate(){
    console.log("Component Did Update")
};
componentWillUnmount(){

    clearInterval(this.timer)

     // This is called(rendered) when we leave the page for eg: About page to home page.   

};

   

    
render() {

// Here object destructing happened for name and contact. for reference I left contact. we can do destructuring for contact as well.
        
const {name, location, avatar_url,url} = this.state.userInfo; 
        return(
            <div className="center" >
                <img src={avatar_url} className="rounded-[250px] ml-[35vw]" />
                <h1>Name:{name}, Mechanical Engineer</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: {url} </h3>
            </div>

        );
    }  
} 


// Here setState is just like setCount in functional component. we can declare this any where in class

export default UserClass;