import { Grid } from "@mui/material"
import { useEffect, useState } from 'react';
import './TypeTag.css'

export default function TypeTag(props){

    const [type, setType] = useState()
    const [typeColor, setTypeColor] = useState();
    const [textColor, setTextColor] = useState();

    useEffect(() => {

        let type = props.type.type.name;

        function setColor (typeColor, textColor){
            setTypeColor(typeColor);
            setTextColor(textColor);
        }

        setType(type)
        if( type == "normal"){
            setColor("#a4acaf", "black")
        }
        if(type == "flying"){
            setColor("3dc7ef", "black")
        }
        if(type == "bug"){
            setTypeColor("#729f3f")
        }
        if(type == "poison"){
            setTypeColor("#b97fc9");
        }
        if(type == "water"){
            setTypeColor("#4592c4");
        }
        if(type == "electric"){
            setTypeColor("#eed535")
        }
        if(type == "ground"){
            setTypeColor("#ab9842")
        }
        if(type == "fairy"){
            setTypeColor("#fdb9e9")
        }
        if(type == "fire"){
            setTypeColor("#fd7d24");
        }
    }, [props])

    return(
        <Grid item id="typeTag" style={{color: textColor, backgroundColor: typeColor, paddingLeft:'20px', paddingRight:'20px', paddingBottom:'2px', borderRadius:'6px', marginRight:'6px', marginTop:'6px', fontSize:'14px'}}>
            {type}
        </Grid>
    )
}