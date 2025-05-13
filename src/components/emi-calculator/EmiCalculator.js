import { useState, useMemo } from 'react';
import {
  Box, Grid, Card, CardContent, Typography, Slider, Button,
  Stack, TextField, InputAdornment, Divider
} from '@mui/material';
// import ApartmentIcon from '@mui/icons-material/Apartment';

const formatCurrency = (value) => `₹${value.toLocaleString('en-IN')}`;

export default function EmiCalculatorSection() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(10);

  const emi = useMemo(() => {
    const r = interestRate / 1200;
    const n = tenure * 12;
    const emiCalc = loanAmount * r * ((1 + r) ** n) / ((1 + r) ** n - 1);
    return Math.round(emiCalc);
  }, [loanAmount, interestRate, tenure]);

  const priceList = [
    { type: '2 BHK Flats', price: 'INR 1.8 Cr Onwards' },
    { type: '2 BHK Flats', price: 'INR 2.2 Cr Onwards' },
    { type: '2 BHK Flats', price: 'INR 2.8 Cr Onwards' }
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, bgcolor: '#FDF8F3' }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Column: Price List */}
        <Grid item xs={12} md={6}>
          <Typography variant="h1" gutterBottom>
            Price
          </Typography>
          <Stack spacing={3}>
            {priceList.map((item, index) => (
              <Box key={index} display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap={1}>
                  {/* <ApartmentIcon fontSize="small" /> */}
                  <Typography>{item.type}</Typography>
                </Box>
                <Typography>{item.price}</Typography>
              </Box>
            ))}

            <Button variant="contained" color="inherit" sx={{ width: 'fit-content' }}>
              Get Consultation
            </Button>
          </Stack>

          {/* Optional background pattern like your image */}
          <Box mt={6} sx={{ borderBottom: '1px solid #ccc', height: 80, opacity: 0.1 }}>
            {/* You can replace this with an SVG graphic or background image */}
          </Box>
        </Grid>

        {/* Right Column: EMI Calculator */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: '#FFFFFF' }}>
            <CardContent>
              <Typography variant="h2" color="#09090B" gutterBottom>
                EMI Calculator
              </Typography>

              <Stack spacing={3} mt={2}>
                {/* Loan Amount */}
                <Box>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                      <Typography>Loan Amount (in INR)</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        value={loanAmount}
                        InputProps={{
                          readOnly: true,
                          startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                          disableUnderline: true
                        }}
                        disabled
                        size="small"
                        fullWidth
                        sx={{
                          '& .MuiInputBase-input': {
                            textAlign: 'right',
                            objectFit: 'contain',
                            color: '#5C5C70',
                            WebkitTextFillColor: '#5C5C70',
                            cursor: 'default'
                          },
                          '& .MuiInputBase-root': {
                            backgroundColor: '#E4E4E7',
                            '&.Mui-disabled': {
                              backgroundColor: '#E4E4E7'
                            }
                          },
                          '& .MuiInputAdornment-root': {
                            color: '#5C5C70'
                          }
                        }}
                      />
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
                          boxShadow: '0 3px 6px rgba(0,0,0,0.25)'
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
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                      <Typography>Interest Rate</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        value={`${interestRate}%`}
                        InputProps={{
                          readOnly: true,
                          disableUnderline: true
                        }}
                        disabled
                        size="small"
                        fullWidth
                        sx={{
                          '& .MuiInputBase-input': {
                            textAlign: 'right',
                            objectFit: 'contain',
                            color: '#5C5C70',
                            WebkitTextFillColor: '#5C5C70',
                            cursor: 'default'
                          },
                          '& .MuiInputBase-root': {
                            backgroundColor: '#E4E4E7',
                            '&.Mui-disabled': {
                              backgroundColor: '#E4E4E7'
                            }
                          }
                        }}
                      />
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
                          boxShadow: '0 3px 6px rgba(0,0,0,0.25)'
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
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                      <Typography>Tenure (in years)</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        value={`${tenure} Years`}
                        InputProps={{
                          readOnly: true,
                          disableUnderline: true
                        }}
                        disabled
                        size="small"
                        fullWidth
                        sx={{
                          '& .MuiInputBase-input': {
                            textAlign: 'right',
                            objectFit: 'contain',
                            color: '#5C5C70',
                            WebkitTextFillColor: '#5C5C70',
                            cursor: 'default'
                          },
                          '& .MuiInputBase-root': {
                            backgroundColor: '#E4E4E7',
                            '&.Mui-disabled': {
                              backgroundColor: '#E4E4E7'
                            }
                          }
                        }}
                      />
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
                          boxShadow: '0 3px 6px rgba(0,0,0,0.25)'
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

                <Divider />

                {/* EMI Result */}
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" color="primary">
                      Your Estimate Monthly EMI
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5" fontWeight={600} sx={{ textAlign: 'right' }}>
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
