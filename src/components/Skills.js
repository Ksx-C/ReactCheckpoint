import React from "react";
import Card from 'react-bootstrap/Card';

function BgColorExample() {
  return (
    <>
    <div className="SkillzBox">
 
      {['Dark'].map((variant) => (
        <Card 
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
         
        >
          <Card.Body>
            <Card.Title> HTML </Card.Title>
            <Card.Text>
              Learning HTML
            </Card.Text>
          </Card.Body>
        </Card>
        
      ))}

{['Dark'].map((variant) => (
        <Card 
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
         
        >
          <Card.Body>
            <Card.Title> CSS </Card.Title>
            <Card.Text>
              Learning CSS
            </Card.Text>
          </Card.Body>
        </Card>
        
      ))}

{['Dark'].map((variant) => (
        <Card 
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
         
        >
          <Card.Body>
            <Card.Title> JS </Card.Title>
            <Card.Text>
              Learning Javascript
            </Card.Text>
          </Card.Body>
        </Card>
        
      ))}
    

    </div>
    </>
  );
}

export default BgColorExample;