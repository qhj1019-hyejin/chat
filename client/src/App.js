import React from 'react';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Join from './component/Join/Join';
import Chat from './component/Chat/Chat';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" exact element={<Join/>} />
            <Route path="/chat" exact element={<Chat/>} />
        </Routes>
    </Router>
);

export default App;