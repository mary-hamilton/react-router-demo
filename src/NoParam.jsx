const NoParam = () => {
  return (
    <section>
      <p>You are seeing this because you entered nothing in the text input box</p>
      <p>This means that there was no param so the route path is '/about-params/</p>
      <p>This case is handled by wrapping 2 Route components inside a parent Route</p>
      <p>The parent Route component has the path prop as '/about-params'</p>
      <p>This Route component (with it's element prop set to 'NoParam') has no path prop but has the 'index' flag prop</p>
      <p>The 'AboutParams' component is accessed by the other nested Route component, this is where we specify add the param
        on the path with a colon: ':someParam'</p>
      <p>This is not a special thing we have to do the get the param, we could just have a Route component with the path
        as '/about-params/:someParam' but this would not catch the case where there was no param</p>
      <p></p>
    </section>
  );
};

export default NoParam;