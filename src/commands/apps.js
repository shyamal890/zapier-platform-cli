const utils = require('../utils');

var apps = () => {
  return utils.listApps()
    .then((data) => {
      console.log('All apps listed below.\n');
      utils.printData(data.apps, [
        ['Title', 'title'],
        ['Unique Key', 'key'],
        ['Timestamp', 'date'],
        ['Linked', 'linked'],
      ]);
      if (!data.apps.length) {
        console.log('\nTry adding an app with the `zapier create` command.');
      } else {
        console.log('\nTry linking the current directory to a different app with the `zapier link` command.');
      }
    });
};
apps.help = 'Lists all the apps you can access.';
apps.example = 'zapier apps';
apps.docs = `\
Lists any apps that you have admin access to. Also checks for the current directory for a linked app, which you can control with \`zapier link\`.

${'```'}bash
$ zapier apps
# All apps listed below.
# 
# ┌─────────┬────────────┬─────────────────────┬────────┐
# │ Title   │ Unique Key │ Timestamp           │ Linked │
# ├─────────┼────────────┼─────────────────────┼────────┤
# │ Example │ Example    │ 2016-01-01T22:19:28 │ ✔      │
# └─────────┴────────────┴─────────────────────┴────────┘
# 
# Try linking the current directory to a different app with the \`zapier link\` command.
${'```'}
`;

module.exports = apps;
