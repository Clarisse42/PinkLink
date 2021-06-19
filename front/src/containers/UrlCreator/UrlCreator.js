import React, { useState } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import API from '../../helpers/api';

import '../../style/urlcreator.css';
import 'react-toastify/dist/ReactToastify.css';

const NewPinkLink = ({ shortUrl }) => {
    return (
        <Row className="justify-content-center">
            <Col className="pinklink-container mt-5" md={6}>
                <p className="mt-2">Voici votre PinkLink :</p>
                <a href={shortUrl}>{shortUrl}</a>
            </Col>
        </Row>
    );
}

const UrlError = ({ urlError }) => {
    return (
        <Form.Text className="text-muted">
            {urlError}
        </Form.Text>
    );
}

const UrlCreator = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState(null);
    const [urlError, setUrlError] = useState(null);

    const sendUrl = () => {
        setShortUrl(null);
        setUrlError(null);
        API.post('/addShortUrl', {
            url
        })
            .then(res => {
                setShortUrl(res.data[0].shortUrl);
            })
            .catch(err => {
                if (err.response.status === 400)
                    setUrlError(err.response.data);
                else
                    toast.error('Erreur interne !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
            });
    }
    return (
        <Container id="urlcreator">
            <ToastContainer />
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form className="mt-5">
                        <Form.Group >
                            <Form.Label className="label-urlcreator">Collez l'URL à raccourcir : </Form.Label>
                            <Form.Control
                                className="input-urlcreator"
                                type="text"
                                placeholder="Entrez le lien ici"
                                onChange={e => setUrl(e.target.value)} />
                        </Form.Group>
                        {
                            urlError &&
                            <UrlError urlError={urlError} />
                        }
                        <Button className="btn-pinklink" onClick={() => sendUrl()}>Créer un PinLink</Button>
                    </Form>
                </Col>
            </Row>
            {
                shortUrl &&
                <NewPinkLink shortUrl={shortUrl} />

            }
        </Container >
    )
}

export default UrlCreator;