function SimpleButton(props) {
  return (
    <button className="bg-blue-700 hover:bg-blue-500 transition duration-50 px-5 py-2 rounded-lg shadow text-white block">
      {props.text}
    </button>
  );
}

export default SimpleButton;
