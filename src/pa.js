function toggle(id) {
    setSquares(prevSquares => {
        const newSquares = []
        for (let i = 0; i < prevSquares.length; i++){
            const currentSquare = prevSquares[i]
            if (currentSquare.id === id ){
                const updatedSquare = {
                    ...currentSquare,
                     on : !currentSquare.on
                }
                newSquares.push(updatedSquare)
            }else{
                newSquares.push(currentSquare)
            }
        }
    })
}

   setSquares(prevSquares => {
    return prevSquares.map((square => {
        return square.id === id ? {...square, on : !square.on} : square
    }))
   })



   








