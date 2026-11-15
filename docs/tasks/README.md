# Task definitions

Every task in this project is described by a JSON file in this folder. The
file is the **progress bar** and the **completion criterion** of the task: it
lists the assertions that have to hold when the task is finished.

```
docs/tasks/<task-id>.json
```

## Workflow

1. **Before any work starts**, create `docs/tasks/<task-id>.json`. If the task
   has more than one step, this file is step one.
2. Add assertions as the scope is confirmed. The list grows with the task.
3. Build, then verify:

   ```
   node scripts/qa/run.mjs build -- npm run build
   node scripts/qa/run.mjs verify -- node scripts/qa/verify-task.mjs <task-id>
   ```

4. Read `tmp/qa/verify.status`. `EXIT=0` means the task is finished.
5. Report and stop. A passing verifier ends the task — no optional extra
   checks, no "let me confirm once more".

```
npm run task:verify -- <task-id>     # verify the current build
npm run task:list                    # list every task definition
```

## Task file format

```jsonc
{
  "id": "example-task",
  "title": "Short human readable name",
  "summary": "One line describing what the task delivers.",
  "assertions": [
    { "type": "routeExists", "route": "/example/" },
    { "type": "routeMeta", "route": "/example/" }
  ]
}
```

`id` must match the file name.

## Assertion types

| type | fields | checks |
|---|---|---|
| `routeExists` | `route` | the route is present in the build |
| `routeMeta` | `route` | title ≤ 70 chars, description 70–175 chars, absolute canonical, og:image, JSON-LD with Organization / WebSite / BreadcrumbList |
| `routeContains` | `route`, `selector` or `text` | the built page contains a marker |
| `routeLinksTo` | `route`, `href` | the built page links to the target route |
| `navGroups` | `menu`, `groups[]` | the main navigation carries the expected groups; each group may declare `label`, `childCount` and `childHrefs[]` |
| `dataEntries` | `module`, `export`, `count`, `slugs[]`, `idField` | a data module exports the expected entries |
| `dataExportExists` | `module`, `export` | a data module exports the named binding |
| `fileExists` | `path` | the source file exists |
| `fileContains` | `path`, `text` | the source file contains a string |
| `fileDiffAdditive` | `path` | the tracked file changed by insertions only — encodes "extend, never rewrite" constraints |
| `imageExists` | `path` | the public asset exists |
| `pageCount` | `min` | the build produced at least this many pages |

A new kind of check is added as a handler in `scripts/qa/assertions.mjs`.
Existing task files never have to change.

## Gates that always run

Three project wide gates run for every task, whatever the task file says:
SEO metadata, internal links and the content audit. Failures listed in
`docs/qa/baseline.json` are reported as known, not as new problems.

## Rules

- The task file is not edited to make a failing check disappear. If the scope
  changes, change the task definition and say so in the report.
- `fileDiffAdditive` is how a constraint such as "the landing page may only be
  extended" is enforced mechanically instead of being left to review.
