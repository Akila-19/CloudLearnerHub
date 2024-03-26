import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Testimonials() {
    const testimonialArray = [
        {
            id: '1',
            personName: 'person1',
            feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            courseName: 'course 1',
            // profileImg:'./assests/proImg1.png'
        },
        {
            id: '2',
            personName: 'person2',
            feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            courseName: 'course 1',
            // profileImg:'./assests/proImg1.png'
        },
        {
            id: '3',
            personName: 'person3',
            feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            courseName: 'course 1',
            // profileImg:'./assests/proImg1.png'
        },
        {
            id: '4',
            personName: 'person4',
            feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            courseName: 'course 1',
            // profileImg:'./assests/proImg1.png'
        },
        {
            id: '5',
            personName: 'person5',
            feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            courseName: 'course 1',
            // profileImg:'./assests/proImg1.png'
        },
    ];
       // Chunk the testimonialArray into groups of 3

       // Function to chunk the array into groups of size 'size'
       function chunkArray(array, size) {
           const chunkedArray = [];
           let index = 0;
           while (index < array.length) {
               chunkedArray.push(array.slice(index, size + index));
               index += size;
           }
           return chunkedArray;
       }
       const chunkedTestimonials = chunkArray(testimonialArray, 3);
     
    return (
        <>
        <h1>Testimonials</h1>
        <Carousel>
        {chunkedTestimonials.map((chunk, index) => (
            <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                    {chunk.map((data) => (
                        <div key={data.id} className='card m-3 p-3 w-25'>
                            <div className='headerSection'>
                                <div>
                                    <div className='profileName'>{data.personName}</div>
                                    <div className='courseName'>{data.courseName}</div>
                                </div>
                            </div>
                            <div>{data.feedback}</div>
                        </div>
                    ))}
                </div>
            </Carousel.Item>
        ))}
    </Carousel>
    </>
    )
}

export default Testimonials