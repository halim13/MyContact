import { View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'

const Header = () => {
    return <View style={{ padding: 16, borderBottomWidth: 1 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>My Contact List</Text>
    </View>
}

export default Header


fetch('person/getDataByBirthDate', {
    Method: 'POST',
    Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
    },
    Body: {
        birthDate: {
            dateFrom: '2000-09-30',
            dateTo: '2023-06-02'
        }
    },
    Cache: 'default'
})
    .then(data => {
        //handle data
        const { List, Status, Message } = data
        console.log(data);
    })
    .catch(error => {
        //handle error
    });
