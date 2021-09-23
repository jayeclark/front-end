import '../../styles/nf.css';
import React from 'react';
import {useState, useRef} from 'react';

export function SignupForm({formName}) {

    console.log(formName);
    const emailRef = useRef(null);

    const [form, setForm] = useState([
      {
        name: 'email',
        id: formName+"-email",
        value: '',
        error: '',
        focused: false,
        validate: function (value) {
          let regex = new RegExp(/^([A-Z0-9._%+-]+)(@)([A-Z0-9.-]+)(\.)([A-Z]{2,})$/,"i");
          return value.search(regex) > -1 ? '' : 'Please enter a valid email.'
        }
      }
    ]);
  
    const getValue = (id, property) => {
      return form.filter(x => x.id === id)[0][property];
    }
  
    const handleChange = e => {
      const fields = [...form];
      let el = -1;
      fields.forEach((x,i)=> x.id === e.target.id ? el = i : null);
      const validate = fields[el].validate;
      fields[el].error = validate(e.target.value);
      fields[el].value = e.target.value;
      setForm(fields);
    }
  
    const inputFocus = event => {
      const fields = [...form];
      let el = -1;
      fields.forEach((x,i) => x.id === event.target.id ? el = i : null);
      if (fields[el].focused === false) {
        fields[el].focused = true;
        setForm(fields);
      }
    }
  
    const inputBlur = event => {
      const fields = [...form];
      let el = -1;
      fields.forEach((x,i) => x.id === event.target.id ? el = i : null);
      if (fields[el].value === '') {
        fields[el].focused = false;
        setForm(fields);  
      }
    }

    React.useEffect(()=>{
      let emailFocus = getValue(formName+'-email','focused');
      if (emailFocus === true) {emailRef.current.focus();}
    },[form])
  
    return (
      <form className="signup-form">
      <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
      <label className="input_id" placeholder="email">
        <input id={formName+'-email'} key={formName+'-email'} ref={emailRef} style={getValue(formName+"-email","error") && getValue(formName+"-email","value") ? {outlineOffset: "-1px", outlineColor: "#dc3545"} : getValue(formName+"-email","value") ? {outlineOffset: "-1px", outlineColor: "#28a745"} : {outlineOffset: "-1px"}} onChange={e => handleChange(e)} onFocus={e => inputFocus(e)} onBlur={e => inputBlur(e)} type="email" className="textfield signup-form-oneline" value={getValue(formName+"-email","value")}></input>
        <label htmlFor={formName+"-email"} style={{cursor:"text"}} className={getValue(formName+"-email","focused") === true ? "label-visible input-hastext" : "label-visible"}>Email address</label>
      </label>
        <button className="btn-large" style={{marginBottom:"10px"}} type="submit">
        <span className="hero-form">Get Started</span>
        <span className="chevron-span"><svg className="chevron" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="white" fillRule="evenodd"></path></svg></span>
      </button>
    </form>
    )
  }

export default SignupForm;