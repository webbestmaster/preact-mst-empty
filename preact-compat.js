// preact-compat.js
import React from 'preact-compat';

export default React;
export * from 'preact-compat';

const createContext = require('create-react-context');
const forwardRef = require('create-react-ref/lib/forwardRef');
const createRef = require('create-react-ref/lib/createRef');

export { createContext };

export type {Node} from 'react';

React.createContext = createContext;
React.forwardRef = forwardRef;
React.createRef = createRef;
