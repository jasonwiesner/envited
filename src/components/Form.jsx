import LogDateTime from './LogDateTime';

const Form = ({
  onSubmit,
  onChange,
  handleChangeFrom,
  handleChangeTo
}) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="Event Name..." id="eventName" onChange={onChange}/>
    <input type="text" placeholder="Host Name..." id="hostName" onChange={onChange}/>
    <label>
      From:
    <LogDateTime handleChange={handleChangeFrom} id="fromDateTime"/>
    </label>
    <label>
      To:
    <LogDateTime handleChange={handleChangeTo} id="toDateTime"/>
    </label>
    <input type="text" placeholder="Street Name..." id="streetName" onChange={onChange}/>
    <input type="text" placeholder="Suburb..." id="suburb" onChange={onChange}/>
    <input type="text" placeholder="State..." id="state" onChange={onChange}/>
    <input type="text" placeholder="Postcode..." id="postCode" onChange={onChange}/>
    <input type="text" placeholder="Event Photo URL..." id="eventImageUrl" onChange={onChange}/>
    <button type="submit" >
      🥳 Submit Event
    </button>
  </form>
);

export default Form;