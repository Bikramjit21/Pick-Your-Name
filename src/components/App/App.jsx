// import React,{setState} from 'react';
// import './App.scss';
// import Header from '../Header/Header';
// import SearchBox from '../SearchBox/SearchBox';

// function App() {
//   const state = {
//     headerText:"Pick your Name!",
//     headerExpanded:true
//   }

//   const handleInputChange = (inputText) =>{
//     // console.log(`Input - ${inputText}`)
//     setState({headerExpanded:false})
//   }
//   return (
//     <div className="App">
//       <Header headerExpanded={headerExpanded} headTitle={state.headerText}/>
//       {/* <h3>{state.headerText}</h3> */}
//       <SearchBox onInputChange={handleInputChange} />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.scss';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChage={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;