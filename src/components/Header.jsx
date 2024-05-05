function Header({ text, type }) {
  return type === 'h1' ? (
    <h1
      type={`${type}`}
      className='pl-6 my-[3rem] text-[3.2rem] sm:text-[2.4rem] sm:my-[2rem] xs:text-[1.8rem]'>
      {text}
    </h1>
  ) : (
    <h3 className='text-[2rem] mb-10 sm:text-[1.6rem] sm:my-[1.4rem]'>{text}</h3>
  );
}

export default Header;
