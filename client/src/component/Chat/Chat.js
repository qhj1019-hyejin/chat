import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';

const Chat = ({}) => {

    // 하다가 막힌 것  : queryString , socket connect { transports: ['websocket'] } 추가

    const [name , setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'http://localhost:5000';

    const socket = io.connect(ENDPOINT, { transports: ['websocket'] });

    const location = useLocation();

    useEffect(()=>{
        const searchParams = new URLSearchParams(location.search);
        
        setName(searchParams.get('name'));
        setRoom(searchParams.get('room'));

        socket.emit('join',{name, room});
        console.log(socket);
    },[ENDPOINT,location.search]);

    return(
        <h1>Chat</h1>
    )
}

export default Chat;