import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { db } from "../firebase/firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import "../styles/components/PortfolioSection.css";

export default function PortfolioSection(){
  const [portfolioItems, setPortfolioItems] = useState([]);

  const get_portfolio = async ()=> {
      try {
        let store = [];
        const querySnapshot = await getDocs(collection(db, "portifolio"));
        querySnapshot.docs.forEach((doc) => {
          store.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPortfolioItems(store);
      } catch (error) {
        console.log(`error: ${error.message}`);
      }
    }
  
    useEffect(()=>{
      get_portfolio();
    })

    return <Presenter portfolioItems={portfolioItems} />
}

function Presenter({portfolioItems}){
  return(
    <section id="portfolio" className="section">
      <Container>

        <Row>
          <Col xs={12}>
            <h1 className="section-title fs-1">Our Portfolio</h1>
          </Col>
        </Row>
        
        <Row>
          {
            portfolioItems.map(item=>(
              <Col key={item.id} lg={4} md={6} className="mb-4">
                <div className="portfolio-item">
                  <img src={item.image} alt={item.name}/>
                  <div className="portfolio-overlay">
                    <h4 className="text-white mb-2">{item.name}</h4>
                    <p className="text-white-50">{item.category}</p>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>

      </Container>
    </section>
  )
}