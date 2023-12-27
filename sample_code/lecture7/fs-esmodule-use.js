import { open } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

let fileHandle;
try {
  fileHandle = await open(
    dirname(fileURLToPath(import.meta.url)) + '/hw2.txt',
    'r'
  );
  const content = await fileHandle.readFile({ encoding: 'utf-8' });
  console.log(content);
} catch (err) {
  console.error(err);
} finally {
  if (fileHandle) {
    await fileHandle.close();
  }
}
