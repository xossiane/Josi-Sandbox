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
    content_type: "animal",
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
export default function AnimalPage({ response }) {
  return (
    <div className={styles[`AnimalPage__container`]}>
      <header className={styles[`AnimalPage__header`]}>
        <Heading color="white" level="1">
          Where do they live?
        </Heading>
        <Text color="white" size="small" className={styles[`AnimalPage__subHeader`]}>
          We are just testing how things come from contentful and I chose
          animals
        </Text>
      </header>
      {response.map((item) => {
        return (
          <>
          <img
              src={item.fields.image.fields.file.url}
              alt="animal"
              className={styles[`AnimalPage__img`]}
            />
            <Text color="orange" size="large" className={styles[`AnimalPage__habitat`]}>{item.fields.habitat}</Text>
            <Heading color="dark" level="2">
              {item.fields.name}
            </Heading>
            
            <Text color="dark" size="small" className={styles[`AnimalPage__description`]}>{item.fields.description}</Text>
            {" "}
            {/* this is where my data shows into app */}
          </>
        );
      })}
    </div>
  );
}
