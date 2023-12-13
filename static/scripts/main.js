const math_texts = [
  { title: '', isInput: true, id: "1" },
  { title: '5*x', isInput: false, id: "2" },
  { title: '', isInput: true, id: "3" },
  { title: '150', isInput: false, id: "4" },
  { title: '', isInput: true, id: "5" },
  { title: '60', isInput: false, id: "6" },
  { title: '', isInput: true, id: "7" },
  { title: '40*x', isInput: false, id: "8" },
];

function canc(str) {
  return eval(str)
}

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


function removeXY(math_str){
  let math_str_with_val = "";
  for (let i = 0; i < math_str.length; i++) {
    
    const char = math_str[i];
    if (char === "x"){
      math_str_with_val += "2";
    }
    else{
      math_str_with_val += char;
    }
  }
  return math_str_with_val
}


function doMath(){
  var math_str = "";
  for (let i = 0; i< math_texts.length; i++) {
    const element = math_texts[i];
    if (element.isInput) {
      var val = document.getElementById("input_" + element.id).value;
      math_str += val
    }
    else{
      math_str += element.title;
    }
  }
  
  console.log(removeXY(math_str));
  console.log(canc(removeXY(math_str)))
  console.log(canc(removeXY(question)));
  return math_str;
}


function Math(){
  const listItems = math_texts.map(math_text =>
    <div key={"div_"+math_text.id}>
      {math_text.isInput ? (
        <input type="text" size="1" name="name" maxLength="1" className="answer_input" key={"input_"+math_text.id} id={"input_"+math_text.id}/>
      ) : (
        <h3 key={"text_"+math_text.id}>{math_text.title}</h3>
      )}
    </div>
  );

  return (
    <div className="answer_div">
      {listItems}
      <button onClick={doMath} key="answer_button" >answer</button>
    </div>
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