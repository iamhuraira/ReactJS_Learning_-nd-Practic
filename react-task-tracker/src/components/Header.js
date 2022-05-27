import propTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  );
}
Header.defaultProps ={
  title : 'Task Tracker'
}
Header.propTypes ={
  title : propTypes.string.isRequired,
}
const headingStyle = {
  color : 'red',
  backgroundColor : 'green',
  width : '50%',
  margin:'auto',
  marginTop : '30px'
}
export default Header;