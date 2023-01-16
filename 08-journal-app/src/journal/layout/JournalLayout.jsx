import { Box } from '@mui/material'
import React from 'react'
import { NavBar, SideBar } from '../components'

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display:'flex'}}>

        <NavBar drawerWidth={ 240 }/>
        <SideBar drawerWidth={ 240 }/>

        <Box component='main'
        sx={{ flexGrow:1, p: 1, mt:8
         }}>
            {/* Toolbar */}
            { children }

        </Box>

    </Box>
  )
}
