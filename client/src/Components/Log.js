import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

function Log() {

    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [location, setLocation] = useState(null)

    const handleSelect = (value) => {
        setAddress(value)
        fetch(`/location_data/${value}`).then(r => r.json()).then(data => setLocation(data))
    }
    console.log(location)
    return (
        <div className='container' align='center'>
            <div className='row'>
                <div className='col'>
                    <form type='submit'>
                        <label/> <div>Title:</div>
                        <input type='text' onChange={ e => setTitle(e.target.value) } placeholder='Title...'></input>
                    </form>
                </div>
            </div>
            <div className='row'>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                           <input {...getInputProps({ placeholder: "Type location" })} /> 
                           <div>
                               {loading ? <div>...loading</div> : null}
                               {suggestions.map((suggestion) => {
                                   const style = {
                                       backgroundColor: suggestion.active ? "rgb(96, 234, 249)" : "#fff"
                                   }
                                   return <div {...getSuggestionItemProps(suggestion, { style })} >{suggestion.description}</div>
                               })}
                           </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            </div>
        </div>
    )
}

export default Log