import { Toast } from "@capacitor/toast"

const app = Elm.Main.init({
  node: document.getElementById('app')
})

Toast.show({
  text: "Hello! If you see this, capacitor plugins work too!"
})