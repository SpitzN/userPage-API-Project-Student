// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance


const apiManager = new APIManager()
const renderer = new Renderer();

const loadData = () => apiManager.loadData()
const renderData = () => renderer.render(apiManager.data)

