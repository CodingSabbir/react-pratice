import AndOperator from "./componet/AndOperator"
import FunctionAlert from "./componet/FunctionAlert"
import Iff from "./componet/Iff"
import Props from "./componet/Props"
import PropsObj from "./componet/PropsObj"
import TarnaryOparetor from "./componet/TarnaryOparetor"
import Event from "./componet/Event"
import From from "./componet/From"
import UseRef from "./componet/UseRef"

function App() {
  const itemObj={
    name:'sabbir',
    age:22,
    city:'bogura'
  }

  const clickFunc=()=>{
    alert("hello");
  }

  return (
    <>
      <TarnaryOparetor/>
      <AndOperator/>
      <Iff/>
      <Props title="Learn react" heading="i love bangladesh"/>
      <PropsObj item={itemObj}/>
      <FunctionAlert btnClick={clickFunc}/>
      <Event/>
      <From/>
      <UseRef/>
    </>
  )
}

export default App
