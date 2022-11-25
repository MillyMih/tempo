import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Api from './Api';

export default function Peruibe() {
  const [tempo, setTempo] = useState('');
  const [previsao, setPrevisao] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await Api.get('weather?format=json-cors&key=7d1e670c&woeid=456409&array_limit=10&fields=only_results,city_name,temp,description,date,time,rain,forecast,min,max,rain_probability');
    setTempo(result.data);
    setPrevisao(result.data.forecast);
  }

  return (
    <View>
      <Text style={styles.texto}>Tempo agora em {tempo.city_name}</Text>
      <Text style={styles.tempo}>
        Data da consulta: {tempo.date + "\n"}
        Hora da consulta: {tempo.time + "\n"}
        Temperatura: {tempo.temp + "\n"}
        Chuva: {tempo.rain + "\n"}
        Descrição: {tempo.description + "\n"}
      </Text>
      <Text style={styles.texto}>Previsão para 10 dias:</Text>
      <FlatList
        style={styles.flatlist}
        horizontal={true}
        data={previsao}
        renderItem={({item})=>{
          return(
            <View style={styles.previsao}>
              <Text style={styles.txtPrevisao}>
                Data: {item.date + "\n"}
                Máxima: {item.max + "\n"}
                Mínima: {item.min + "\n"}
                Probabilidade de chuva: {item.rain_probability + "\n"}
                Descrição: {item.description}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center'
  },
  tempo: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'justify'
  },
  flatlist: {
    marginTop: 20
  },
  previsao: {
    marginHorizontal: 20
  },
  txtPrevisao: {
    fontSize: 20,
    textAlign: 'center'
  }
})