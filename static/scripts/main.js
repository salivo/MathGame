const math_texts = [
  { title: '__', isInput: true, id: 1 },
  { title: 'x', isInput: false, id: 2 },
  { title: '___', isInput: true, id: 3 },
];


function Plus() {
    return (
      <button className="button">
        {"+"}
      </button>
    );
}
function Minus() {
    return (
      <button className="button">
        {"-"}
      </button>
    );
}

function Text({text}){

    return <h1>{text}</h1>;
}

function Math(){
  const listItems = math_texts.map(math_text =>
    <form key={math_text.id}>
      {math_text.isInput ? (
        <input type="text" name="name" />
      ) : (
        <h3 key={math_text.id}>{math_text.title}</h3>
      )}
    </form>
  );

  return (
    <>{listItems}</>
  );
}


//Math();

function App() {
    return (
    <div>
        <Text text={question} />
        <Text text={answer} />
        <Plus />
        <Math />
    </div>
    )
}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);