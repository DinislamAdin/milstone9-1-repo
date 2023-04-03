import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhonBar = () => {
    const [phones, setPhone] = useState([])

    useEffect( ()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhone(data))


        axios('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const loadedData = data.data.data;
            // console.log(loadedData)
            const phoneData = loadedData.map(phone=>{
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1]);
                const phoneInfo ={
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            console.log(phoneData)
            setPhone(phoneData)

        })
    }, [])

    return (
        <div>
            <BarChart width={1000} height={500} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default PhonBar;