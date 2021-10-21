import React from 'react'

const MembershipForm = () => {

  const handleChange = e => {
    console.log(e.target);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  const regionList = ['Omaha', 'Lincoln', 'Tri-Cities', 'Other'];

  return (
    <div>
      <h2 className="title">Step 1 - Your Information</h2>
      <p className="subtitle">All fields are required unless marked optional.</p>
      <form method="post" onSubmit={handleSubmit}>
        <input className="input is-rounded" type="text" name="first.name" placeholder="First Name" onChange={handleChange} />
        <input className="input is-rounded" type="text" name="last.name" placeholder="Last Name" onChange={handleChange} />
        <input className="input is-rounded" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="input is-rounded" type="text" name="address.line1" placeholder="Address Line 1" onChange={handleChange} />
        <input className="input is-rounded" type="text" name="address.line2" placeholder="Address Line 2" onChange={handleChange} />
        <input className="input is-rounded" type="text" name="address.city" placeholder="City" onChange={handleChange} />
        <input className="input is-rounded" type="text" name="address.state" placeholder="State" onChange={handleChange} />
        <input className="input is-rounded" type="text" name="address.zip" placeholder="Zip" onChange={handleChange} />
        <fieldset className="control">
          <legend>Region</legend>
          {regionList.map(x => {
            console.log(x);
            return (
            <label className="radio" htmlFor={x.toLowerCase()}>
              <input type="radio" id={x.toLowerCase()} name="region" />
              {x}
            </label>)
          })}
        </fieldset>
        <textarea className="textarea is-rounded" rows="10" name="message" placeholder="Message (Optional)" onChange={handleChange} />
        <label className="checkbox" style={{display: 'block'}}>
          <input type="checkbox" name="waiver.agreement" />
          I agree to the <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1WVk9yvwaLb6NK72x21cOeH0LThThbDAm/view?usp=sharing">Liability Waiver</a>
        </label>
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  )
};

export default MembershipForm;