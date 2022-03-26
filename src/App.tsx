import {QueryClient, QueryClientProvider} from 'react-query'
import Default from './components/Default';
import {ReactQueryDevtools} from "react-query/devtools";


function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Default/>
    </div>
    <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
  );
}

export default App;
