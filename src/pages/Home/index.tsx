import { useEffect } from "react";
import { Button, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Article() {
    const navigate = useNavigate();
    const testRequest = async () => {
        try {
            const res = await fetch(`${window.globalConfig?.appServer}`);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        testRequest();
    }, [])

    return <>
        <section>
            <h3>HOme</h3>
            <Button type="primary" style={{ marginRight: '8px' }} onClick={() => navigate('/about')}>toAbout</Button>
        </section>
    </>
}