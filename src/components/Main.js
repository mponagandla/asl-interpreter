import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Button, Card, CardMedia, ImageList, ImageListItem, Stack} from "@mui/material";
import  {TextField} from "@mui/material";
import './main.css'
import {worddata, worddata2} from "../Constants/ImageConstants";
import {splitTextToWords} from "../utilities/Utilities";
import {Messages} from "../Constants/MessageConstants";

function Main() {
    const [textfield, setTextFieldValue] = useState("")
    const [filteredwords, setFilteredWords] = useState([])
    const [translateClickedOnce, setTranslateClickedOnce] = useState(false)
    const [translationsFound, setTranslationsFound] = useState(false)
    const[message, setMessage] = useState('')
    let wordsFromText

    const translateText = () => {
        let array =[]

        setTranslateClickedOnce(true)
        if(textfield) wordsFromText = splitTextToWords(textfield)

        array = filterImages()

        console.log("translationsFound",translationsFound)
        resolveMessage()
        console.log(array.length)
        if(array.values() !== undefined) setFilteredWords(array)
        else setFilteredWords([])
    }


    const resolveMessage  = () => {
        if(!textfield) setMessage(Messages.NO_TEXT)
        else if(!translationsFound) setMessage(Messages.NO_TRANSLATIONS_FOUND)
    }
    const filterImages = () => {
        let array = []
        if(wordsFromText){
            wordsFromText.forEach(item => {
                worddata.find(obj => {
                    if(obj.word === item) array.push(obj)
                })
                console.log(worddata.find(obj => obj.word === item))
            })
        }
        if(array.length) setTranslationsFound(true)
        else setTranslationsFound(false)
        return array
    }

    const handleClear = () => {
        setTextFieldValue("")
        setFilteredWords([])
        setTranslateClickedOnce(false)
        setTranslationsFound(false)
        setMessage("")
    }
    return(
        <div>
            <div className={"text-field"}>
                <TextField sx={{ input: { color: 'black', background: 'white', borderRadius: '5px' } }} id="filled-basic" label="Filled" variant="filled" value={textfield} onChange={(event => {
                    setTextFieldValue(event.target.value)
                })
                }/>
            </div>
            <div className={"flex-gap "}>
                <Button variant={"contained"} onClick={translateText}>Translate</Button>
                <Button variant={"contained"}  onClick={handleClear}>Clear</Button>
            </div>
             {console.log("filteredwords", filteredwords)}
            {console.log(message)}
            {filteredwords && filteredwords.length === 0 ?

                <h3>{message}</h3>
                : <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {filteredwords.map((item) => (
                        <ImageListItem key={item.word}>
                            <div className={"card"}>
                                <img className={"image"} src={`${item.img}`}/>
                            </div>
                        </ImageListItem>
                    ))}
                </ImageList>}
                {/*translateClickedOnce ? <h3>Sorry! We don't have translations for these words yet</h3>: ''}*/}

        </div>
    )
}

export default Main;