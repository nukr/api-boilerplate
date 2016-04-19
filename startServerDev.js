import chokidar from 'chokidar'
import { spawn } from 'child_process'

let server = spawnServer()

chokidar.watch('./src', {
  ignored: [/[\/\\]\./, /\/data\//],
  ignoreInitial: true
}).on('change', restartServer)
  .on('add', restartServer)
  .on('addDir', restartServer)
  .on('unlink', restartServer)
  .on('unlinkDir', restartServer)

function spawnServer () {
  return spawn('node', ['src/'], {stdio: 'inherit'})
}

function restartServer () {
  if (server) server.kill('SIGKILL')
  server = spawnServer()
}

