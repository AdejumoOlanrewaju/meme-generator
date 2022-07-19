React.useEffect( () => {
    function windowWidth (){
        setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", windowWidth)

    return function (){
       window.removeEventListener("resize", windowWidth)
    }
}, [])

React.useEffect(() => {
    async function getmemes(){
        const res = await fetch("")
        const data = await res.json()
        setallmemesImages(data.data.memes)
    }
    getmemes()

    return () => {

    }
}, [])


React.useEffect(() => {
    async function getmemes(){
        const res = await fetch("")
        const data = await res.json()
        setallmemesImages(data.data.memes)
    }
      getmemes()

      return () => {

      }
}, [])