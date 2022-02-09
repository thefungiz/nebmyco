import React from 'react'

const MembershipDueTile = () => {

  return (
    <div className="box">
      <h2 className="title">Step 2 - Pay Dues</h2>
      <p>We offer a $5 discount if our members pay for 2 years in advance as well as a family discount (price includes all members in a household).</p>
      <p>NOTE: Please ensure that the prior form, "Step 1", has been compeleted prior to payment so that we can process your membership correctly. Thanks!</p>
      <div className="columns">
            <div className="column">
                Type and Duration
            </div>
            <div className="column">
                Cost
            </div>
      </div>
      <div className="columns">
            <div className="column">
                Individual 1-year
            </div>
            <div className="column">
                $20.00 <a title="Donate" href="https://www.paypal.com/donate?hosted_button_id=PCB4K2R88YWWL">
                <img src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" alt="Donate" />
              </a>
            </div>
      </div>
      <div className="columns">
            <div className="column">
                Individual 2-year
            </div>
            <div className="column">
                $35.00 <a title="Donate" href="https://www.paypal.com/donate?hosted_button_id=TZZKH5V5M6D46">
                <img src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" alt="Donate" />
              </a>
            </div>
      </div>
      <div className="columns">
            <div className="column">
                Family 1-year
            </div>
            <div className="column">
                $30.00 <a title="Donate" href="https://www.paypal.com/donate?hosted_button_id=GRUXAU2EYKW2J">
                <img src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" alt="Donate" />
              </a>
            </div>
      </div>
      <div className="columns">
            <div className="column">
                Family 2-year
            </div>
            <div className="column">
                $55.00 <a title="Donate" href="https://www.paypal.com/donate?hosted_button_id=SD2XZ2L4PSD52">
                <img src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" alt="Donate" />
              </a>
            </div>
      </div>
    </div>
  )
};

export default MembershipDueTile;
