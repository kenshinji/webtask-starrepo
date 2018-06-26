module.exports = function(ctx, done) {
  const ghme = require('octonode').client(ctx.data.TOKEN).me();
  ghme.star(`${ctx.data.username}/${ctx.data.reponame}`, () => {
    done(null, `You starred ${ctx.data.username}/${ctx.data.reponame}`);
  });
}
