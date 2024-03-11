import React, { useState } from 'react'
import './Form.css'
import PostandGetData from './PostandGet'

function Form() {
  const [age,setAge]=useState('')
  const[sex,setSex]=useState('')
  const[pain,setPain]=useState('')
  const[bloodPressure ,setbloodPressure]=useState('')
  const[cholestrol ,setCholestrol]=useState('')
  const[bloodSuger ,setbloodSuger]=useState('')
  const[ecg ,setECG]=useState('')
  const[maxHeartRate ,setMaxHeartRate]=useState('')
  const[exerciseInduced ,setExerciseInduced]=useState('')
  const [stDepression,setSTDepression]=useState('')
  const[stSLope,setSTSLope]=useState('')
    
  
      const handelSubmit = async (e) => {
        e.preventDefault();
    
         const {data}=await PostandGetData({ age, sex,pain,bloodPressure,cholestrol,bloodSuger,ecg,maxHeartRate,exerciseInduced,stDepression,stSLope });
          setAge('')
          setSex('')
          setPain('')
          setbloodPressure('')
          setCholestrol('')
          setbloodSuger('')
          setECG('')
          setMaxHeartRate('')
          setExerciseInduced('')
          setSTDepression('')
          setSTSLope('')
          console.log(data);
          console.log('hello');
      };
      

  return (
    <>
      
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Check prediction by filling the details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handelSubmit}>
              <div>
                    <label for="age">Age:</label>
                    <input type="age" id="age" name="age" value={age} onChange={(e)=>setAge(e.target.value)} />
                </div>
                <div>
                    <label for="sex">Sex:</label>
                    <select id="sex" class="form-select form-select-sm" aria-label="small select example" value={sex} onChange={(e)=>setSex(e.target.value)} >
                        Sex:
                        <option selected>Open this select menu</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Others</option>
                    </select>
                </div>
                <div>
                    <label for="chest-pain-type">Chest pain type :</label>
                    <select id="chest-pain-type" class="form-select form-select-sm" aria-label="Small select example" value={pain} onChange={(e)=>setPain(e.target.value)}>
                        <option selected>Open this select menu</option>
                        <option value="1">Typical Angina</option>
                        <option value="2">Atypical Angina</option>
                        <option value="3">Non-Anginal pain</option>
                        <option value="4">Asymptomatic</option>
                      </select>
                </div>
                <div>
                    <label for="blood-pressure">Resting Blood Pressure : </label>
                    <input id="blood-pressure" type="number" min="0" value={bloodPressure} onChange={(e)=>setbloodPressure(e.target.value)}/>
                </div>
                <div>
                    <label for="cholestrol">Cholestrol :</label>
                    <input id="cholestrol" type="number" min="0" value={cholestrol} onChange={(e)=>setCholestrol(e.target.value)}/>
                </div>
                <div>
                    <label for="sugar-level">Fasting Blood Sugar Level :</label>
                    <select id="sugar-level" class="form-select form-select-sm" aria-label="Small select example" value={bloodSuger} onChange={(e)=>setbloodSuger(e.target.value)}>
                        <option selected>Open this select menu</option>
                        <option value="1">Lower than 120 mg/dl</option>
                        <option value="2">Greater than or equal to 120 mg/dl</option>
                      </select>
                </div>
                <div>
                    <label for="ecg">Rest ECG :</label>
                    <select id="ecg" class="form-select form-select-sm" aria-label="Small select example" value={ecg} onChange={(e)=>setECG(e.target.value)}>
                        <option selected>Open this select menu</option>
                        <option value="1">Normal</option>
                        <option value="2">ST-T Wave Abnormality</option>
                        <option value="3">Left Ventricular Hypertrophy</option>
                      </select>
                </div>
                <div>
                    <label for="heart-rate">Max Heart Rate Achieved</label>
                    <input type="number" id="heart-rate" value={maxHeartRate} onChange={(e)=>setMaxHeartRate(e.target.value)}/>
                </div>
                <div>
                    Exercise Induced Angina :
                    <input id="yes" type="radio" name="induced-angina"  value={exerciseInduced} onChange={(e)=>setExerciseInduced(e.target.value)}/>
                    <label for="yes">Yes</label>
                    <input id="no" type="radio" name="induced-angina" value={exerciseInduced} onChange={(e)=>setExerciseInduced(e.target.value)} />
                    <label for="no">No</label>
                </div>
                <div>
                    <label for="st-depression">ST Depression</label>
                    <input id="st-depression" type="number" value={stDepression} onChange={(e)=>setSTDepression(e.target.value)}/>
                </div>
                <div>
                    <label for="st-slope">ST SLope</label>
                    <select id="st-slope" class="form-select form-select-sm" aria-label="Small select example" value={stSLope} onChange={(e)=>setSTSLope(e.target.value)}>
                        <option selected>Open this select menu</option>
                        <option value="1">Upsloping</option>
                        <option value="2">Flat</option>
                        <option value="3">Downsloping</option>
                      </select>
                </div>
                <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" >Submit</button>
            </div>
              </form>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
