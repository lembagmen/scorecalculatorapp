import {useState} from 'react';

function CalculateScore(){
   
   const [inputs, setInputs] = useState({});
   const [errors, setErrors] = useState({});

   let score1 = parseFloat(inputs.firstScore);
   let score2 = parseFloat(inputs.secondScore);
   let score3 = parseFloat(inputs.thirdScore);
   const averageScore = (score1 + score2 + score3) / 3;
   
   const calculator = () => {
      document.getElementById("result").innerHTML = inputs.name + "'s average score is " + averageScore + ".";
   }
   
   const handleChange = (event) =>{
      const fieldName = event.target.name;
      const fieldValue = event.target.value;

      if(fieldName == "firstScore" && fieldValue == ""){
         setErrors(values=>({...values, firstScore: "This field cannot be blank.", firstScore_fieldClass:"error-field"}));
      }
      else{
         setErrors(values=>({...values, firstScore: "", firstScore_fieldClass:""}));
      }

      setInputs(values=>({...values, [fieldName]: fieldValue})); // (...) is to make the previous data unchanged
   }
   
   const handleSubmit = (event) =>{
      event.preventDefault();
      // setInputs({version: 1}); //if existing in the default(line 5)
      
      if(inputs.name == undefined || inputs.name.trim() == ""){
         setErrors(values=>({...values, name: "This field is required.", name_fieldClass:"error-field"}));
      }
      else{
         setErrors(values=>({...values, name: "", name_fieldClass:""}));
      }
      
      console.log(inputs);
      
   }

   return(
      <form className="form" onSubmit={handleSubmit}>
         <div className="row p-5 m-5">
            <div className="col-sm-4 offset-sm-4">
               <label>Name:</label>
               <input type="text" name="name" className={"form-control text-input-field " + errors.name_fieldClass}
               value={inputs.name} onChange={handleChange}></input>
               <div className='errorMessage'>{errors.name}</div>
            </div>

            <div className="col-sm-2 offset-sm-5">
               <label className='mt-4'>First Score:</label>
               <input type="number" name="firstScore" className={"form-control number-input-field " + errors.firstScore_fieldClass}
               value={inputs.firstScore} onChange={handleChange}></input>
               <div className='errorMessage'>{errors.firstScore}</div>
            </div>


            <div className="col-sm-2 offset-sm-5">
               <label className='mt-4'>Second Score:</label>
               <input type="number" name="secondScore" className={"form-control number-input-field " + errors.secondScore_fieldClass}
               value={inputs.secondScore} onChange={handleChange}></input>
               <div className='errorMessage'>{errors.secondScore}</div>
            </div>


            <div className="col-sm-2 offset-sm-5">
               <label className='mt-4'>Third Score:</label>
               <input type="number" name="thirdScore" className={"form-control number-input-field " + errors.thirdScore_fieldClass}
               value={inputs.thirdScore} onChange={handleChange}></input>
               <div className='errorMessage'>{errors.thirdScore}</div>
            </div>
         </div>
         <input type="submit" onClick={calculator}></input>
         <div id='result'></div> 
      </form>
   );
}

export default CalculateScore;