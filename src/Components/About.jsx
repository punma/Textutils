import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState( {
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#13748f':'white'
    }
    // const [btntext, setBtnText] = useState("Enable dark mode")

    // const toggleStyle = ()=>{
    //    if(myStyle.color === 'black'){
    //     setMyStyle({
    //         color: 'white',
    //         backgroundColor: 'black',
    //         border: '1px solid white'
    //     })
    //     setBtnText("Enable Light mode")
    //    }
    //    else{
    //     setMyStyle({
    //         color: 'black',
    //         backgroundColor: 'white'
    //     })
    //     setBtnText("Enable dark mode")
    //    }
    // }

  return (
    <div className='container'style={myStyle}>
                <h1>About Us</h1>
                <div className="accordion" style={myStyle} id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Accordion Item 1</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Accordion Item 2</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               It is hidden by default, until the collapse plugin adds the appropriate classes that we use to 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" >
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Accordion Item 3</strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-2">
        <button onClick={toggleStyle} className="btn btn-primary my-3=true my-2 " >{btntext}</button>
        </div> */}
    </div>
  )
}
