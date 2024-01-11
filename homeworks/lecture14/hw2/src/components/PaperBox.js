import { Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

export default function PaperBox() {
    const [names, setNames] = useState(['1st', '2nd', '3rd', '4th', '5th', '6th']);
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const [selectedName, setSelectedName] = useState(names[0]);
    const [nameColors, setNameColors] = useState({}); // 初始化为空对象

    const handleNameChange = (event) => {
        setSelectedName(event.target.value);
    };

    const handleColorChange = (event) => {
        setNameColors(prevColors => ({
            ...prevColors,
            [selectedName]: event.target.value // 更新选中name的颜色
        }));
    };

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Select
                        value={selectedName}
                        onChange={handleNameChange}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>{name}</MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <Select
                        value={nameColors[selectedName] || ''} // 如果没有颜色则为空字符串
                        onChange={handleColorChange}
                    >
                        {colors.map((color) => (
                            <MenuItem key={color} value={color}>{color}</MenuItem>
                        ))}
                    </Select>
                </Grid>
                {
                    names.map((name, index) => (
                        <Grid key={name} item xs={4}>
                            <Paper
                                sx={{
                                    height: '30vh',
                                    width: '20vw',
                                    backgroundColor: nameColors[name] || 'transparent', // 使用颜色或透明
                                }}
                                elevation={3}
                            >
                                <Typography variant="body1" component="div">
                                    Component Name:
                                </Typography>
                                <TextField 
                                    defaultValue={name}
                                    onChange={(e) => {
                                        const newNames = [...names];
                                        newNames[index] = e.target.value;
                                        setNames(newNames);
                                    }}
                                />
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </React.Fragment>
    )
}
