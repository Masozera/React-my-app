import logo from './logo.svg';
import './App.css';
import './components/styles/stylesheet.css';
import Vic from './components/app.js';
import Language1 from './components/language1.js';
import Language from './components/language.js';
import Header from './WebsiteHomepage/Header.js';
import Main from './WebsiteHomepage/Main.js';
import Footer from './WebsiteHomepage/Footer.js';
import  './WebsiteHomepage/Styles/stylesheet.css';

function App() {

  const languageList = [
    {
      name: 'HTML & CSS',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
    },
    {
      name: 'JavaScript',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
    },
    {
      name: 'React',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
    },
    {
      name: 'Ruby',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
    },
    {
      name: 'Ruby on Rails',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
    },
    {
      name: 'Python',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
    }
  ];


  return (
    <div>
      
      <Header/>
      <Main/>
      <Footer/>
      {/* < Vic/>
      <Language1/>

      <Language   
       name='HTML & CSS'
       image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      />
      <Language
        name='JavaScript'
        image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
       />
      <Language 
      name='React'
      image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      />
     

      <div>      
        
        <div className='language'>
          
          <h1>List Of Languages from LanguageMap</h1>   */}
         {/*} {languageList.map((languageItem) => { */}   {/* Map Method */}
                      {/* return (
                        // Call the Language component and pass props to it
                        <Language
                        name={languageItem.name}
                        image={languageItem.image}
                        />
                      )
                    })}
          
        </div>
      </div> */}


                  
    </div>
  );
}

export default App;


// Props are values passed from the App.js


//You will be able to change the display according to 
//the language by passing the name and image data of each language from App.js to the Language component. 
//The data that you pass from App.js are called props.


//You can pass props by writing propName=value in the place where you call a component. 
//Here, two props, "name" and "image" are passed to the Language component.
//For readability, it's usually better to put prop declarations on new lines.
