import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./Portfolio";
import Quote from "./Freecodecamp/Random-Quote-Machine/Quote";
import Markdown from './Freecodecamp/Markdown-Previewer/Markdown'
import Drummachine from './Freecodecamp/Drum-Machine/Drummachine'
import Calculator from './Freecodecamp/JavaScript-Calculator/Calculator'
import Clock from './Freecodecamp/25+5_Clock/Clock'
import Contact from './Contact'
import Nopage from './Nopage'
import Mainproducts from "./Personal_project/Products/Mainproducts";
import Todo from "./Personal_project/Todo_App/Todo"
import './Css/Portfolio.css'
import 'animate.css/animate.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
    return(
        <div>
            <Portfolio />
        </div>
    )
}
function Mainpage() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Quote" element={<Quote />} />
                    <Route path="/Markdown" element={<Markdown />}/>
                    <Route path="/Drummachine" element={<Drummachine />}/>
                    <Route path="/Calculator" element={<Calculator />}/>
                    <Route path="/Clock" element={<Clock />}/>
                    <Route path="/Contact" element={<Contact />}/>
                    <Route path="*" element={<Nopage />} />
                    <Route path="/Mainproducts" element={<Mainproducts />}/>
                    <Route path="/Todo" element={<Todo />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<Mainpage />, document.getElementById("root"));