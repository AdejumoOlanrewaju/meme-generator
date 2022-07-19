function handlechange (event){
    const {name, value,} = event.target
    setFormData (prevFormData => {
        return {
            ...prevFormData,
            [name] : value
        }
    })
}

function handleSubmit (event){
    event.preventDefault()
}

<div>
    <form onSubmit = {handleSubmit}>
        <input
        type = "text"
        placeholder = "Top Text"
        className = "input-form"
        onchange = {handleChange}
        name = "top text"
        value = "formData.top text"
        />

        <input
        type = "text"
        placeholder = "Top Text"
        className = "input-form"
        onchange = {handleChange}
        name = "bottom text"
        value = "formData.bottom text"
        />
 </form>
</div>
