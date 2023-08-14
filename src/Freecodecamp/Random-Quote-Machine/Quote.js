import React, { useState } from "react";
import { useEffect } from "react";
import 'animate.css'
import './Quote.css'
import '@fortawesome/fontawesome-free/css/all.css'

const initialtexts = [
    { quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.", author: "-Esther" },
    { quote: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "-John" },
    { quote: "Life is what we make it, always has been, always will be.", author: "-Joseph" },
    { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "-Daniel Odozi" },
    { quote: "Dream big and dare to fail. - Norman Vaughan", author: "-Alber Einstein" },
    { quote: "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.", author: "-Don Vought" },
    { quote: "The only way to do great work is to love what you do.", author: "-Bill Gates" },
    { quote: "Change your thoughts and you change your world.", author: "-M. Mills" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "-John Doe" },
    { quote: "You miss 100% of the shots you don’t take.", author: "- Wayne Gretzky"}
];
const colors = ['#e74c3c', '#9b59b6', '#f39c12', '#9b59b6', '#77b1a9', '#472e32', '#472e32', '#472e32', '#2c3e50', '#2c3e50'];

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function Quote(){
    useEffect(() => {
        document.title = 'Quote';
      }, []);
    const [quote, setquote] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [texts, setTexts] = useState(initialtexts);
    const handleclick = () => {
        setFadeOut(true);
        setTimeout(() => {
            setquote((index) => {
                if (index === texts.length - 1){
                    return 0;
                }else {
                    return index + 1;
                }
            });
            setFadeOut(false);
        }, 1000);
    };

    useEffect(() => {
        setTexts(shuffleArray(initialtexts));
      }, []);
    const Currentcolor = colors[quote]
    const Currentquote = texts[quote]
    return(
        <div className="fade-background" style={{backgroundColor: Currentcolor,}}>
            
            <main className="main">
                <h2 className={`animate__animated ${fadeOut ? 'animate__fadeOut' : ''}`} style={{color: Currentcolor, fontSize: 28}}><i class="fa-solid fa-quote-left"></i>  {Currentquote.quote}</h2>
                <p className="authors" style={{color: Currentcolor}}>{Currentquote.author}</p>
                <i class="fa-brands fa-square-twitter fa-2xl" style={{color: Currentcolor}}></i>       <i class="fa-brands fa-square-tumblr fa-2xl" style={{color: Currentcolor}}></i>
                <button onClick={handleclick} style={{backgroundColor: Currentcolor}} className="button">New quote</button>
            </main>
        </div>
    )
}
export default Quote