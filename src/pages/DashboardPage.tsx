import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import DashboardSummaryCard from '../components/DashboardSummaryCard';

// NOTE: Grid import removed, using flex instead due to Grid 'item' prop bug

const mockStats = {
  totalProducts: 1200,
  lowStock: 18,
  categories: 14,
  suppliers: 7,
  stockInToday: 56,
  stockOutToday: 34,
};

const mockActivity = [
  'Added 50 units to Product A',
  'Low stock alert for Product B',
  'Created new supplier: ABC Corp.',
  'Stock out: 10 units of Product C',
  'Category "Electronics" updated',
];

const DashboardPage: React.FC = () => (
  <div>
    <Typography variant="h4" fontWeight={700} mb={3}>
      Dashboard Overview
    </Typography>
    {/* BUG: Grid 'item' prop is not recognized, so using flex layout instead */}
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        mb: 3,
      }}
    >
      <Box sx={{ flex: '1 1 300px', minWidth: 250 }}>
        <DashboardSummaryCard
          title="Total Products"
          value={mockStats.totalProducts}
          icon={<Inventory2OutlinedIcon fontSize="large" />}
          color="#1976d2"
        />
      </Box>
      <Box sx={{ flex: '1 1 300px', minWidth: 250 }}>
        <DashboardSummaryCard
          title="Low Stock"
          value={mockStats.lowStock}
          icon={<WarningAmberOutlinedIcon fontSize="large" />}
          color="#d32f2f"
        />
      </Box>
      <Box sx={{ flex: '1 1 300px', minWidth: 250 }}>
        <DashboardSummaryCard
          title="Categories"
          value={mockStats.categories}
          icon={<CategoryOutlinedIcon fontSize="large" />}
          color="#388e3c"
        />
      </Box>
      <Box sx={{ flex: '1 1 300px', minWidth: 250 }}>
        <DashboardSummaryCard
          title="Suppliers"
          value={mockStats.suppliers}
          icon={<LocalShippingOutlinedIcon fontSize="large" />}
          color="#fbc02d"
        />
      </Box>
      <Box sx={{ flex: '1 1 300px', minWidth: 250 }}>
        <DashboardSummaryCard
          title="Stock In Today"
          value={mockStats.stockInToday}
          icon={<CallReceivedOutlinedIcon fontSize="large" />}
          color="#0288d1"
        />
      </Box>
      <Box sx={{ flex: '1 1 300px', minWidth: 250 }}>
        <DashboardSummaryCard
          title="Stock Out Today"
          value={mockStats.stockOutToday}
          icon={<CallMadeOutlinedIcon fontSize="large" />}
          color="#7b1fa2"
        />
      </Box>
    </Box>
    {/* BUG: Grid 'item' prop is not recognized, so using flex layout for main content */}
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
      }}
    >
      <Box sx={{ flex: '2 1 500px', minWidth: 300 }}>
        {/* Placeholder for charts or analytics */}
        {/* BUG: No chart component yet */}
        <Paper elevation={1} sx={{ p: 2, minHeight: 200, background: '#f5f5f5' }}>
          <Typography variant="subtitle1" color="text.secondary">
            Charts/Analytics coming soon...
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ flex: '1 1 300px', minWidth: 250 }}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" mb={2}>
            Recent Activity
          </Typography>
          <List dense>
            {mockActivity.map((activity, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={activity} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  </div>
);

export default DashboardPage; 