
import { Component, useState } from "react";
import { React } from "react";
import redirect from 'nextjs-redirect'
import { useRouter } from 'next/router'


class SignIn extends Component {

 constructor(props) {
   super(props);
   let loggedIn = false
   this.state = {
     username:'',
     password:'',
     loggedIn
   }

   this.onChange=this.onChange.bind(this)
   this.SubmitForm=this.SubmitForm.bind(this)
 }

  onChange(e){
    this.setState( {
      [e.target.name]: e.target.value
    })
  }

  SubmitForm(e){
    e.preventDefault()
    const {username,password} = this.state
    if (username =="admin" && password =="admin"){
      localStorage.setItem("token", "login")
      this.setState( {
        loggedIn: true
      })

    }

  }


  render() {
    if (this.state.loggedIn) {
      const Redirect = redirect('/Home');
      return <Redirect />
    }
    else {
      
      return (
        
        <div
        className="max-w-[400px] p-[70px] mx-auto rounded-lg"
        style={{
          background: `rgba(0,0,0,0.7)`,
        }}
      >
          
          <form className="grid" onSubmit={this.SubmitForm}>
             <h1 className="text-left font-semibold text-xl mb-[25px]">S'identifier</h1>
            <input type="text" placeholder="Email" name="username" value={this.state.username} className="outline-none h-[40px] p-2 mb-3 text-black rounded-md" 
                  onChange={this.onChange}/>
                  <br/>

            <input type="password" placeholder="password" name="password"  className="outline-none h-[40px] p-2 mb-3 text-black rounded-md" value={this.state.password}
                  onChange={this.onChange}/>
                  <br/>      
           {/* On aurait pu mettre un input a la place du button :
            <input type="submit" className="px-4 py-3 border-none mt-5 text-base rounded-md bg-[#e50914]"/> */}

           <button type="submit" className="px-4 py-3 border-none mt-5 text-base rounded-md bg-[#2e8b57] hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
        >
          S'identifier
        </button>

            <h4 className="text-left mt-[30px]">
          <span className="text-gray-500"> Première visite sur Meet29 ? </span>
          {/* <button type="text" onClick={() => router.push("/")}className="px-4 py-3 border-none mt-5 text-base rounded-md bg-[#2e8b57] hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20" */}
        {/* > */}
          {/* Inscrivez-vous. */}
        {/* </button> */}
          
          <a className="cursor-pointer hover:underline" onClick={() => router.push("/")}>Inscrivez-vous.</a>
        
        </h4>
  

          </form>
        
        </div>
       
      );  
      
    }
  }
}
export default SignIn;