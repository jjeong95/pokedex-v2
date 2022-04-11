import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import './Main.css'

//Components
import NavBar from '../../Components/Navbar/Navbar';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';


export default function Main(){

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
            setPokemons(response.data.results);
        })
        
    },[])

    return(
        <Grid id="root-main">
            <NavBar/>
            <Grid container id="main-container">
                <Grid container  alignItems="center" spacing={2}>
                    {
                        pokemons.length > 1 ? pokemons.map((data, index)=>{
                            return (
                                <PokemonCard data={data}/>
                            )
                        }) : console.log("hello")
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}