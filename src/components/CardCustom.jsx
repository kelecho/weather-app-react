import React from 'react'
import { Card } from 'react-bootstrap'

export const CardCustom = ({ title,  icon, content  }) => {
  return (
    <Card className='margin-large'>
        <Card.Body>
            <Card.Title>
                { icon }
                { title }
            </Card.Title>
                { content }
        </Card.Body>
    </Card>
  )
}
