import { useParams } from 'react-router-dom';

const AboutParams = () => {
  const { someParam } = useParams();
  return (
    <section>
      <h1>{`Your param: ${someParam}`}</h1>
      <p>How is this working then? So the link for this route used the input value that was typed in to add to the
        url</p>
      <p>{`The route for this component is therefore /about-params/${someParam}`}</p>
      <p>Normally, we define the key used for the param in the path prop to the Route component by using a colon (:)</p>
      <p>I.e. /about-params/:someParam</p>
      <p>The implementation used in this app is a little different, instead we have a parent Route component wrapping
        two other nested Route components</p>
      <p>The parent Route component has a path of 'about-params' but no element</p>
      <p>One nested Route as no path</p>
      <p>We can extract that the actual param was using the useParam hook provided by react-router-dom. This provides an
        object where the keys are the param names we defined and the values are the values used in the url</p>
      <p>A common use case for this is to take a dynamic value such as an id</p>
      <p>We can then use the passed id to select some entity (e.g. a person or a book) from the state</p>
      <p>When we look at backend servers, we could also use the id to fetch some data about an entity from a server
        database</p>
    </section>
  );
};

export default AboutParams;