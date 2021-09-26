db.issues.remove({});
db.deleted_issues.remove({});

const issuesDB = [
  {
    id: 1,
    status: 'New',
    owner: 'Ravan',
    effort: 5,
    created: new Date('2021-09-25'),
    due: undefined,
    title: 'Fix error'
  },
  {
    id: 2,
    status: 'Assigned',
    owner: 'Eddie',
    effort: 14,
    created: new Date('2021-09-25'),
    due: new Date('2021-09-25'),
    title: 'Missing Styling'
  },
];

db.issues.insertMany(issuesDB);
const count = db.issues.count();
print('Inserted', count, 'issues');

db.counters.remove({ _id: 'issues' });
db.counters.insert({ _id: 'issues', current: count });

db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });
db.issues.createIndex({ title: 'text', description: 'text' });

db.deleted_issues.createIndex({ id: 1 }, { unique: true });