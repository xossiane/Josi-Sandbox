

//calling API data from contentful using:
import * as contentful from "contentful";
import Heading from "../../components/atoms/Heading";
import Text from "../../components/atoms/Text";


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
      <header className={styles[`AnimalPage__header`]}>
      
      </header>
      <Heading color="dark" level="4">{item.fields.name}</Heading>
      <Text color="orange">{item.fields.habitat}</Text>
      <img src={item.fields.image.fields.file.url} alt="animal" width="200" height="200" />{" "}
      {/* this is where my data shows into app */}
      </>
      )
    } )
      
  )
}


