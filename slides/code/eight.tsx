const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={() => <div>Index</div>} />
    <Route path="/form" exact={true} component={LocationForm} />
  </Switch>
);

const visit = path =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes />
    </MemoryRouter>
  );

it("should render the form when the `/form` route is visited", () => {
  const { asFragment } = visit("/form");

  expect(asFragment()).toMatchSnapshot();
});
