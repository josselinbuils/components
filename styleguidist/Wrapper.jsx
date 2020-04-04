import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

const Wrapper = ({ children }) => <Router>{children}</Router>;

export default Wrapper;
