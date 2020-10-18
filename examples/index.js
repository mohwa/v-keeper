const {
  log,
  error,
  warn,
  info,
  debug,
  assert,
  dir,
  table,
  group,
  groupTable,
  groupDir,
  groupLog,
  groupCollapsed,
  groupCollapsedLog,
  groupCollapsedDir,
  groupCollapsedTable,
} = require('../../lib');

log('Hello World', { color: 'white', backgroundColor: 'green', fontWeight: 'bold', fontSize: '10px' });
error('Hello World', { color: 'cyan', backgroundColor: 'yellow', textDecoration: 'underline', fontSize: '20px' });
warn('Hello World', { color: 'magenta', backgroundColor: 'blue', textDecoration: 'line-through', fontSize: '30px' });
info('Hello World', { color: 'blue', backgroundColor: 'magenta', fontStyle: 'italic', fontSize: '40px' });
debug('Hello World', { color: 'yellow', backgroundColor: 'cyan', fontSize: '50px' });
assert(() => true /* or false */, 'Hello World', {
  color: 'green',
  fontSize: '50px',
});

dir({ x: 1 });
table({ x: 1, y: 2 });

group(
  [
    1,
    2,
    () => group([3, 4, 5], 'GROUP 2'),
    '6',
    () => log('log'),
    7,
    () => table({ x: 1, y: 2 }),
    () => groupTable({ x: 1, y: 2 }, 'GROUP 3'),
    8,
    () => group([9, 10], 'GROUP 4'),
    () => groupDir({ x: 1, y: 2 }, 'GROUP 5'),
  ],
  'GROUP 1'
);

groupLog(1, null, 'GROUP LOG', { color: 'white' });
groupDir({ x: 1, y: 2 }, 'GROUP DIR', { color: 'cyan' });
groupTable({ x: 1, y: 2 }, 'GROUP TABLE', { color: 'magenta' });

groupCollapsed(
  [
    () => error('error'),
    1,
    2,
    () =>
      groupCollapsed(
        [
          3,
          () => info('Hello World', { color: 'green', backgroundColor: 'yellow' }),
          () => warn('Hello World', { color: 'yellow', backgroundColor: 'white' }),
          4,
        ],
        'GROUP COLLAPSED 2'
      ),
  ],
  'GROUP COLLAPSED 1'
);

groupCollapsedLog('test', null, 'GROUP COLLAPSED LOG', { color: 'green' });
groupCollapsedDir({ x: 1, y: 2 }, 'GROUP COLLAPSED DIR', { color: 'yellow' });
groupCollapsedTable({ x: 1, y: 2 }, 'GROUP COLLAPSED TABLE', { color: 'blue' });
