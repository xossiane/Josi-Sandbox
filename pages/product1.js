
//calling API data from contentful using:
import * as contentful from "contentful"

var client = contentful.createClient({
    space: '4djtqi8t430u',
    accessToken: 'QMeEBnbCOoo9R2sA3zjWyyORBqgfN8dP3dwwtImSo7s',
  });

  //this is where my function starts
export default function ProductPage(props) {
    
  return ( 
  
  <>
  <h1>{props.heading}</h1>
  <h1>{props.heading}</h1>  {/* this is where my data shows into app */}
  
  </>);
}

export async function getStaticProps() {
    //get data from headless CMS
    const product = await client.getEntry('uubAII3HciTih2Le6ZsT2')
  return {
    props: {
        heading: product.fields.heading,
    },
  };
}
