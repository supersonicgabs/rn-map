import React, {useState, useEffect} from 'react';
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
   
  const Mapa = () => {
        const [locais, setLocais] = useState('')
        const url = 'http://images.contelege.com.br/poi.json'
        useEffect(()=>{
            fetch(url).then((resp)=>resp.json()).then(async (data)=>{
              await setLocais(data)
            })
        }, [])         
        // console.log(locais)
        return(
          <MapView
          region={{latitude: -22.530578, longitude: -50.8798502,
          latitudeDelta: 15, longitudeDelta: 15}}
            style={{width: '100%', height: '100%'}}>
              {Array.from(locais).map((store, index)=>([
                <Marker coordinate={{latitude: store.latitude, longitude: store.longitude}} cluster />
              ]))}
          </MapView>
        )
  };
   
  export default Mapa;