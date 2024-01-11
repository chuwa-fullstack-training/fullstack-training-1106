import { Grid, MenuItem, Select } from '@mui/material'
import React, { useContext } from 'react'
import { BoxContext } from '../context/BoxContext'

export default function Header() {
    const { BOXS, COLORS } = useContext(BoxContext);
  return (
    <React.Fragment>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Select>
                    {BOXS.map((box, index) => (
                        <MenuItem key={index} value={box.inputValue}>{box.inputValue}</MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={6}>
                <Select>
                    {COLORS.map((color, index) => (
                        <MenuItem key={index} value={color}>{color}</MenuItem>
                    ))}
                </Select>
            </Grid>
        </Grid>
    </React.Fragment>
  )
}
