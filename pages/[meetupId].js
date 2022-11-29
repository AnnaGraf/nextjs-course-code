import { Fragment } from 'react';
import MeetupDetail from '../components/meetups/MeetupDetail';

function MeetupDetails(){
  return(
    <MeetupDetail 
      image='https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='
      title='A title' 
      address ='Some Street 45' 
      description ='One meetup' /> 
  );
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      { params: {
        meetupId: 'm1',
      }, },
      { params: {
        meetupId: 'm2',
      }, },
    ],
  }
}

export async function getStaticProps(context) {
  // fetch data
  const meetupId = context.params.meetupId; 

  return {
    props: {
      meetupData: {
        image:'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
        id: meetupId,
        title:'A title', 
        address:'Some Street 45', 
        description:'One meetup', 
      },
    },
    revalidate: 10, //reload every 10th second
  };
}

export default MeetupDetails; 