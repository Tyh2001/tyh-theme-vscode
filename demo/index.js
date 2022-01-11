import TyhButton from '../packages/button'
import TyhList from '../packages/list'
const components = [
  TyhButton,
  TyhList
]

/**
 * 
 * @param {*} app 
 */
const install = app => {
  components.forEach(i => {
    app.use(i)
  })
}

const tyhUi = {
  version: "2.1.0",
  install
}

/**
 * 
 * @returns 
 */
function version () {
  return `当前版本是：${tyhUi.version}`
}

// version()

class Tyh { }

class User extends Tyh {
  constructor() {
    super()
  }
}

export {
  install,
  TyhButton,
  TyhList,
}

export default tyhUi
