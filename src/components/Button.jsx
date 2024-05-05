function Button({ children, onClick, className, type }) {
  const classes = `${className || ''}`;
  const buttonStyles = {
    back: 'absolute lg:top-[13%] right-[5%] font-medium bg-white text-black px-8 py-2 rounded-full',

    small:
      classes +
      ' py-[1.2rem] px-[1.8rem] rounded-full md:text-[1.4rem] hover:-translate-y-[0.6rem] duration-500 transition-all text-[#a98b8a] bg-[#282128]',
  };

  return (
    <button
      className={buttonStyles[type]}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
