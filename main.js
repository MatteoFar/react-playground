//const helloWorld = React.createElement('h1', {}, 'Hello world!');


const firstname = 'matteo'
const lastname = 'farigu'

const toUpperCase = (name, name1) => {
  let a = name.charAt(0).toUpperCase() + name.slice(1)
  let b = name1.charAt(0).toUpperCase() + name1.slice(1)
  return a + ' ' + b;
}

const helloWorld = <div className="test">{toUpperCase(firstname, lastname)}</div>;

ReactDOM.render(helloWorld, document.querySelector('#app'));
