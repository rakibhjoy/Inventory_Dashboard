import React from 'react';
import { Card, CardContent, Typography, Box, Fade } from '@mui/material';

interface DashboardSummaryCardProps {
  title: string;
  value: number | string;
  icon: React.ReactElement;
  color?: string;
  gradient?: string;
}

const DashboardSummaryCard: React.FC<DashboardSummaryCardProps> = ({ title, value, icon, color, gradient }) => (
  <Fade in timeout={700}>
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        minHeight: 120,
        borderRadius: 4,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
        border: gradient
          ? `2px solid transparent`
          : `2px solid ${color || '#1976d2'}`,
        backgroundImage: gradient
          ? `linear-gradient(${gradient}), linear-gradient(120deg, #fff 60%, #f0f4ff 100%)`
          : undefined,
        backgroundOrigin: 'border-box',
        backgroundClip: gradient ? 'padding-box, border-box' : undefined,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px) scale(1.03)',
          boxShadow: '0 16px 40px 0 rgba(31, 38, 135, 0.25)',
        },
      }}
    >
      <Box
        sx={{
          mr: 2,
          color: color || 'primary.main',
          fontSize: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: gradient || color,
          borderRadius: '50%',
          width: 56,
          height: 56,
          boxShadow: gradient ? '0 2px 12px 0 rgba(0,0,0,0.10)' : undefined,
        }}
      >
        {icon}
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ letterSpacing: 1 }}>
          {title}
        </Typography>
        <Typography variant="h4" fontWeight={800} sx={{ color: color || '#222' }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  </Fade>
);

export default DashboardSummaryCard; 