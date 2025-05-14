import React, { useState, useMemo } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Slider,
  Button,
  Stack,
  TextField,
  InputAdornment,
  Divider,
} from '@mui/material';
import building from 'src/assets/media/landing/building.svg';
// import ApartmentIcon from '@mui/icons-material/Apartment';
import emiBck from 'src/assets/media/landing/emi-bck.svg';

const formatCurrency = (value) => `₹${value.toLocaleString('en-IN')}`;

export default function EmiCalculatorSection() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(10);

  const emi = useMemo(() => {
    const r = interestRate / 1200;
    const n = tenure * 12;
    const emiCalc = (loanAmount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    return Math.round(emiCalc);
  }, [loanAmount, interestRate, tenure]);

  const priceList = [
    { type: '2 BHK Flats', price: 'INR 1.8 Cr Onwards' },
    { type: '2 BHK Flats', price: 'INR 2.2 Cr Onwards' },
    { type: '2 BHK Flats', price: 'INR 2.8 Cr Onwards' },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, bgcolor: '#FDF8F3' }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Column: Price List */}
        <Grid item xs={12} md={6} maxWidth={538}>
          <Typography variant="h1" pb={4} gutterBottom>
            Price
          </Typography>
          <Stack spacing={3}>
            {priceList.map((item, index) => (
              <React.Fragment key={index}>
                <Box display="flex" justifyContent="space-between" alignItems="center" gap={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <img src={building} alt="building" />
                    {/* <ApartmentIcon fontSize="small" /> */}
                    <Typography
                      sx={{
                        fontFamily: 'Satoshi Variable, sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: '18px', sm: '20px' },
                      }}
                    >
                      {item.type}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: 'Satoshi Variable, sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: '18px', sm: '20px' },
                      textAlign: 'right',
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>
                {index < priceList.length - 1 && <Divider />}
              </React.Fragment>
            ))}
            <Box pt={2}>
              <Button
                variant="contained"
                sx={{
                  background: '#001016',
                  color: '#fff',
                  borderRadius: 0,
                  // px: 4,
                  // py: 1.2,
                  fontWeight: 500,
                  fontSize: '18px',
                  width: 185,
                  height: 52,
                  alignSelf: 'left', // Center on mobile
                  '&:hover': { background: '#222' },
                }}
              >
                Get Consultation
              </Button>
            </Box>
          </Stack>

          {/* Optional background pattern like your image */}
          <Box
            component="img"
            src={emiBck}
            alt="EMI Background"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              maxHeight: '200px',
              objectFit: 'cover',
              zIndex: -1,
              opacity: 0.5,
            }}
          />
        </Grid>

        {/* Right Column: EMI Calculator */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 1, bgcolor: '#FFFFFF' }}>
            <CardContent>
              <Typography variant="h2" color="#09090B" gutterBottom>
                EMI Calculator
              </Typography>

              <Stack spacing={3} mt={2}>
                {/* Loan Amount */}
                <Box>
                  <Grid container spacing={2} pt={4} alignItems="center">
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontFamily: 'Satoshi Variable, sans-serif',
                          fontWeight: 500,
                          fontSize: { xs: '18px', sm: '20px' },
                          textAlign: 'left',
                        }}
                      >
                        Loan Amount (in INR)
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inline-block',
                          px: 1.5,
                          py: 0.5,
                          bgcolor: '#E4E4E7',
                          borderRadius: '4px',
                          fontSize: '0.875rem', // matches `size="small"` TextField
                          color: '#5C5C70',
                          WebkitTextFillColor: '#5C5C70 !important',
                          fontFamily: 'Satoshi Variable, sans-serif',
                          lineHeight: 1.43,
                          cursor: 'default',
                          textAlign: 'right',
                          minHeight: '32px',
                        }}
                      >
                        {`₹ ${loanAmount}`}
                      </Box>
                    </Grid>
                  </Grid>
                  <Slider
                    value={loanAmount}
                    min={500000}
                    max={10000000}
                    step={100000}
                    onChange={(_, val) => setLoanAmount(val)}
                    sx={{
                      color: '#005F86',
                      '& .MuiSlider-thumb': {
                        color: '#FDF8F3',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        '&:hover': {
                          boxShadow: '0 3px 6px rgba(0,0,0,0.25)',
                        },
                      },
                      '& .MuiSlider-track': {
                        color: '#005F86',
                      },
                      '& .MuiSlider-rail': {
                        color: '#005F86',
                      },
                    }}
                  />
                </Box>

                {/* Interest Rate */}
                <Box>
                  <Grid container spacing={2} pt={4} alignItems="center">
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontFamily: 'Satoshi Variable, sans-serif',
                          fontWeight: 500,
                          fontSize: { xs: '18px', sm: '20px' },
                          textAlign: 'left',
                        }}
                      >
                        Interest Rate
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inline-block',
                          px: 1.5,
                          py: 0.5,
                          bgcolor: '#E4E4E7',
                          borderRadius: '4px',
                          fontSize: '0.875rem', // matches `size="small"` TextField
                          color: '#5C5C70',
                          WebkitTextFillColor: '#5C5C70 !important',
                          fontFamily: 'Satoshi Variable, sans-serif',
                          lineHeight: 1.43,
                          cursor: 'default',
                          textAlign: 'right',
                          minHeight: '32px', // match TextField height
                        }}
                      >
                        {`${interestRate}%`}
                      </Box>
                    </Grid>
                  </Grid>
                  <Slider
                    value={interestRate}
                    min={5}
                    max={15}
                    step={0.1}
                    onChange={(_, val) => setInterestRate(val)}
                    sx={{
                      color: '#005F86',
                      '& .MuiSlider-thumb': {
                        color: '#FDF8F3',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        '&:hover': {
                          boxShadow: '0 3px 6px rgba(0,0,0,0.25)',
                        },
                      },
                      '& .MuiSlider-track': {
                        color: '#005F86',
                      },
                      '& .MuiSlider-rail': {
                        color: '#005F86',
                      },
                    }}
                  />
                </Box>

                {/* Tenure */}
                <Box>
                  <Grid container spacing={2} pt={4} alignItems="center">
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontFamily: 'Satoshi Variable, sans-serif',
                          fontWeight: 500,
                          fontSize: { xs: '18px', sm: '20px' },
                          textAlign: 'left',
                        }}
                      >
                        Tenure (in years)
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inline-block',
                          px: 1.5,
                          py: 0.5,
                          bgcolor: '#E4E4E7',
                          borderRadius: '4px',
                          fontSize: '0.875rem', // matches `size="small"` TextField
                          color: '#5C5C70',
                          WebkitTextFillColor: '#5C5C70 !important',
                          fontFamily: 'Satoshi Variable, sans-serif',
                          lineHeight: 1.43,
                          cursor: 'default',
                          textAlign: 'right',
                          minHeight: '32px', // match TextField height
                        }}
                      >
                        {`${tenure} Years`}
                      </Box>
                    </Grid>
                  </Grid>
                  <Slider
                    value={tenure}
                    min={1}
                    max={30}
                    step={1}
                    onChange={(_, val) => setTenure(val)}
                    sx={{
                      color: '#005F86',
                      '& .MuiSlider-thumb': {
                        color: '#FDF8F3',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        '&:hover': {
                          boxShadow: '0 3px 6px rgba(0,0,0,0.25)',
                        },
                      },
                      '& .MuiSlider-track': {
                        color: '#005F86',
                      },
                      '& .MuiSlider-rail': {
                        color: '#005F86',
                      },
                    }}
                  />
                </Box>

                {/* <Divider /> */}

                {/* EMI Result */}
                <Grid
                  container
                  spacing={2}
                  pt={4}
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="body1"
                      color="#000"
                      sx={{
                        fontFamily: 'Satoshi Variable, sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: '18px', sm: '20px' },
                        textAlign: { xs: 'left', sm: 'left' },
                      }}
                    >
                      Your Estimate Monthly EMI
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Satoshi Variable, sans-serif',
                        fontWeight: 500,
                        color: '#936F4A',
                        fontSize: '32px',
                        textAlign: { xs: 'left', sm: 'right' },
                      }}
                    >
                      {formatCurrency(emi)}
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
