describe("Todo list", () => {
  beforeEach(() => {
    console.log("Before each !");
  });

  beforeAll(() => {
    console.log("Before all !");
  });

  afterEach(() => {
    console.log("After each");
  });

  afterAll(() => {
    console.log("After all");
  });

  it.only("should display a list x ONLY", () => {
    expect(5 + 5).toEqual(10);
  });

  it("should display a list of todos", () => {
    expect(40 + 2).toEqual(42);
  });
});
