const Button = ({ name }) => {
    return (
      <div className="mx-2 cursor-pointer bg-gray-200 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-300 whitespace-nowrap">
        {name}
      </div>
    );
  };
  
  export default Button;
  