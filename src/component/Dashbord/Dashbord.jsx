import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Dashbord = () => {

  const marks=  [
        {
            id: 1,
            name: "John",
            math: 85,
            english: 75,
            bangla: 80
        },
        {
            id: 2,
            name: "Jane",
            math: 90,
            english: 80,
            bangla: 85
        },
        {
            id: 3,
            name: "Mike",
            math: 70,
            english: 65,
            bangla: 75
        },
        {
            id: 4,
            name: "Lisa",
            math: 95,
            english: 90,
            bangla: 92
        },
        {
            id: 5,
            name: "David",
            math: 80,
            english: 85,
            bangla: 82
        },
        {
            id: 6,
            name: "Emily",
            math: 87,
            english: 92,
            bangla: 89
        },
        {
            id: 7,
            name: "Chris",
            math: 78,
            english: 73,
            bangla: 76
        },
        {
            id: 8,
            name: "Alex",
            math: 82,
            english: 87,
            bangla: 84
        },
        {
            id: 9,
            name: "Samantha",
            math: 88,
            english: 95,
            bangla: 91
        },
        {
            id: 10,
            name: "Tom",
            math: 75,
            english: 80,
            bangla: 78
        }
    ]

    return (
        <div>
            <LineChart
                width={1200}
                height={600}
                data={marks}
            >
               <Line dataKey='math'></Line>
               <Line dataKey='english'></Line>
               <Line dataKey='bangla'></Line>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashbord;