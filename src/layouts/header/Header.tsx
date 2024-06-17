import React, { useState } from 'react'
import { Box, Stack, Tab, styled } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Nav from '../nav/Nav';

const StyledTab = styled(Tab)({
  textTransform: 'none'
});

const StyledHeader = styled(Stack)({
  pl: '20px', 
  borderBottom: '1px solid #414144'
});

const StyledTabPanel = styled(TabPanel)({
  padding: 0
});

export default function Header() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <StyledHeader direction="row">
          <Stack direction="row" spacing={'20px'} alignItems='center'>
            <img src='/assets/menu-icon.png' width={24} height={24}/>
            <img src='/assets/back-icon.png' width={24} height={24} />
          </Stack>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', pl: '31px' }}>
            <TabList 
              aria-label="nav tabs"
              onChange={handleChange}
              indicatorColor='primary'
              textColor='inherit'
            >
              <StyledTab label="Просмотр" value="1" />
              <StyledTab label="Управление" value="2" />
            </TabList>
          </Box>
        </StyledHeader>
        <StyledTabPanel value="1">
          <Nav />
        </StyledTabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </>
  )
}