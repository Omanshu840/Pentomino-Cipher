import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import key from './key';
import reverseKey from './reverseKey';

const cipherKey = key
const decipherKey = reverseKey;

const App = () => {

  const [plainText, setPlainText] = useState("")
  const [cipherText, setCipherText] = useState("")

  const Encrypt = () => {
    
    let newCipherText = "";

    for(let i = 0; i<plainText.length; i++) {
      newCipherText = newCipherText + cipherKey[plainText[i]];
    }

    setCipherText(newCipherText)
  }

  const Decrypt = () => {

    let newPlainText = "";

    for(let i = 0; i<cipherText.length; i+=2) {
      if(cipherText[i]===" " || cipherText[i]==="," || cipherText[i]===".") {
        newPlainText = newPlainText + decipherKey[`${cipherText[i]}`];
        i--;
      }
      else {
        newPlainText = newPlainText + decipherKey[`${cipherText[i]}${cipherText[i+1]}`];
      }
    }

    setPlainText(newPlainText)
  }
  
  return (
    <div>
      <Row>
        <h2 style={{"textAlign": "center"}} className="mt-4">Pentomino Cipher</h2>
      </Row>
      <Container>
        <Row className='mb-3'>
          <Col>
            <label for="exampleFormControlTextarea1" class="form-label">Plain Text</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={plainText} onChange={(e) => setPlainText(e.target.value)}></textarea>
            <Button className="mt-1" onClick={Encrypt}>Encrypt</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <label for="exampleFormControlTextarea2" class="form-label">Cipher Text</label>
            <textarea class="form-control" id="exampleFormControlTextarea2" rows="3" value={cipherText} onChange={(e) => setCipherText(e.target.value)}></textarea>
            <Button className="mt-1" onClick={Decrypt}>Decrypt</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
