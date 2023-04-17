const AboutUseNavigate = () => {
  return (
    <section>
      <p>useNavigate is a hook (it must therefore follow the normal hook rules) that can only be used within the
        BrowserRouter context (i.e. it is in some descendant component of the BrowserRouter component</p>
      <p>A call to the hook returns a function, we can use the returned function in our JavaScript to change the route to the string that we pass in</p>
      <p>Have a look in the RouterDemo component and look at the link for this component ('AboutUseNavigate')</p>
      <p>A common use-case for this is if we want to change the route path after some other action such as submitting a form where we would want to navigate a user back to some other 'page'</p>
    </section>
  );
};

export default AboutUseNavigate;