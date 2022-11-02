import React,{useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label:'Afrikaans',
        value:'af',
    },
    {
      label: 'Arabic',
        value:'ar'
    },
    {
      label:'Hindi',
      value:'hi',
    },
    {
        label:'Dutch',
        value:'nl',
    },
    {
        label:'Spanish',
        value:'es',
    },
]




const Translate = () =>{
    const [language,setLanguage]=useState(options[0])
    const [text,setText]=useState('')


    return (
        <div>
            <div className="ui form">
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label='Select a language' selected={language} onSelectedChange={setLanguage} options={options} category='language'/>
            <hr/>
            <h3 className='ui header'>
                <Convert text={text} language={language}/>
            </h3>
        </div>
    )

}

export default Translate