

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

function App() {
    return (
    <div>
        <Greeting name="world" />
        <Text text={question} />
        <Text text={answer} />
        <Plus />
        <Minus />
    </div>
    )
}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);