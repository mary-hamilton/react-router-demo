const AboutLinks = () => {
  return (
    <section>
      <p>The Link component is used to set the current route path</p>
      <p>The 'to' prop defines the url route as a string that is used for that link</p>
      <p>We can wrap the Link component around content that we can click (e.g. some link text)</p>
      <p>Alternatively, we can use useNavigate to programmatically change the current route path with JavaScript</p>
    </section>
  );
};

export default AboutLinks;