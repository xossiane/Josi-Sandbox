//calling API data from contentful using:
import * as contentful from "contentful";


var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACESS_TOKEN,
});


export async function getStaticProps() {
  //get data from headless CMS
  const animal = await client.getEntries({
    content_type: "animal"
  });
  return {
    props: {

      response: animal.items,



      /* ...animal.fields, */
      /* image: animal.fields.image.fields.file.url, */
    },
  };

}

//this is where my function starts
export default function AnimalPage({response}) {
  
  return (
    
    response.map((item) => {
      
      return (
      <>
      <h1>{item.fields.name}</h1>
      <h1>{item.fields.habitat}</h1>
      <img src={item.fields.image.fields.file.url} alt="animal" width="200" height="200" />{" "}
      {/* this is where my data shows into app */}
      </>
      )
    } )
      
  )
}


