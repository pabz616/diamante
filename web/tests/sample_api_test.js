
Feature('MVP');

Scenario('Test Sample API', async (I) => {
    await I.sendGetRequest('/posts/1');
    I.see('quia et suscipit');
});
