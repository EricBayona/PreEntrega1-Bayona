// import logo from '../assets/img/logo.png'


// function Title() {
//   return (
//     <div className="contenedorLogo">
//       <img src={logo} alt="logo" />
//     </div>
//   );
// }
// export default Title;

function Title({titulo}) {
  return (
    <div className="contenedorLogo">
      <h1>{titulo}</h1>
    </div>
  );
}
export default Title;