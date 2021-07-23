import React, { useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        backgroundColor: '#2A2A3F',
        height: '946px',
    },
    container: {
        border: '5px solid #E4AE28',
        width: '45%',
        margin: '0 auto',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
});

function FormMessage(props) {
    const classes = useStyles();
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        object: '',
        message: '',
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        console.log('form');
        await axios.post(`http://localhost:8000/message/`, form);
    };

    return (
        <div className={classes.wrapper}>
            <div
                style={{
                    height: '150px',
                }}
            ></div>
            <div style={{ display: 'flex' }}>
                <div
                    style={{
                        color: '#E4AE28',
                        fontSize: '50px',
                        writingMode: 'vertical-lr',
                        textOrientation: 'upright',
                        marginLeft: '100px',
                    }}
                >
                    ME CONTACTER
                </div>
                <div className={classes.container}>
                    <div>
                        <input
                            type="text"
                            name="firstname"
                            value={form.firstname}
                            onChange={handleChange}
                            placeholder="Prénom"
                            style={{
                                margin: '20px',
                                width: '300px',
                                fontSize: '20px',
                            }}
                        ></input>
                        <input
                            type="text"
                            name="lastname"
                            value={form.lastname}
                            onChange={handleChange}
                            placeholder="Nom"
                            style={{
                                margin: '20px',
                                width: '300px',
                                fontSize: '20px',
                            }}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="email"
                            style={{
                                margin: '20px',
                                width: '300px',
                                fontSize: '20px',
                            }}
                        ></input>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Téléphone"
                            style={{
                                margin: '20px',
                                width: '300px',
                                fontSize: '20px',
                            }}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="object"
                            value={form.object}
                            onChange={handleChange}
                            placeholder="Objet"
                            style={{
                                margin: '20px',
                                width: '650px',
                                fontSize: '20px',
                            }}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Message"
                            style={{
                                margin: '20px',
                                width: '650px',
                                fontSize: '20px',
                            }}
                        ></input>
                    </div>
                    <div>
                        <button
                            style={{
                                margin: '20px',
                                width: '100px',
                            }}
                            onClick={handleSubmit}
                        >
                            Envoyer
                        </button>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '25px',
                }}
            >
                <div>
                    <p style={{ marginRight: '100px' }}>
                        nicolasmonmegegeneste@gmail.com
                    </p>
                </div>
                <div>
                    <p style={{ marginLeft: '50px' }}>06 51 36 66 13</p>
                </div>
            </div>
        </div>
    );
}

export default FormMessage;
