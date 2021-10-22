import React, { useState } from 'react'
import { init, sendForm } from 'emailjs-com';
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

init(process.env.USER_ID);

const MembershipFormTile = () => {

  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [addressLine1, setAddressLine1] = useState(undefined);
  const [addressLine2, setAddressLine2] = useState(undefined);
  const [addressCity, setAddressCity] = useState(undefined);
  const [addressState, setAddressState] = useState(undefined);
  const [addressZip, setAddressZip] = useState(undefined);
  const [region, setRegion] = useState(undefined);
  const [liabilityAgreement, setLiabilityAgreement] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const requiredFields = [
    firstName,
    lastName,
    email,
    addressLine1,
    addressCity,
    addressState,
    addressZip,
    region,
    liabilityAgreement,
    recaptchaVerified,
  ]

  const isFormValid = requiredFields.every(x => x !== undefined && x !== '' && x !== false);

  const handleSubmit = e => {
    e.preventDefault();
    sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target)
      .then(() => console.log('success')) // TODO present message to user
      .catch(e => { console.error('there was an error'); console.error(e) });
    setIsFormCompleted(true);
  };

  const handleRecaptcha = value => {
    if (value) {
      setRecaptchaVerified(true);
    }
  };

  const regionList = ['Omaha', 'Lincoln', 'Tri-Cities', 'Other (Specify in the "Message" field)'];

  const boxContent = isFormCompleted ?
    (
      <div>
        <p className="subtitle">Complete.</p>
        <p>Thanks for filling out the signup form! You should receive an email from us shortly.</p>
      </div>
    )
    : (
      <div>
        <p className="subtitle">All fields are required unless marked optional.</p>
        <form data-netlify="true" data-netlify-recaptcha="true" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">
              First Name
            </label>
            <input className="input is-rounded" type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Mycena" />
          </div>
          <div className="field">
            <label className="label">
              Last Name
            </label>
            <input className="input is-rounded" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="McMycelium" />
          </div>
          <div className="field">
            <label className="label">
              Email
            </label>
            <input className="input is-rounded has-icons-left" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ganoderma@gmail.com" />
            {/* <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span> */}
          </div>
          <div className="field">
            <label className="label">
              Address Line 1
            </label>
            <input className="input is-rounded" type="text" name="addressLine1" value={addressLine1} onChange={e => setAddressLine1(e.target.value)} placeholder="445 Mycological Way" />
          </div>
          <div className="field">
            <label className="label">
              Address Line 2
            </label>
            <input className="input is-rounded" type="text" name="addressLine2" value={addressLine2} onChange={e => setAddressLine2(e.target.value)} placeholder="Apartment 2" />
          </div>
          <div className="field">
            <label className="label">
              City
            </label>
            <input className="input is-rounded" type="text" name="addressCity" value={addressCity} onChange={e => setAddressCity(e.target.value)} placeholder="Mushroom City" />
          </div>
          <div className="field">
            <label className="label">
              State
            </label>
            <input className="input is-rounded" type="text" name="addressState" value={addressState} onChange={e => setAddressState(e.target.value)} placeholder="Nebraska" />
          </div>
          <div className="field">
            <label className="label">
              Zip
            </label>
            <input className="input is-rounded" type="text" name="addressZip" value={addressZip} onChange={e => setAddressZip(e.target.value)} placeholder="77777" />
          </div>
          <div className="field">
            <label className="label">
              Region
            </label>
            <fieldset className="control" value={region} onChange={e => setRegion(e.target.value)}>
              {regionList.map(x => {
                return (
                  <label key={x} className="radio">
                    <input type="radio" id={x.toLowerCase()} value={x} name="region" style={{ marginRight: '.5em' }} />
                    {x}
                  </label>)
              })}
            </fieldset>
          </div>
          <div className="field">
            <label className="label">
              Message (Optional)
            </label>
            <div className="control">
              <textarea className="textarea is-rounded" rows="10" name="message" placeholder="Tell us a little bit about you." />
            </div>
          </div>
          <div className="field">
            <label className="checkbox">
              <input style={{ marginRight: '.5em' }} type="checkbox" checked={liabilityAgreement} onChange={() => setLiabilityAgreement(!liabilityAgreement)} name="waiverAgreement" />
              I agree to the <a style={{ color: 'blue', fontWeight: 'bold' }} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1WVk9yvwaLb6NK72x21cOeH0LThThbDAm/view?usp=sharing">Liability Waiver</a>
            </label>
          </div>
          <div className="field">
            <Recaptcha
              sitekey={RECAPTCHA_KEY}
              onChange={handleRecaptcha}
            />
          </div>
          <div className="field">
            <div className="control">
              <button disabled={!isFormValid} className="button is-link" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )

  return (
    <div className="box">
      <h2 className="title">Step 1 - Your Information</h2>
      {boxContent}
    </div>
  )
};

export default MembershipFormTile;