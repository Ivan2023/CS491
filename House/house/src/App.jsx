/*no jsx
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)*/
//jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
)



class house {

}
class bedroom extends house{
  console.log('just a quick lil nap')
  return;
}
class bathroom extends house{
  console.log('now i am clean')
  return;
}
class kitchen extends house{
  console.log('smells good in here')
}
class livingroom extends house{
  console.log('i wonder whats on tv rn')
}

ReactDOM.render(
  <div>
    <h1>bedroom</h1>
    <h1>bathroom</h1>
    <h1>kitchen</h1>
    <h1>livingroom</h1>
  </div>
  destination
);

