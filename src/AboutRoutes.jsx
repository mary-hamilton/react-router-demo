const AboutRoutes = () => {
  return (
    <section>
      <p>Each route uses a Route component with a 'to' prop which defines the route url e.g. /about-routes</p>
      <p>The component that is rendered if the route matches is defined by the element prop, in this case, you are
        seeing the AboutRoutes component</p>
      <p>The Routes component can therefore be thought of as a switch statement (in an older version, the component was
        called 'Switch')</p>
    </section>
  );
};

export default AboutRoutes;