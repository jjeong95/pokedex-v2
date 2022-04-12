import { useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import axios from "axios"
import './PokemonCard.css'
import TypeTag from '../TypeTag/TypeTag';

export default function PokemonCard (data) {
    

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonColor, setPokemonColor] = useState();
    const [pokemonImage, setPokemonImage] = useState();
    const [url, setURL] = useState(data.data.url);

    useEffect(() => {

        let parts = url.split("/");

        let pokemonID = parts[parts.length -2];

        let colorURL = "https://pokeapi.co/api/v2/pokemon-species/" + pokemonID + "/";

        let idArray = ""+pokemonID.split("");

        if(idArray.length < 2){
           idArray = ['0','0',pokemonID];
        }

        if(idArray.length < 4){
            idArray = ['0',...pokemonID];
        }

        let threeDigitID = idArray.join('');
        

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
                    response2.data.pokemonID = threeDigitID
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

    console.log(pokemonData, '70')

    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    return(
        
            Object.keys(pokemonData).length === 0 ? null :
            <Grid item xs={3} id="root">
                <Grid container justifyContent="center" >
                    <Grid item xs={12} id="image-container" style={{backgroundColor: "#F2F2F2"}}>
                        <img src={pokemonData.sprites.front_default} id="image"/>
                    </Grid>
                    <Grid item xs={12} id="pokemon-info">
                        <Grid item id="pokemon-ID">
                            {pokemonData.pokemonID}
                        </Grid>
                        <Grid item id="pokemon-Name">
                            {capitalize(pokemonData.species.name)}
                        </Grid>
                        <Grid container>
                            {
                                pokemonData.types.map((data,index) => {
                                    return <TypeTag type={data}/>
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}