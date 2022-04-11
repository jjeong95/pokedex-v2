import { useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import axios from "axios"
import './PokemonCard.css'

export default function PokemonCard (data) {
    

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonColor, setPokemonColor] = useState();
    const [pokemonImage, setPokemonImage] = useState();
    const [url, setURL] = useState(data.data.url);

    useEffect(() => {

        let parts = url.split("/");

        let pokemonID = parts[parts.length -2];

        let colorURL = "https://pokeapi.co/api/v2/pokemon-species/" + pokemonID + "/";

        async function fetchPokemonData(){
            // await axios.get(url).then((response1) => {
            //     setPokemonData(response1.data);
            //     axios.get(colorURL).then((response2) => {
            //         console.log(response2.data.color.name)
            //         pokemonData.color = response2.data.color.name;
            //         console.log(pokemonData)

            //     })
            // })

            await axios.get(colorURL).then((response1) => {
                axios.get(url).then((response2)=>{
                    response2.data.color = response1.data.color.name;
                    setPokemonData(response2.data);
                })
            })
            
            // await axios.get(colorURL).then((response) => {
            //     console.log(response.data.color.name,pokemonID ,'15')
            //     console.log(pokemonData);

            //     let newData = {...pokemonData};

            //     console.log(newData, '41')
                
            //     // setPokemonData({...pokemonData, color:response.data.color.name})
            // })

        }
        fetchPokemonData();
    }, [])

    console.log(pokemonData,' 47')
    return(
        
            Object.keys(pokemonData).length === 0 ? null :
            <Grid item xs={3} id="root">
                <Grid container justifyContent="center" >
                    <Grid item id="image" style={{backgroundColor: "#F2F2F2"}}>
                        <img src={pokemonData.sprites.front_default}/>
                    </Grid>
                </Grid>
            </Grid>
    )
}