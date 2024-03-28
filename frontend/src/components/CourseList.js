import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useCourseContext } from './SelectedCourse';
import { useNavigate } from 'react-router-dom';
function CourseList() {
  const [data, setData] = useState([]);
  const { setSelectedCourse } = useCourseContext();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://ec2-44-204-18-44.compute-1.amazonaws.com:8080/courses')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course); // Set the selected course using context
    navigate('/payment'); 
  };

  return (
    <div>
      <div className="row w-100 d-flex justify-content-center">
        {data.map((course, index) => (
          <div key={index} className="col-5 my-3 mx-2">
            <Card style={{ height: '350px' }}>
              <Card.Body>
                <Card.Title>{course.courseName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{course.price}</Card.Subtitle>
                <Card.Text>
                  {course.description}
                </Card.Text>
                <Button onClick={() => handleEnrollClick(course)}>Enroll</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
