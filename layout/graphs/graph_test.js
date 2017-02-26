import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Chart from 'react-native-chart';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: 300,
        height: 100,
    },
});

const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
];

export default class SimpleChart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={10}
                    type="line"
                    showDataPoint={true}
                    color={'#e1cd00'}
                 />
            </View>
        );
    }
}