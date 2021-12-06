import './App.css';
import React, { Fragment } from 'react';
import Header from './views/Header';
import Body from './views/Body';
import Footer from './views/Footer';

function App() {
  // var host = "http://127.0.0.1:3004/test";

  var host = "http://99plus.online:3004/test";
  const getData = async ()=>{
    try{
      const res = await fetch(host, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ipAddress" : "99plus.online",
        },
      });
      if( res.ok ){
        // console.log(  )

        const content = await res.json()
        console.log( content )
      }else{

      }
    }catch(error){

    }
  }
  const [load,setLoad] = React.useState(false)
  React.useEffect(()=>{
    for(let i=0;i<=2000;i++) {}
    setTimeout(()=>{
        setLoad(true);
        getData();
    },2500)
  },[])
  return (
    <Fragment>
      <div id='loading' hidden={load}>
        <div id='loading-center'>
          <div id='loading-center-absolute'>
            <div class='cssload-wrap'>
              <div class='cssload-cssload-spinner' />
            </div>
          </div>
        </div>
      </div>
      <Header></Header>

      <Body></Body>

      <Footer></Footer>
    </Fragment>
  );
}

export default App;
