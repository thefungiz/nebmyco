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
      <div>
        <h2>Step 1 - Your Information</h2>
      </div>
      <p>
        Required fields are marked with a (*)
      </p>
      <form method="post" onSubmit={handleSubmit}>
        <p>
          <label>
            First Name*:<br />
            <input type="text" name="first.name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Last Name*:<br />
            <input type="text" name="last.name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Address Line 1*:<br />
            <input type="text" name="address.line1" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Address Line 2*:<br />
            <input type="text" name="address.line2" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            City*:<br />
            <input type="text" name="address.city" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            State*:<br />
            <input type="text" name="address.state" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Zip*:<br />
            <input type="text" name="address.zip" onChange={handleChange} />
          </label>
        </p>
        <fieldset>
          <legend>Region*</legend>

          {regionList.map(x => {
            console.log(x);
            return (
              <div>
                <input type="radio" id={x.toLowerCase()} name="region" />
                <label for={x.toLowerCase()}> {x}</label>
              </div>)
          })}
        </fieldset>
        <p>
          <label>
            Message (Optional):<br />
            <textarea rows="10" columns="50" name="message" onChange={handleChange} />
          </label>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default MembershipForm;