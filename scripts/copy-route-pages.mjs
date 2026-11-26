import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

for (const route of ['blog', 'showcase']) {
  const directory = join('dist', route)
  await mkdir(directory, { recursive: true })
  await copyFile(join('dist', 'index.html'), join(directory, 'index.html'))
}
