/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
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
  const habitat = await client.getEntries({
    content_type: "habitat"
  })
  return {
    props: {
      response: animal.items,
      response2: animal.items

      /* ...animal.fields, */
      /* image: animal.fields.image.fields.file.url, */
    },
  };
}

//this is where my function starts
export default function AnimalPage({ response, response2 }) {
  return (
    <div className={styles[`AnimalPage__container`]}>
      <header className={styles[`AnimalPage__header`]}>
        <Heading color="white" level="1">
          Where do they live?
        </Heading>
        <Text
          color="white"
          size="small"
          className={styles[`AnimalPage__subHeader`]}
        >
          We are just testing how things come from contentful and I chose
          animals
        </Text>
      </header>
      {response.map((item) => {
        console.log(response)
        return (
          <>
            <img
              src={item.fields.image.fields.file.url}
              alt="animal"
              className={styles[`AnimalPage__img`]}
              key={item.fields.id}
            />
            
            
               {item.fields.habitat.map((item) => (
                <Text
               color="orange"
               size="large"
               className={styles[`AnimalPage__habitat`]}
               key={item.sys.id}
             >
              {item.fields.name}
               </Text>
               ))}
          
            <Heading color="dark" level="2" key={item.fields.id}>
              {item.fields.name}
            </Heading>
            <Text
              color="dark"
              size="small"
              className={styles[`AnimalPage__description`]}
              key={item.fields.id}
            >
              {item.fields.description}
            </Text>{" "}
            {/* this is where my data shows into app */}
          </>
        );
      })}
    </div>
  );
}

/* 
*/