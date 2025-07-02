import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, Badge, Paper, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => (
  <AppBar
    position="sticky"
    elevation={0}
    sx={{
      background: 'linear-gradient(90deg, #3a3dff 0%, #a259ff 100%)',
      boxShadow: '0 2px 8px 0 rgba(31,38,135,0.10)',
      zIndex: 1201
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-between', minHeight: 72 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton sx={{ color: '#fff', mr: 1 }} onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Paper
          component="form"
          sx={{
            p: '2px 8px',
            display: 'flex',
            alignItems: 'center',
            width: 320,
            borderRadius: 3,
            boxShadow: 'none',
            background: 'rgba(255,255,255,0.15)',
            color: '#fff'
          }}
        >
          <IconButton sx={{ p: '6px', color: '#fff' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: '#fff' }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Paper>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton sx={{ color: '#fff' }}>
          <Badge badgeContent={2} color="error">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton sx={{ color: '#fff' }}>
          <Badge badgeContent={1} color="primary">
            <ChatBubbleOutlineOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton sx={{ color: '#fff' }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <AccountCircleOutlinedIcon sx={{ ml: 1, fontSize: 36, color: '#fff' }} />
        <Tooltip title="Log Out">
          <IconButton sx={{ color: '#fff', ml: 1 }}>
            <LogoutOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Topbar; 