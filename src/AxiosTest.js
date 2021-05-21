import React from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'

export default function AxiosTest() {

    const clickHandler = () => {
        const url = 'http://localhost:8000/test';
        const method = 'post'


        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
        }

        const body = { username: 'ianrios', password: 'changeme', email: 'ian@ainc.com' }
        const data = { username: 'ianrios', password: 'changeme', email: 'ian@ainc.com' }

        axios({
            url,
            method,
            headers,
            body,
            data,
        })
            .then(res => console.log(res))
            .catch(err => console.log('error: ', err));
    }

    return (
        <div>
            <Button onClick={clickHandler}>click me</Button>
        </div>
    )
}
