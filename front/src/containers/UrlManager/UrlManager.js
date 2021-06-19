import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import API from '../../helpers/api';

import '../../style/urlmanager.css';
import '../../style/utils.css';
import 'react-toastify/dist/ReactToastify.css';

const UrlDisplayer = ({ url, shortUrl, urlId, setAllUrls }) => {
    const deleteShortUrl = () =>
        API.delete(`/deleteShortUrl/${urlId}`)
            .then(res => {
                setAllUrls(res.data)
            })
            .catch(err =>
                toast.error('Erreur interne !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            );
    return (
        <Row className="justify-content-center mt-3">
            <ToastContainer />
            <Col className="url-container" md={6}>
                <Row className="mt-3 mb-3">
                    <Col md={10}>
                        <a className="url dont-break-out" href={url}>{url}</a> : <a className="short-url" href={shortUrl}>{shortUrl}</a>
                    </Col>
                    <Col md={2}>
                        <Button onClick={() => deleteShortUrl()} className="btn-delete">Supprimer</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const UrlManager = () => {
    const [allUrls, setAllUrls] = useState([]);

    useEffect(() => {
        API.get('/getAllShortUrl')
            .then(res => {
                setAllUrls(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <Container id="urlmanager">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="mt-5">Retrouvez tout vos Pinklinks</h2>
                </Col>
            </Row>
            {
                allUrls && allUrls.length > 0 ?
                    allUrls.map((url, i) =>
                        <UrlDisplayer key={i} url={url.url} shortUrl={url.shortUrl} urlId={url.urlId} setAllUrls={setAllUrls} />
                    )

                    :
                    <></>
            }
        </Container>
    );
}

export default UrlManager;