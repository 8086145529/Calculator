
import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState('')
  const [theme,setTheme] = useState('dark')// set the initial value of theme state as dark

// Javascript code to apply the light-theme to the calculator application
//  when we click on the themeicon,if the theme state has dark value,then it's value changes to light.
const changeTheme = () =>{
  if(theme === 'dark'){
    setTheme('light')
  }else{
    setTheme('dark')
  }
 
}

 

  return (
    <div className={`container ${theme}`}>
    <div className={`calculator ${theme}`}>
      {/* Light mode icon */}
   <div onClick={changeTheme} id='themeicon'> 
   {theme === 'dark'?<i class="fa-solid fa-sun fa-fade fa-2xl"></i>
   :<i class="fa-solid fa-moon fa-fade fa-2xl"></i>}
   </div>
        <form>
            {/* <!-- Calculator Display screen --> */}
            <div className="display">
                {/* <!--set readonly attribute to input . normally nammal input box kodukkunath userin enthhenkilum input cheyaan aan.so input tagin readonly attribute koduthal athil pinne userinn onnum type cheyan pattila.only read cheyan mathrame pattu-> 
                 This is useful when you want to display information that should not be changed by the user, but still want the user to be able to see the data. i.e userne kond onnum type cheyan pattade varanam --> */}
                <input className={`${theme}`} value={value} placeholder="0" id="result" type="text" name="display" readonly/>
            </div>
            {/* <!-- Calculator buttons --> */}
            {/* <!-- Ivide input box kondann nammal button undakunnath.ivide inputbox kond button undakiyalum button kond button undakiyalum athinte type button kodukkanam.angane cheythillenkil (type="submit"ooke).display aavunna ellam including numbers sherikum display aavila.just refresh aayi kanath pokkum--> */}
            
               
            <div>
                  <input className={`${theme}`} type="button" value="AC" onClick={(e)=>{setValue("")}} />
                  <input className={`${theme}`} type="button" value="DE" onClick={(e)=>setValue(value.slice(0,-1))} />
                  <input className={`${theme}`} type="button" value="." onClick={(e)=>{setValue(value + e.target.value)}} />
                  <input className={`${theme}`} type="button" value="/" onClick={(e)=>{setValue(value + e.target.value)}} />
              
           </div>
            <div>
               
                <input className={`${theme}`} type="button" value="7" onClick={(e)=>{setValue(value + e.target.value)}} />
                <input className={`${theme}`} type="button" value="8" onClick={(e)=>{setValue(value + e.target.value)}} />
                <input className={`${theme}`} type="button" value="9" onClick={(e)=>{setValue(value + e.target.value)}}/>
                <input className={`${theme}`} type="button" value="*" onClick={(e)=>{setValue(value + e.target.value)}} />
            </div>
            <div>
                <input className={`${theme}`} type="button" value="4" onClick={(e)=>{setValue(value + e.target.value)}} />
                <input className={`${theme}`} type="button" value="5" onClick={(e)=>{setValue(value + e.target.value)}} />
                <input className={`${theme}`} type="button" value="6" onClick={(e)=>{setValue(value + e.target.value)}} />
                <input className={`${theme}`} type="button" value="-" onClick={(e)=>{setValue(value + e.target.value)}} />
            </div>
            <div>
                <input className={`${theme}`} type="button" value="1" onClick={(e)=>{setValue(value + e.target.value)}} />
                <input className={`${theme}`} type="button" value="2" onClick={(e)=>{setValue(value + e.target.value)}}/>
                <input className={`${theme}`} type="button" value="3" onClick={(e)=>{setValue(value + e.target.value)}}/>
                <input className={`${theme}`} type="button" value="+" onClick={(e)=>{setValue(value + e.target.value)}}/>
            </div>
            <div>
                <input className={`${theme}`} type="button" value="00"onClick={(e)=>{setValue(value + e.target.value)}} />
                <input className={`${theme}`} type="button" value="0"onClick={(e)=>{setValue(value + e.target.value)}}/>
                <input className={`equal ${theme}`} type="button" value="="  onClick={()=>setValue(eval(value))} />
                
            </div>
       </form>
    </div>
</div>
  )
}

export default App;
