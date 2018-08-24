import React from 'react';
import StyledComponents from './Card';
import { Card } from 'antd';

const { LargeButton } = StyledComponents;

const Course = (props) => (
  <Card style={{ width: '100%' }} title={props.course.title}>
        <h6 className="card-subtitle md-2 test-muted">{props.course.author}</h6>
        <p className="card-text">{props.course.description}</p>
        <LargeButton type="primary" href={props.course.url} >
          Go to course
        </LargeButton>
</Card>
);

export default Course;