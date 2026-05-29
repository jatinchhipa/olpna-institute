import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Compustab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Show All" value="1" />
            <Tab label="University" value="2" />
            <Tab label="Group Study" value="3" />
            <Tab label="Awards" value="4" />
            <Tab label="Students" value="5" />
            <Tab label="Teachers" value="6" />
            <Tab label="Campus" value="7" />
          </TabList>
        </Box>

        <TabPanel value="1">Show All</TabPanel>
        <TabPanel value="2">University</TabPanel>
        <TabPanel value="3">Group Study</TabPanel>
        <TabPanel value="4">Awards</TabPanel>
        <TabPanel value="5">Students</TabPanel>
        <TabPanel value="6">Teachers </TabPanel>
        <TabPanel value="7">Campus</TabPanel>
    
      </TabContext>
    </Box>
  );
};