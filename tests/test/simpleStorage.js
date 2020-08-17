const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  it("Should set the value of data", async () => {
    let simpleStorage = await SimpleStorage.deployed();
    await simpleStorage.set("this is the new value");
    let result = await simpleStorage.get();
    assert(result === "this is the new value");
  });
});
