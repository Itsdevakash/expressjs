// const express = require('express')
import express from 'express';
import homne, { contact } from './pages/home.js';
import about from './pages/about.js';
const app = express()
const port = 3800

app.get('/', (req, res) => {
 res.send(homne())
});

app.get('/about', (req, res) => {
  res.send(about)
});

app.get('/contact', (req, res) => {
  res.send(contact())
});

app.listen(port)
 