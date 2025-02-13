import './Board.css';
import React, { useState } from 'react';

function Board(){
    const [count , setCount] = useState(0);
    const [books,setBooks] = useState([]);
    let dispaly = count > 10 ? [`카운트 / ${count} / 10보다 큼 `] : [`카운트 / ${count} / 10보다 작음 `];
    


    return(
        <div className="App">
            <header className="App-header">
                <h1>react 상태관리 {books}</h1>
                <p>현재 카운트 : {count}</p>
                <button onClick={() => setCount(count+1)}>카운트 증가</button>
                <button
                onClick={()=> setBooks(dispaly)}>리스트 변경</button>
            </header>
            
        </div>
    )
}

function calc(num){
    return num*10;
}

export default Board;