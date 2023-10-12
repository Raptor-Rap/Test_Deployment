import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  createDestination,
  deleteDestination,
  getDestinations,
  updateDestination,
} from "../../utils/api/destinasi/api";

import FaqComponent from "../../components/faq";
import Layout from "../../components/layout";

export default function Destinasi() {
  const navigate = useNavigate();
  const [destinations, setDestination] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDestinations();
      setDestination(result);
    } catch (error) {
      console.log(error.toString());
    }
  }

  return (
    <Layout>
      <div className="destinasi-page">
        <div className="destinasi min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                  Semua Destinasi
                </h1>
                <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </Col>
            </Row>
            <Row>
              {destinations.map((destination) => {
                return (
                  <Col
                    key={destination.id}
                    className="shadow rounded"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <img
                      src={destination.image}
                      alt="unsplash.com"
                      className="w-100 mb-5 rounded-top"
                    />
                    <div className="star mb-2 px-3">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h5 className="mb-5 px-3">{destination.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 text-primary fw-bold">
                        {destination.price}
                      </p>
                      <button className="btn btn-danger rounded-1">
                        Beli Tiket
                      </button>
                    </div>
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Col className="text-center">
                <button
                  className="btn btn-success rounded-5 btn-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  onClick={() => navigate("/adddestination")}
                >
                  Tambah Destinasi
                  <i className="fa-solid fa-plus ms-1"></i>
                </button>
              </Col>
            </Row>
          </Container>
        </div>

        <FaqComponent />
      </div>
    </Layout>
  );
}
