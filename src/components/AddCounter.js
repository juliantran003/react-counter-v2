const AddCounter = (props) => {
  return (
    <button onClick={props.click} className={props.addCounterStyle}>
      Add Counter
    </button>
  );
};

export default AddCounter;
