import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import './styles/index.scss';
export const CardInfo = ({ title = 'Paideim', content = 'info message', linkTo = '/' }) => {
  return (
    <div className="card-info__container">
      <Card className="card__header">
        <CardHeader tag="h3">{title}</CardHeader>
      </Card>
      <div className="card__info">
        <Card>
          <CardBody>
            <CardTitle>
              {' '}
              <i className="far fa-check-circle card__icon"></i>
            </CardTitle>
            <CardText>{content}</CardText>
            <Link to={linkTo}>
              <Button color="secondary" className="button__alert">
                Continue
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
