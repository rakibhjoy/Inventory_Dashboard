import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Avatar, Typography, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
}

const menuItems = [
  { label: 'Ecommerce', icon: <HomeIcon />, to: '/' },
  { label: 'Product', icon: <Inventory2OutlinedIcon />, to: '/products' },
  { label: 'Category', icon: <CategoryOutlinedIcon />, to: '/categories' },
  { label: 'Attributes', icon: <LayersOutlinedIcon />, to: '/attributes' },
  { label: 'Order', icon: <ShoppingCartOutlinedIcon />, to: '/orders' },
  { label: 'Users', icon: <PeopleAltOutlinedIcon />, to: '/users' },
  { label: 'Online Store', icon: <StorefrontOutlinedIcon />, to: '/store' },
  { label: 'Report', icon: <AssessmentOutlinedIcon />, to: '/reports' },
  { label: 'Setting', icon: <SettingsOutlinedIcon />, to: '/settings' },
  { label: 'FAQ', icon: <HelpOutlineOutlinedIcon />, to: '/faq' },
];

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  if (!open) return null;
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          background: '#fff',
          borderRight: '1px solid #f0f0f0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 0,
          height: '100vh',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
          <Typography variant="h5" fontWeight={900} color="#222b45" sx={{ letterSpacing: 1 }}>
          Inventory
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.label}
                component={NavLink}
                to={item.to}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  my: 0.5,
                  '&.active, &:hover': {
                    background: 'linear-gradient(90deg, #fbeee6 0%, #f5f7fa 100%)',
                    color: '#ff7e5f',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar; 