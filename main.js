//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'r0ulito';
const lastName = 'formateur';


// Solution sans bonus



function FirstName(props) {

  function toUpperCase(name) {
    return name[0].toUpperCase() + name.slice(1)
  }

  return <span>{toUpperCase(props.firstName)}</span>;
}

function LastName(props) {

  function toUpperCaseColor(lastname) {
    return lastName.toUpperCase()
  }

  return <span className="red-text">{toUpperCaseColor(props.lastName)}</span>
}

const helloWorld = <div>
  <FirstName firstName={firstName} />
  <LastName lastName={lastName} />
  </div>

ReactDOM.render(helloWorld, document.querySelector('#app'));
