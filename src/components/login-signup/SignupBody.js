import React from "react";
import styled from "styled-components";
import { Button, Avatar, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from "@mui/material";
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import {Link} from 'react-router-dom'

import logo from '../../assets/logo.png';

import googleIcon from "../../assets/googleicon.png";

import fbIcon from "../../assets/fbicon.png";
import { Router } from "react-router-dom";

// export default function SignIn() {
    
//     };

export default function SignupBody() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    }

  return (
    <>
      <LoginBodyContainer>
        <Logo src={logo} />
        <LoginHeading>Create Account</LoginHeading>
        <GoogleFbBtns>
          <Button variant="outlined"> <GoogleIcon src={googleIcon}/> Google</Button>
          <Button variant="outlined"> <FbIcon src={fbIcon}/> Facebook</Button>
        </GoogleFbBtns>
        <Span><hr /> or create with email <hr /></Span>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your Name"
              name="name"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/login" variant="body2">
                  {"Already have a account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </LoginBodyContainer>
    </>
  );
}

const LoginBodyContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5% 8%;`;

const Logo = styled.img`
  width: 35%;
  margin: 0;`;

const LoginHeading = styled.h1`
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 1.50rem;
margin: 2% 0 0.5% 0;`;

const GoogleFbBtns = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 7%;
  margin: 5% 0;`;

const GoogleIcon = styled.img`
  width: 12%;`

const FbIcon = styled.img`
  width: 12%;
  margin-inline: 5%;`

const Span = styled.span`
  display: flex;
  width: 100%;
  font-size: 0.75rem;
  justify-content: center;
  align-items: center;
  color: grey;
  margin: 0;`


