const NestedParam = () => {
  return (
    <section>
      <p>This is a nested path accessed via a nested route</p>
      <p>It is reacted with the path '/about-params/nested-path' but the router accessed the Route component through a
        nested Route</p>
      <p>The Router first matched '/about-params', it then matched the nested Route component which is the one
        with the path prop as 'nested-path'</p>
    </section>
  );
};

export default NestedParam;