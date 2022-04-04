import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';
const Dashboard = () => {
    const data = [
        
        {
                "person":"Alex",
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401,
                "order": 30
                
            },
        {
            "person":"John",
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500,
                "order":50 
            },
        {
            "person":"Aham",
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010,
                "order":75
            },
        {
            "person":"Rashed",
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405,
                "order":80
            },
        {
            "person":"Goutam",
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900,
                "order":40 
            },
        {
            "person":"Kibria",
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000,
                "order": 70
            }
        ]
    
    return (
        <div>
        <div className='chart'>
            <div>
            <h2 style={{color:"#8884d8"}}>Revenue vs Month</h2>
            <LineChart width={400} height={300} data={data}>
            <Line dataKey={"month"}></Line>
            <Line dataKey={"revenue"}></Line>
                <XAxis dataKey={"sell"}></XAxis>
            <YAxis></YAxis>
            <Tooltip/>
            </LineChart>
            </div>
            
        
            <div>
                <h2 style={{color:"#8884d8"}}>Month vs Investment</h2>
            <BarChart width={400} height={300} data={data}>
                <Bar dataKey={"investment"} fill="#8884d8" />
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>
                <Tooltip/>
            </BarChart>
            </div>
        </div>
            <div className='chart2'>
                <div>
                <h2 style={{color:"#8884d8"}}>Order services</h2>
                <PieChart width={400} height={400}>
            <Pie data={data} dataKey={"person"} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey={"order"}cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip/>
            </PieChart>
                </div>


                <div>
                <h2 style={{color:"#8884d8"}}>Sell vs Revenue</h2>
            <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="person" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
              
           
                </div>
            </div>
    </div>
    
       
    );
};

export default Dashboard;