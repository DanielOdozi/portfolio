import React, { useEffect } from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import './Markdown.css'

function Markdown(){
    useEffect(() => {
        document.title = 'Markdown';
      }, []);
      const [markdown, setmarkdown] = useState("");
      const handlemarkdown = (event) => {
        setmarkdown(event.target.value)
      }
      const [iconchange, seticonchange] = useState(false);
      const [exheight, setexheight] = useState(0);
      const [iconchangeb, seticonchangeb] = useState(false);
      const [exheightb, setexheightb] = useState(0);
      const expand = () => {
        seticonchange(!iconchange);
        setexheight(iconchange ? 0 : 600);
      }
      const firsticon = () => {
        expand();
      }
      const expandb = () => {
        seticonchangeb(!iconchangeb);
        setexheightb(iconchangeb ? 0 : 1000);
      }
      const secondicon = () => {
        expandb();
      }
    return(
        <div className="markdownbody">
            {!iconchangeb && (
            <section className="section1">
                <h2>Editor<i onClick={firsticon} className={`fa-solid ${iconchange ? 'fa-arrows-to-circle' : 'fa-arrows-up-down-left-right'} arrow`}></i></h2>
                <textarea style={{ height: iconchange ? `${exheight}px` : '260px' }} placeholder="Write your text here" className="textarea1" value={markdown} onChange={handlemarkdown}></textarea>
            </section>
            )}
            {!iconchange && (
            <section className="section2">
                <h2 className="sectionh2">Previewer<i onClick={secondicon} className={`fa-solid ${iconchangeb ? 'fa-arrows-to-circle' : 'fa-arrows-up-down-left-right'} arrow`}></i></h2>
                <ReactMarkdown style={{ height: iconchangeb ? `${exheightb}px` : '200px'}} className="textarea2">{markdown}</ReactMarkdown>
            </section>
            )}
        </div>
    )
}

export default Markdown