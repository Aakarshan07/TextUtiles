import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] =useState(''); //cant change text like text={hii} WRONG always use setText("hii")
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const handleDownClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handleClearClick=()=>{
        let newtext='';
        setText(newtext);
    }
    const handleAuthenticate=()=>{
        var phoneNumber=[];
        const reg=/\b\d{10}\b/g;
        phoneNumber=[text.match(reg)];
        for(const match of phoneNumber){
            if(match!==0){
                alert("cant enter a personal info");
                let newtext='';
                setText(newtext);
            }
        }
    }
    const handleSpaces=()=>{
        const newtext = text.replace(/\s+/g, ' ').trim();
        setText(newtext);
    }
    const handleCopy=()=>{
        var text1 =document.getElementById("exampleFormControlTextarea1");
        text1.select();
        navigator.clipboard.writeText(text1.value);
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='black'?'black':'white'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} placeholder='Text here' onChange={handleOnChange} rows="5"></textarea> 
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleDownClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleAuthenticate}>Authenticate</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleSpaces}>Clear Extra Spaces</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear text</button>
            </div>
            <div className='container my-3' style={{color: props.mode==='black'?'black':'white'}}>
                <h1>Your text here</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <h1>Reading time</h1>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            </div>
        </div>
    </>
  )
}
