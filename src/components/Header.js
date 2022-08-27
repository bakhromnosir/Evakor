function Header() {

    const click = () => {
        console.log("Salom ");
    }

    return (
      <header>
        Man headerman <br />
        <button onClick={click}></button>
      </header>
    );
  }
  
  export default Header;
  