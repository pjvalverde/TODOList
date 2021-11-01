function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  
    return <div className ="btn-group-vertical" className="btn btn-outline-secondary" onClick={handle}>{todo.text} (-)</div>
  

}
