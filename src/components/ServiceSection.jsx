import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Icons from "react-icons/fi";
import { db } from "../firebase/firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

export default function ServiceSection() {
  const [services, setServices] = useState([]);

  const get_services = async ()=> {
    try {
      let store = [];
      const querySnapshot = await getDocs(collection(db, "services"));
      querySnapshot.docs.forEach((doc) => {
        store.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setServices(store);
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  }
  
  useEffect(()=>{
    get_services()
  },[]);

  const RenderIcons =({icon_name})=>{
    console.log(icon_name)
    const IconComponent = Icons[icon_name];
    return IconComponent?<IconComponent/>:<span>Icon not found</span>
  }

  return <Presenter services={services} RenderIcons = {RenderIcons}/>;
}

function Presenter({services, RenderIcons}) {
  return (
    <section id="services" className="section" style={{background:"var(--light-gray)"}}>
      <Container>
        <Row>
          <Col>
            <h1 className="section-title text-center mb-5 fs-1">Our Services</h1>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <div className="card-custom text-center">
                <div className="service-icon mb-3" style={{fontSize:"2rem", color: "var(white)"}}>
                  <RenderIcons icon_name={service.icon} />
                </div>

                <h4 className="mb-3">{service.name}</h4>
                <p className="text-muted">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
