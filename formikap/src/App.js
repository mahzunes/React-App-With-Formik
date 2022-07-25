import React from 'react';
import './App.css';
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <div className="container">
      <div className="brand-box">

        <h1>Magic Form</h1>
        <p>Build forms in React without the tears</p>

      </div>


      <div className="magic-form">
        <Formik

          initialValues={{
            name: "",
            email: "",
            agree: false,
            favoriteColor: "",
          }}
          validationSchema={
            Yup.object({
              name: Yup.string().required("İsim boş bırakılamaz"),
              email: Yup.string().email().required("Email boş bırakılamaz."),
              agree: Yup.boolean().required("Koşulları kabul etmelisin"),
              favoriteColor: Yup.string().required("Renk girmelisiniz.").oneOf(["Red", "Blue", "Green"])
            })
          }
          onSubmit={(values, { resetForm, setSubmiting }) => {
            console.log(values);
            setTimeout(() => {
              setSubmiting(false);
              resetForm();
            }, 2000)
          }}
        >

          {({ values, errors, handleSubmit, handleReset, handleChange, dirty, isSubmitting, touched }) => (
            <form onSubmit={handleSubmit}>
              <h3>Kaydol</h3>
              <label htmlFor='name'>İsim</label>
              <input type="text" value={values.name} onChange={handleChange} placeholder='İsminizi giriniz.' className='input' id='name'  ></input>
              {
                errors.name && touched.name && (
                  <div className='input-feedback'>{errors.name}</div>
                )
              }

              <label htmlFor='email'>Email</label>
              <input type="text" value={values.email} onChange={handleChange} placeholder='example@gmail.com' className='input' id='email'   ></input>
              {
                errors.email && touched.email && (
                  <div className='input-feedback'>{errors.email}</div>
                )
              }



              <label htmlFor='favoriteColor'>Favori Renk</label>
              <select id='favoriteColor' value={values.favoriteColor} onChange={handleChange} style={{ marginTop: 10, width: "150px", padding: "10px 15px", outline: "none" }}>
                <option value="" label='Renk Seç'></option>
                <option value="Red" label='Kırmızı'></option>
                <option value="Blue" label='Mavi'></option>
                <option value="Green" label='Yeşil'></option>
              </select>

              <div className='checkbox topMargin'>
                <input id='agree' type="checkbox" value={values.agree} onChange={handleChange}></input>
                <label htmlFor='agree' className='checkbox-label'>Sözleşmeyi okudum kabul ediyorum </label>
              </div>




              <button type='submit' disabled={!dirty || isSubmitting}>Kaydol</button>

            </form>
          )}
        </Formik>


      </div>

    </div>
  );
}

export default App;
