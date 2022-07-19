import React from "react"


export default function Meme () {
       //const [memeImage, setmemeImage] = React.useState("")
        const [meme, setmeme] = React.useState({
            Toptext : "",
            Bottomtext : "",
            randomImage : "http://i.imgflip.com/1bij.jpg"
        })
        
        const [allmemesImages, setallmemesImages] = React.useState([])        
             
         React.useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallmemesImages(data.data.memes))
         }, [meme])

         

           function handleClick() {
        const randomNumber = Math.floor(Math.random() * allmemesImages.length)
        const url = allmemesImages[randomNumber].url
        
        setmeme(prevmeme => ({
            ...prevmeme,
            randomImage : url,
           
        }))
    };

    function handleToggle(event){
        const {name, value}  = event.target
        setmeme(prevmeme => {
          return {
              ...prevmeme,
              [name] : value
          }
        })
      }
      
    return (
      <main>
        <div className = "form" >
           
            <input 
            type = "text" 
            placeholder = "Top Text" 
            className = "form-input"
            name = "Toptext"
            value = {meme.Toptext}
            onChange = {handleToggle}
            />
            <input 
            type = "text" 
            placeholder = "Bottom Text" 
            className = "form-input"
            name = "Bottomtext"
            value = {meme.Bottomtext}
            onChange = {handleToggle} />
           <button className = "form-button" onClick = {handleClick}>Get New Meme images</button> 
  </div>
         <div className = "meme">
         <img src = {meme.randomImage} alt = "Meme images" className = "img"/> 
          
         <h2 className = "meme-text top">{meme.Toptext}</h2>
         <h2 className = "meme-text bottom">{meme.Bottomtext}</h2>
           
         </div>
    </main>  
    )
}

// {/* //  const {name, value, type, checked} = event.target

// // setState(prevState => { */}
//     return{
//         ...prevState,
//         [name] : type === "checkbox" ? checked : value 
//     }
// })

// function submit (event) {
//     event.preventDefault()
//     submitToApi(Formdata)
// }

// React.useEffect(function (){
//     fetch("")
//     .then(res => res.json())
//     .then(data =>  setStarWarData(data))
// })