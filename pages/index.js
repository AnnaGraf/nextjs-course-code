import Head from 'next/head';
import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

function HomePage(props) {
  return (
  <Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name='description' content='descriptive text of this webbapp'></meta>
    </Head>
    <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://anna-g:WzNkjf24fOleGqB5@cluster0.esmifw5.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    
    const meetups = await meetupsCollection.find().toArray();

    client.close();


  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //reload every 10th second
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
